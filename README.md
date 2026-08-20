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
