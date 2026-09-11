// Comments for sisypheanhus.github.io. A Cloudflare Worker in front of a D1 table.
//
//   GET  /?post=<slug>          -> { comments: [{ id, name, text, at }] }   (oldest first)
//   POST /  { post, name, text, website, t }
//                               -> { comment }  (201)  — `website` is a honeypot, must be empty
//   GET  /delete?id=&key=       -> hides one comment; the key is an HMAC the owner gets on Telegram
//
// No accounts: anyone can post a name and some words. Spam is kept down by the honeypot, a
// minimum time on the form, size limits and a per-IP hourly cap. The owner is told on Telegram
// (optional: BOT_TOKEN + CHAT_ID) with a one-tap delete link.
//
// Secrets: ADMIN_KEY (signs delete links). Optional: BOT_TOKEN, CHAT_ID.

const ORIGINS = new Set(["https://sisypheanhus.github.io", "http://localhost:8000", "http://127.0.0.1:8000"]);
const MAX_NAME = 40;
const MAX_TEXT = 2000;
const MIN_SECONDS_ON_FORM = 3;
const PER_IP_PER_HOUR = 6;
const POST_RE = /^[a-z0-9-]{1,80}$/;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("origin") || "";
    const cors = corsHeaders(origin);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

    try {
      if (url.pathname === "/" && request.method === "GET") return list(url, env, cors);
      if (url.pathname === "/" && request.method === "POST") return create(request, env, cors, origin);
      if (url.pathname === "/delete" && request.method === "GET") return remove(url, env);
      return json({ error: "not found" }, 404, cors);
    } catch (err) {
      console.error(err);
      return json({ error: "server" }, 500, cors);
    }
  },
};

async function list(url, env, cors) {
  const post = url.searchParams.get("post") || "";
  if (!POST_RE.test(post)) return json({ error: "post" }, 400, cors);
  const { results } = await env.DB.prepare(
    "SELECT id, name, text, created_at AS at FROM comments WHERE post = ?1 AND hidden = 0 ORDER BY created_at ASC LIMIT 500",
  )
    .bind(post)
    .all();
  return json({ comments: results }, 200, { ...cors, "cache-control": "no-store" });
}

async function create(request, env, cors, origin) {
  if (!ORIGINS.has(origin)) return json({ error: "origin" }, 403, cors);
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "body" }, 400, cors);
  }
  const post = String(body.post || "");
  const name = clean(body.name, MAX_NAME);
  const text = clean(body.text, MAX_TEXT);
  const honeypot = String(body.website || "");
  const secondsOnForm = (Date.now() - Number(body.t || 0)) / 1000;

  if (!POST_RE.test(post)) return json({ error: "post" }, 400, cors);
  if (!name || !text) return json({ error: "empty" }, 400, cors);
  // Bots fill every field and submit at once; people do neither. Pretend it worked.
  if (honeypot || !(secondsOnForm >= MIN_SECONDS_ON_FORM)) return json({ comment: fake(name, text) }, 201, cors);

  const ipHash = await hmac(env.ADMIN_KEY || "", "ip:" + (request.headers.get("cf-connecting-ip") || ""));
  const hourAgo = new Date(Date.now() - 3600_000).toISOString();
  const recent = await env.DB.prepare("SELECT COUNT(*) AS n FROM comments WHERE ip_hash = ?1 AND created_at > ?2")
    .bind(ipHash, hourAgo)
    .first("n");
  if (recent >= PER_IP_PER_HOUR) return json({ error: "slow down" }, 429, cors);

  const comment = { id: crypto.randomUUID(), post, name, text, at: new Date().toISOString() };
  await env.DB.prepare("INSERT INTO comments (id, post, name, text, created_at, ip_hash) VALUES (?1, ?2, ?3, ?4, ?5, ?6)")
    .bind(comment.id, post, name, text, comment.at, ipHash)
    .run();

  await notify(env, comment, new URL(request.url).origin).catch((err) => console.error("notify failed", err));
  return json({ comment: { id: comment.id, name, text, at: comment.at } }, 201, cors);
}

async function remove(url, env) {
  const id = url.searchParams.get("id") || "";
  const key = url.searchParams.get("key") || "";
  if (!id || !env.ADMIN_KEY || key !== (await deleteKey(env, id))) return new Response("no", { status: 403 });
  const res = await env.DB.prepare("UPDATE comments SET hidden = 1 WHERE id = ?1").bind(id).run();
  return new Response(res.meta.changes ? "deleted" : "already gone", { headers: { "content-type": "text/plain; charset=utf-8" } });
}

/** Tell the owner on Telegram, with a link that hides the comment. Silent when not configured. */
async function notify(env, c, base) {
  if (!env.BOT_TOKEN || !env.CHAT_ID) return;
  const text = `[blog] ${c.name} on ${c.post}:\n${c.text}\n\nhttps://sisypheanhus.github.io/#/blog/${c.post}\nxoá: ${base}/delete?id=${c.id}&key=${await deleteKey(env, c.id)}`;
  await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: env.CHAT_ID, text, disable_web_page_preview: true }),
  });
}

function deleteKey(env, id) {
  return hmac(env.ADMIN_KEY, "delete:" + id);
}

function clean(v, max) {
  return String(v ?? "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "")
    .trim()
    .slice(0, max);
}

function fake(name, text) {
  return { id: crypto.randomUUID(), name, text, at: new Date().toISOString() };
}

function corsHeaders(origin) {
  return {
    "access-control-allow-origin": ORIGINS.has(origin) ? origin : "https://sisypheanhus.github.io",
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "86400",
    vary: "origin",
  };
}

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", ...headers } });
}

async function hmac(secret, message) {
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
