# dinhthaituan — personal site

Bilingual (EN/VI) personal website of Dinh Thai Tuan, served at
[sisypheanhus.github.io](https://sisypheanhus.github.io/).

## Stack

| Piece | Choice |
|-------|--------|
| Framework | None — static HTML + vanilla JS, hash routing |
| Content | `data.js` (all EN/VI strings) |
| Rendering | `app.js` (templates per section) |
| Styles | `styles.css` (Modernist tokens, earth-brown palette) |
| Math | KaTeX 0.16.9 via CDN |
| Fonts | Cormorant Garamond + EB Garamond (Google Fonts, Vietnamese subset) |
| Comments | `comments/` — Cloudflare Worker + D1, no accounts (see below) |

## Editing content

All content lives in `data.js` — posts (`POSTS`), publications (`PUBS`),
reading list (`MATERIALS`), resume (`RESUME`), about (`ABOUT`). Every user-facing
string is an `{ en, vi }` pair. Add a post by appending to `POSTS`; the blog,
home "Latest writing", feed, and search pick it up automatically.

## Local preview

```
python -m http.server 8000
```

Then open http://localhost:8000/.

## Comments

Every post ends with a comment form. `app.js` (`renderComments`, `mountComments`) talks to a
Cloudflare Worker in `comments/` (`COMMENTS_API`), which keeps comments in a D1 table.

| Piece | Where |
|-------|-------|
| Worker + schema | `comments/src/index.js`, `comments/schema.sql`, `comments/wrangler.jsonc` |
| Deploy | `cd comments && npm install && npx wrangler deploy` (schema once: `npm run schema`) |
| Secrets | `ADMIN_KEY` (signs delete links); optional `BOT_TOKEN` + `CHAT_ID` for a Telegram notice per comment |
| Spam | honeypot field, 3 s minimum on the form, 6 comments per IP per hour, size limits |
| Moderation | each Telegram notice carries a one-tap `…/delete?id=&key=` link that hides the comment |
