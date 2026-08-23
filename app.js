/* Renderer + hash router. Routes: #/ #/blog #/blog/:slug #/notes #/projects
   #/publications #/materials #/resume #/about #/feed. Hashes that do not
   start with "#/" are in-page anchors (post TOC) and are ignored here. */

const state = {
  lang: localStorage.getItem('lang') || 'en',
  theme: localStorage.getItem('theme') || 'light',
  page: 'home',
  doc: null,
  prev: 'blog',
  tag: 'all',
  query: ''
};

const L = (o) => {
  if (o == null) return '';
  if (typeof o === 'string') return o;
  return o[state.lang] !== undefined ? o[state.lang] : o.en;
};

/* ---------- shared fragments ---------- */

const sectionHeader = (num, title, extra) => `
  <div style="display:flex;align-items:baseline;gap:14px;border-bottom:5px double var(--color-divider);padding-bottom:12px;margin-bottom:22px">
    <span style="font:500 15px/1 var(--font-heading);letter-spacing:.18em;text-transform:uppercase;color:var(--color-accent)">${num}</span>
    <h2 style="margin:0;font-weight:300;font-size:40px;letter-spacing:.07em;text-transform:uppercase">${title}</h2>
    ${extra || ''}
  </div>`;

const emptyState = () => `
  <div style="border-top:5px double var(--color-divider);border-bottom:5px double var(--color-divider);padding:64px 0;display:flex;flex-direction:column;gap:10px">
    <span style="font:400 12px/1 var(--font-body);letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent)">${L(UI.emptyKicker)}</span>
    <span style="font:300 34px/1.15 var(--font-heading);letter-spacing:.04em">${L(UI.emptyTitle)}</span>
    <span style="font:400 17px/1.6 var(--font-body);opacity:.6;max-width:42ch">${L(UI.emptyBody)}</span>
  </div>`;

const postRowMeta = (p) => `
  <span style="display:flex;gap:10px;font:400 10px/1 var(--font-body);letter-spacing:.1em;text-transform:uppercase;opacity:.5">
    <span>${p.date}</span><span>·</span><span>${L(p.read)}</span>
  </span>`;

/* ---------- section renderers ---------- */

function renderHome() {
  const nowRows = HOME.now.map((n) => `
    <div style="padding:16px 0;border-bottom:1px solid var(--color-divider)">
      <div style="font:800 15px/1.3 var(--font-heading)">${L(n.role)}</div>
      <div style="font:400 12.5px/1.5 var(--font-body);color:var(--color-accent-700);margin-top:3px">${n.org}</div>
      <div style="font:400 12.5px/1.55 var(--font-body);opacity:.68;margin-top:6px">${L(n.what)}</div>
      ${n.quip ? `<div style="font:400 italic 12.5px/1.55 var(--font-body);opacity:.68;margin-top:6px">${n.quip}</div>` : ''}
    </div>`).join('');

  const latestRows = POSTS.map((p) => `
    <a href="#/blog/${p.slug}" class="plain-link hover-tint" data-from="home" style="display:block;padding:16px 0;border-bottom:1px solid var(--color-divider)">
      <div style="margin-bottom:6px">${postRowMeta(p)}</div>
      <div style="font:800 15px/1.3 var(--font-heading)">${L(p.title)}</div>
      <div style="font:400 12.5px/1.55 var(--font-body);opacity:.68;margin-top:5px">${L(p.excerpt)}</div>
    </a>`).join('');

  const stats = HOME.stats.map((s) => `
    <div style="display:flex;flex-direction:column;gap:10px;padding:26px 24px 28px;border-left:1px solid color-mix(in srgb, var(--color-text) 18%, transparent)">
      <div style="font:400 15px/1 var(--font-heading);letter-spacing:.3em;text-transform:uppercase;color:var(--color-accent)">${s.n}</div>
      <div style="font:300 italic 23px/1.32 var(--font-heading);text-wrap:pretty">${L(s.label)}</div>
    </div>`).join('');

  return `
  <div style="max-width:1000px">
    <p style="font:400 11px/1 var(--font-body);letter-spacing:.22em;text-transform:uppercase;color:var(--color-accent);margin:0 0 22px">${L(UI.homeKicker)}</p>
    <h1 style="margin:0 0 26px;font-weight:300;font-size:clamp(40px,5.6vw,80px);line-height:1.02;letter-spacing:.02em;text-transform:uppercase;max-width:17ch;font-family:var(--font-heading)">${L(HOME.headline)}</h1>
    <div style="display:flex;gap:16px;margin:0 0 28px;max-width:52ch">
      <div style="width:2px;background:var(--color-accent);flex:none"></div>
      <div>
        <p style="margin:0;font:300 italic 25px/1.35 var(--font-heading)">${L(UI.epigraph)}</p>
        <p style="margin:6px 0 0;font:400 11px/1.4 var(--font-body);letter-spacing:.14em;text-transform:uppercase;opacity:.55">${L(UI.epigraphSource)}</p>
      </div>
    </div>
    <p style="margin:0 0 30px;max-width:60ch;font:400 19px/1.62 var(--font-body);text-wrap:pretty;opacity:.85">${L(HOME.intro)}</p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:44px">
      <a href="#/blog" class="btn btn-primary">${L(UI.readWriting)}</a>
      <a href="#/resume" class="btn btn-secondary">${L(UI.seeResume)}</a>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));border-top:5px double var(--color-divider);border-bottom:5px double var(--color-divider)">${stats}</div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:44px;margin-top:52px">
      <section>
        <div style="display:flex;align-items:baseline;gap:12px;border-bottom:2px solid var(--color-divider);padding-bottom:10px;margin-bottom:6px">
          <h3 style="margin:0;font-weight:400;font-size:25px;letter-spacing:.11em;text-transform:uppercase;font-family:var(--font-heading)">${L(UI.nowTitle)}</h3>
          <span style="margin-left:auto;font:400 10px/1 var(--font-body);letter-spacing:.12em;text-transform:uppercase;opacity:.5">2026</span>
        </div>
        ${nowRows}
      </section>
      <section>
        <div style="display:flex;align-items:baseline;gap:12px;border-bottom:2px solid var(--color-divider);padding-bottom:10px;margin-bottom:6px">
          <h3 style="margin:0;font-weight:400;font-size:25px;letter-spacing:.11em;text-transform:uppercase;font-family:var(--font-heading)">${L(UI.latestTitle)}</h3>
          <a href="#/blog" style="margin-left:auto;font:400 11px/1 var(--font-body);letter-spacing:.1em;text-transform:uppercase;text-decoration:none">${L(UI.all)} →</a>
        </div>
        ${latestRows}
      </section>
    </div>
  </div>`;
}

function renderBlog() {
  const allTags = [...new Set(POSTS.flatMap((p) => p.tags))];
  const chips = [`<button class="chip${state.tag === 'all' ? ' on' : ''}" data-tag="all">${L(UI.all)}</button>`]
    .concat(allTags.map((t) => `<button class="chip${state.tag === t ? ' on' : ''}" data-tag="${t}">${t}</button>`))
    .join('');

  const posts = POSTS.filter((p) => state.tag === 'all' || p.tags.includes(state.tag));
  const rows = posts.map((p) => `
    <a href="#/blog/${p.slug}" class="plain-link hover-tint" data-from="blog" style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:24px;align-items:start;padding:22px 0;border-bottom:1px solid var(--color-divider)">
      <span>
        <span style="display:block;margin-bottom:8px">${postRowMeta(p)}</span>
        <span style="display:block;font:800 22px/1.2 var(--font-heading);letter-spacing:.01em;max-width:26ch">${L(p.title)}</span>
        <span style="display:block;font:400 14px/1.6 var(--font-body);opacity:.72;margin-top:8px;max-width:56ch">${L(p.excerpt)}</span>
      </span>
      <span style="display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end;max-width:180px">
        ${p.tags.map((t) => `<span class="tag tag-accent">${t}</span>`).join('')}
      </span>
    </a>`).join('');

  return `
  <div style="max-width:900px">
    ${sectionHeader('02', L(UI.blogTitle))}
    ${POSTS.length === 0 ? emptyState() : ''}
    <div id="tag-chips" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px">${chips}</div>
    ${rows}
  </div>`;
}

function renderPost(slug) {
  const src = POSTS.find((p) => p.slug === slug);
  if (!src) return renderBlog();

  const blocks = src.body.map((b) => {
    if (b.h) return `<h3 id="${b.id || ''}" style="margin:34px 0 12px;font-size:21px;letter-spacing:.01em;scroll-margin-top:80px;font-family:var(--font-heading)">${L(b.h)}</h3>`;
    if (b.p) return `<p style="margin:0 0 16px;font:400 19px/1.64 var(--font-body);text-wrap:pretty">${L(b.p)}</p>`;
    if (b.math) return `<div style="padding:18px 22px;margin:0 0 20px;background:var(--color-surface);border-left:2px solid var(--color-accent);font-size:15px">${b.math}</div>`;
    if (b.code) return `<pre style="margin:0 0 20px;padding:16px 18px;background:var(--color-surface);border-left:2px solid var(--color-divider);overflow-x:auto;font:400 12.5px/1.6 ui-monospace,Menlo,monospace">${b.code}</pre>`;
    if (b.img) return `
      <figure style="margin:6px 0 30px">
        <img src="${b.img}" alt="${b.cap || ''}" loading="lazy" style="width:100%;height:auto;display:block">
        <figcaption style="margin-top:9px;font:400 11.5px/1.5 var(--font-body);letter-spacing:.12em;text-transform:uppercase;opacity:.5">${b.cap || ''}</figcaption>
      </figure>`;
    if (b.pair) return `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:6px 0 30px">
        ${b.pair.map((q) => `
          <figure style="margin:0">
            <img src="${q.img}" alt="${q.cap || ''}" loading="lazy" style="width:100%;height:auto;display:block">
            <figcaption style="margin-top:8px;font:400 10.5px/1.45 var(--font-body);letter-spacing:.12em;text-transform:uppercase;opacity:.5">${q.cap || ''}</figcaption>
          </figure>`).join('')}
      </div>`;
    if (b.note) return `<p style="margin:0 0 20px;padding:12px 16px;background:var(--color-accent-100);color:var(--color-accent-800);font:400 13px/1.55 var(--font-body)">${b.note === 'draft' ? L(UI.draft) : L(b.note)}</p>`;
    return '';
  }).join('');

  const toc = src.body.filter((b) => b.h).map((b) =>
    `<a href="#${b.id}" class="toclink">${L(b.h)}</a>`).join('');

  return `
  <article class="post-grid" style="max-width:1020px;display:grid;grid-template-columns:minmax(0,1fr) 200px;gap:52px;align-items:start">
    <div style="max-width:680px">
      <a href="#/${state.prev === 'home' ? '' : state.prev}" style="display:inline-block;font:400 11px/1 var(--font-body);letter-spacing:.12em;text-transform:uppercase;text-decoration:none;margin-bottom:26px">← ${L(UI.back)}</a>
      <div style="display:flex;gap:10px;font:400 10.5px/1 var(--font-body);letter-spacing:.1em;text-transform:uppercase;opacity:.55;margin-bottom:14px">
        <span>${src.date}</span><span>·</span><span>${L(src.read)}</span>
      </div>
      <h1 style="margin:0 0 20px;font-weight:600;font-size:clamp(32px,3.9vw,50px);line-height:1.1;letter-spacing:.005em;font-family:var(--font-heading)">${L(src.title)}</h1>
      <div style="height:5px;border-top:1px solid var(--color-divider);border-bottom:1px solid var(--color-divider);margin:0 0 28px"></div>
      ${blocks}
      <div style="height:2px;background:var(--color-divider);margin:34px 0 16px"></div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">${src.tags.map((t) => `<span class="tag tag-accent">${t}</span>`).join('')}</div>
    </div>
    <aside class="post-toc" style="position:sticky;top:90px;display:flex;flex-direction:column;gap:9px;border-left:2px solid var(--color-divider);padding-left:18px">
      <span style="font:400 10px/1 var(--font-body);letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:2px">${L(UI.contents)}</span>
      ${toc}
    </aside>
  </article>`;
}

function renderReserved(num, title) {
  return `<div style="max-width:900px">${sectionHeader(num, title)}${emptyState()}</div>`;
}

function renderPublications() {
  const pubs = PUBS.map((p) => `
    <div style="display:grid;grid-template-columns:96px minmax(0,1fr);gap:24px;padding:24px 0;border-bottom:1px solid var(--color-divider)">
      <span style="font:400 10px/1.6 var(--font-body);letter-spacing:.12em;text-transform:uppercase;color:var(--color-accent)">${L(p.kind)}</span>
      <div>
        <div style="font:400 13px/1.5 var(--font-body);opacity:.6;margin-bottom:6px">${p.authors}</div>
        <h3 style="margin:0 0 8px;font-size:19px;line-height:1.3;letter-spacing:-.01em;max-width:44ch;font-family:var(--font-heading)">${L(p.title)}</h3>
        <div style="font:400 13.5px/1.55 var(--font-body);opacity:.78">${L(p.venue)}</div>
      </div>
    </div>`).join('');

  const acts = ACTIVITIES.map((a) => `
    <div style="display:grid;grid-template-columns:150px minmax(0,1fr);gap:20px;padding:14px 0;border-bottom:1px solid var(--color-divider);font:400 14px/1.5 var(--font-body)">
      <span style="opacity:.55;font-size:12.5px">${a.when}</span>
      <span>${L(a.what)}</span>
    </div>`).join('');

  return `
  <div style="max-width:880px">
    ${sectionHeader('05', L(UI.pubsTitle))}
    ${pubs}
    <h3 style="margin:48px 0 6px;font-weight:400;font-size:25px;letter-spacing:.11em;text-transform:uppercase;font-family:var(--font-heading)">${L(UI.activitiesTitle)}</h3>
    <div style="height:2px;background:var(--color-divider);margin-bottom:6px"></div>
    ${acts}
  </div>`;
}

function renderMaterials() {
  const groups = MATERIALS.map((g) => `
    <section style="margin-bottom:52px">
      <div style="display:flex;align-items:baseline;gap:12px;padding-bottom:9px;border-bottom:5px double var(--color-divider);margin-bottom:4px">
        <h3 style="margin:0;font-weight:400;font-size:24px;letter-spacing:.11em;text-transform:uppercase;font-family:var(--font-heading)">${g.name}</h3>
        <span style="margin-left:auto;font:400 11px/1 var(--font-body);letter-spacing:.14em;text-transform:uppercase;opacity:.5">${g.items.length} ${L(UI.titles)}</span>
      </div>
      ${g.items.map((m) => `
        <div style="display:grid;grid-template-columns:minmax(0,0.9fr) minmax(0,1.1fr);gap:34px;padding:20px 0;border-bottom:1px solid color-mix(in srgb, var(--color-text) 18%, transparent);align-items:baseline">
          <div>
            <div style="font:400 11.5px/1.4 var(--font-body);letter-spacing:.14em;text-transform:uppercase;color:var(--color-accent);margin-bottom:5px">${m.ref}</div>
            <div style="font:600 21px/1.28 var(--font-heading);letter-spacing:.01em">${m.title}</div>
            <div style="font:400 italic 15px/1.4 var(--font-body);opacity:.5;margin-top:4px">(${m.formats})</div>
          </div>
          <p style="margin:0;font:400 16.5px/1.6 var(--font-body);opacity:.8;text-wrap:pretty">${m.note}</p>
        </div>`).join('')}
    </section>`).join('');

  return `
  <div style="max-width:920px">
    ${sectionHeader('06', L(UI.materialsTitle))}
    <h3 style="margin:0 0 14px;font-weight:300;font-size:31px;letter-spacing:.03em;font-family:var(--font-heading)">${UI.canonTitle}</h3>
    <p style="max-width:62ch;font:400 17.5px/1.66 var(--font-body);opacity:.8;margin:0 0 46px;text-wrap:pretty">${L(UI.materialsIntro)}</p>
    ${groups}
  </div>`;
}

function renderResume() {
  const band = (label, inner, first, last) => `
    <div style="display:grid;grid-template-columns:150px minmax(0,1fr);gap:20px 28px;padding:20px 0;${first ? 'border-top:2px solid var(--color-divider);' : ''}border-bottom:${last ? '2px' : '1px'} solid var(--color-divider)">
      <span style="font:400 10px/1.6 var(--font-body);letter-spacing:.12em;text-transform:uppercase;color:var(--color-accent)">${label}</span>
      ${inner}
    </div>`;

  const education = `
    <div>
      <div style="font:800 17px/1.3 var(--font-heading)">${L(RESUME.school)}</div>
      <div style="font:400 14px/1.5 var(--font-body);opacity:.8;margin-top:3px">${L(RESUME.degree)}</div>
      <div style="font:400 12.5px/1.5 var(--font-body);opacity:.55;margin-top:3px">${L(RESUME.years)} · ${RESUME.gpa}</div>
      <div style="font:400 13px/1.55 var(--font-body);opacity:.7;margin-top:8px;max-width:52ch">${L(RESUME.courses)}</div>
    </div>`;

  const roles = `
    <div style="display:flex;flex-direction:column;gap:24px">
      ${RESUME.roles.map((r) => `
        <div>
          <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap">
            <span style="font:600 21px/1.25 var(--font-heading);letter-spacing:.01em">${L(r.role)}</span>
            <span style="margin-left:auto;font:400 12.5px/1.4 var(--font-body);opacity:.5">${r.when}</span>
          </div>
          <div style="font:400 14px/1.5 var(--font-body);color:var(--color-accent-700);margin-top:3px">${L(r.org)} · ${L(r.place)}</div>
          ${r.quip ? `<p style="margin:9px 0 0;font:300 italic 20px/1.4 var(--font-heading);max-width:50ch">${r.quip}</p>` : ''}
          ${r.bullets.length ? `<ul style="margin:10px 0 0;padding-left:16px;display:flex;flex-direction:column;gap:5px">
            ${r.bullets.map((b) => `<li style="font:400 13.5px/1.6 var(--font-body);opacity:.8;max-width:60ch">${L(b)}</li>`).join('')}
          </ul>` : ''}
        </div>`).join('')}
    </div>`;

  const skills = `
    <div style="display:flex;flex-direction:column;gap:14px">
      ${RESUME.skills.map((s) => `
        <div>
          <div style="font:400 10.5px/1 var(--font-body);letter-spacing:.1em;text-transform:uppercase;opacity:.5;margin-bottom:7px">${L(s.group)}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px">${s.items.map((i) => `<span class="tag tag-outline">${L(i)}</span>`).join('')}</div>
        </div>`).join('')}
    </div>`;

  const awards = `
    <div style="display:flex;flex-direction:column;gap:10px">
      ${RESUME.awards.map((a) => `<div style="font:400 14px/1.55 var(--font-body)">${L(a)}</div>`).join('')}
    </div>`;

  const dlBtn = `
    <a href="uploads/Dinh_Thai_Tuan_Resume.pdf" target="_blank" class="btn btn-primary" style="margin-left:auto">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M7 11l5 5 5-5M4 21h16"></path></svg>
      ${L(UI.downloadPdf)}
    </a>`;

  return `
  <div style="max-width:900px">
    ${sectionHeader('07', L(UI.resumeTitle), dlBtn)}
    <p style="max-width:58ch;font:400 15px/1.62 var(--font-body);opacity:.75;margin:0 0 34px">${L(UI.resumeIntro)}</p>
    ${band(L(UI.education), education, true, false)}
    ${band(L(UI.experience), roles, false, false)}
    ${band(L(UI.skills), skills, false, false)}
    ${band(L(UI.awards), awards, false, true)}
  </div>`;
}

function renderAbout() {
  const paras = ABOUT.paras.map((p) => `<p style="margin:0 0 18px;font:400 19px/1.64 var(--font-body);text-wrap:pretty;max-width:58ch">${L(p)}</p>`).join('');
  const interests = ABOUT.interests.map((i) => `
    <div style="padding:18px;background:var(--color-bg)">
      <div style="font:800 14.5px/1.25 var(--font-heading)">${L(i.name)}</div>
      <div style="font:400 12.5px/1.55 var(--font-body);opacity:.68;margin-top:6px">${L(i.line)}</div>
    </div>`).join('');

  return `
  <div style="max-width:960px">
    ${sectionHeader('08', L(UI.aboutTitle))}
    <div class="about-grid" style="display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:48px;align-items:start">
      <div>
        ${paras}
        <h3 style="margin:42px 0 6px;font-weight:400;font-size:25px;letter-spacing:.11em;text-transform:uppercase;font-family:var(--font-heading)">${L(UI.interestsTitle)}</h3>
        <div style="height:2px;background:var(--color-divider);margin-bottom:22px"></div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:2px;background:var(--color-divider)">${interests}</div>
      </div>
      <aside class="about-aside" style="border-left:2px solid var(--color-divider);padding-left:22px;display:flex;flex-direction:column;gap:22px">
        <figure style="margin:0">
          <img src="assets/portrait.jpeg" alt="Dinh Thai Tuan" loading="lazy" style="width:100%;height:auto;display:block">
          <figcaption style="margin-top:8px;font:400 11px/1.5 var(--font-body);letter-spacing:.12em;text-transform:uppercase;opacity:.5">Hanoi, 2026</figcaption>
        </figure>
        <div>
          <div style="font:400 10px/1 var(--font-body);letter-spacing:.14em;text-transform:uppercase;opacity:.5;margin-bottom:10px">${L(UI.elsewhere)}</div>
          <div style="display:flex;flex-direction:column;gap:7px;font:400 13px/1.5 var(--font-body)">
            <a href="mailto:dinhthaituan48@gmail.com" style="text-decoration:none">dinhthaituan48@gmail.com</a>
            <a href="https://github.com/SisypheanHUS" target="_blank" rel="noopener" style="text-decoration:none">github.com/SisypheanHUS</a>
            <a href="https://www.linkedin.com/in/SisypheanHUS" target="_blank" rel="noopener" style="text-decoration:none">linkedin.com/in/SisypheanHUS</a>
          </div>
        </div>
      </aside>
    </div>
  </div>`;
}

function renderFeed() {
  const items = []
    .concat(POSTS.map((p) => ({ date: p.date, kind: L(UI.kindPost), title: L(p.title), href: `#/blog/${p.slug}`, from: 'feed' })))
    .concat(PUBS.map((p) => ({ date: p.date, kind: L(UI.kindPub), title: L(p.title), href: '#/publications' })))
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const rows = items.map((f) => `
    <a href="${f.href}" class="plain-link hover-tint" ${f.from ? `data-from="${f.from}"` : ''} style="display:grid;grid-template-columns:96px 96px minmax(0,1fr);gap:18px;align-items:baseline;padding:14px 0;border-bottom:1px solid var(--color-divider)">
      <span style="font:400 11.5px/1.4 ui-monospace,Menlo,monospace;opacity:.5">${f.date}</span>
      <span style="font:400 10px/1.4 var(--font-body);letter-spacing:.1em;text-transform:uppercase;color:var(--color-accent)">${f.kind}</span>
      <span style="font:400 15px/1.45 var(--font-body)">${f.title}</span>
    </a>`).join('');

  return `
  <div style="max-width:820px">
    ${sectionHeader('09', L(UI.feedTitle))}
    <p style="max-width:56ch;font:400 15px/1.62 var(--font-body);opacity:.75;margin:0 0 26px">${L(UI.feedIntro)}</p>
    ${rows}
  </div>`;
}

function renderSearch() {
  const q = state.query.trim().toLowerCase();
  const hit = (s) => (s || '').toLowerCase().indexOf(q) >= 0;

  const results = []
    .concat(POSTS.filter((p) => hit(L(p.title)) || hit(L(p.excerpt)) || hit(p.tags.join(' ')))
      .map((p) => ({ kind: L(UI.kindPost), title: L(p.title), excerpt: L(p.excerpt), href: `#/blog/${p.slug}`, from: 'blog' })))
    .concat(MATERIALS.reduce((acc, g) => acc.concat(g.items.filter((m) => hit(m.title) || hit(m.ref) || hit(m.note))
      .map((m) => ({ kind: g.name, title: m.title, excerpt: m.ref + ' · ' + m.formats, href: '#/materials' }))), []));

  const rows = results.map((r) => `
    <a href="${r.href}" class="plain-link hover-tint" ${r.from ? `data-from="${r.from}"` : ''} style="display:grid;grid-template-columns:112px minmax(0,1fr);gap:20px;padding:16px 0;border-bottom:1px solid var(--color-divider)">
      <span style="font:400 10px/1.6 var(--font-body);letter-spacing:.12em;text-transform:uppercase;color:var(--color-accent)">${r.kind}</span>
      <span style="display:flex;flex-direction:column;gap:4px">
        <span style="font:800 17px/1.25 var(--font-heading)">${r.title}</span>
        <span style="font:400 13px/1.5 var(--font-body);opacity:.68">${r.excerpt}</span>
      </span>
    </a>`).join('');

  return `
  <div style="max-width:860px">
    <div style="display:flex;align-items:baseline;gap:14px;border-bottom:2px solid var(--color-divider);padding-bottom:12px;margin-bottom:26px">
      <span style="font:500 15px/1 var(--font-heading);letter-spacing:.18em;text-transform:uppercase;color:var(--color-accent)">/</span>
      <h2 style="margin:0;font-weight:300;font-size:34px;letter-spacing:.05em;text-transform:uppercase;font-family:var(--font-heading)">${L(UI.resultsFor)} “${state.query}”</h2>
      <span style="margin-left:auto;font:400 12px/1 var(--font-body);opacity:.55">${results.length} ${L(UI.results)}</span>
    </div>
    ${rows}
    ${results.length === 0 ? `<p style="font:400 14px/1.6 var(--font-body);opacity:.6;padding-top:18px">${L(UI.noResults)}</p>` : ''}
  </div>`;
}

/* ---------- chrome ---------- */

function renderRail() {
  const searching = state.query.trim().length > 1;
  const links = NAV.map((n) => `
    <a href="#/${n.id === 'home' ? '' : n.id}" class="navlink${state.page === n.id && !state.doc && !searching ? ' active' : ''}">
      <span class="nav-ord">${n.num}</span><span>${L(n.label)}</span>
    </a>`).join('');

  document.getElementById('rail').innerHTML = `
    ${links}
    <div class="rail-rule"></div>
    <div class="rail-contacts">
      <a href="mailto:dinhthaituan48@gmail.com" class="quiet-link">dinhthaituan48@gmail.com</a>
      <a href="https://github.com/SisypheanHUS" target="_blank" rel="noopener" class="quiet-link">GitHub / SisypheanHUS</a>
      <a href="https://www.linkedin.com/in/SisypheanHUS" target="_blank" rel="noopener" class="quiet-link">LinkedIn / SisypheanHUS</a>
      <span style="opacity:.5">Hanoi, Vietnam</span>
    </div>`;
}

function renderChrome() {
  document.documentElement.lang = state.lang;
  document.getElementById('brand-role').textContent = L(UI.role);
  document.getElementById('search-input').placeholder = L(UI.search);
  document.getElementById('footer-motto').textContent = L(UI.builtWith);
  document.getElementById('btn-en').classList.toggle('on', state.lang === 'en');
  document.getElementById('btn-vi').classList.toggle('on', state.lang === 'vi');
  document.getElementById('btn-theme').title = L(UI.theme);
  const dark = state.theme === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : '';
  document.getElementById('ico-moon').style.display = dark ? 'none' : 'block';
  document.getElementById('ico-sun').style.display = dark ? 'block' : 'none';
}

/* ---------- math ---------- */

function typeset(tries) {
  const n = tries || 0;
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(document.getElementById('view'), {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    } catch (e) {}
  } else if (n < 25) {
    setTimeout(() => typeset(n + 1), 200);
  }
}

/* ---------- router + render ---------- */

function render() {
  renderChrome();
  renderRail();
  const view = document.getElementById('view');
  const searching = state.query.trim().length > 1;

  let html;
  if (searching) html = renderSearch();
  else if (state.doc) html = renderPost(state.doc);
  else if (state.page === 'home') html = renderHome();
  else if (state.page === 'blog') html = renderBlog();
  else if (state.page === 'notes') html = renderReserved('03', L(UI.notesTitle));
  else if (state.page === 'projects') html = renderReserved('04', L(UI.projectsTitle));
  else if (state.page === 'publications') html = renderPublications();
  else if (state.page === 'materials') html = renderMaterials();
  else if (state.page === 'resume') html = renderResume();
  else if (state.page === 'about') html = renderAbout();
  else if (state.page === 'feed') html = renderFeed();
  else html = renderHome();

  view.innerHTML = html;
  typeset();
}

function route() {
  const h = location.hash;
  if (h && !h.startsWith('#/')) return; // in-page anchor (post TOC)
  const parts = (h || '#/').slice(2).split('/').filter(Boolean);
  const page = parts[0] || 'home';
  const valid = NAV.some((n) => n.id === page);
  state.page = valid ? page : 'home';
  state.doc = (page === 'blog' && parts[1]) ? parts[1] : null;
  state.query = '';
  document.getElementById('search-input').value = '';
  render();
  window.scrollTo(0, 0);
}

/* ---------- events ---------- */

document.getElementById('btn-en').addEventListener('click', () => {
  state.lang = 'en'; localStorage.setItem('lang', 'en'); render();
});
document.getElementById('btn-vi').addEventListener('click', () => {
  state.lang = 'vi'; localStorage.setItem('lang', 'vi'); render();
});
document.getElementById('btn-theme').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', state.theme);
  renderChrome();
});
document.getElementById('search-input').addEventListener('input', (e) => {
  state.query = e.target.value;
  render();
});

// Track which section a post was opened from, and handle tag chips.
document.addEventListener('click', (e) => {
  const from = e.target.closest('[data-from]');
  if (from) state.prev = from.dataset.from;
  const chip = e.target.closest('.chip');
  if (chip) {
    state.tag = chip.dataset.tag;
    render();
  }
  // A link to the hash we are already on fires no hashchange event,
  // which would leave a search overlay stuck — re-route by hand.
  const link = e.target.closest('a[href^="#/"]');
  if (link && link.getAttribute('href') === location.hash) route();
});

window.addEventListener('hashchange', route);
route();
