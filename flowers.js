/* Blossom photographs: real flowers shot on black (Wikimedia Commons, see assets/flowers/CREDITS.md),
   keyed to transparency and served as WebP. FLOWERS.garden(key) scatters a seeded handful of them
   around a page — the same page always gets the same arrangement, different pages differ.
   FLOWERS.rail and FLOWERS.footer are small fixed sprigs. */

const FLOWERS = (() => {
  // mulberry32: tiny seeded random, returns floats in [0, 1)
  const seeded = (seed) => () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const hash = (s) => [...s].reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 7);

  const STOCK = ['apple-a', 'apple-b', 'cherry-a', 'cherry-b', 'sloe', 'hawthorn', 'magnolia', 'gypsophila', 'hawthorn-b', 'magnolia-b', 'cherry-leaf'];

  function bloom(name, { w, o = 0.85, r = 0, flip = false, deep = false, pos = '' }) {
    const vars = `--w:${w}px;--o:${o};--r:${r.toFixed(1)}deg;--f:${flip ? -1 : 1};${pos}`;
    return `<img src="assets/flowers/${name}.webp" alt="" class="bloom${deep ? ' bloom-deep' : ''}" style="${vars}">`;
  }

  // Slots hug the edges of #view, where the text is not. Deep ones sit blurred behind the others.
  // Sizes are for the home page; other pages take them at 0.8.
  const SLOTS = [
    { w: 400, pos: 'right:-70px;top:-50px' },
    { w: 230, pos: 'right:290px;top:30px' },
    { w: 170, pos: 'right:150px;top:290px', deep: true },
    { w: 130, pos: 'left:-30px;top:-20px', deep: true },
    { w: 190, pos: 'right:-40px;top:26%' },
    { w: 150, pos: 'left:20px;top:36%', deep: true },
    { w: 210, pos: 'right:-30px;top:48%' },
    { w: 150, pos: 'left:-40px;top:62%', deep: true },
    { w: 200, pos: 'right:120px;top:72%' },
    { w: 260, pos: 'right:60px;bottom:-40px' },
    { w: 180, pos: 'left:-20px;bottom:-30px' },
    { w: 140, pos: 'right:380px;bottom:120px', deep: true }
  ];

  function garden(key) {
    const rand = seeded(hash(key));
    const scale = key === 'home' ? 1 : 0.8;
    const deck = [...STOCK, ...STOCK].sort(() => rand() - 0.5);
    const blooms = SLOTS.map((s, i) => bloom(deck[i], {
      w: Math.round(s.w * scale),
      o: s.deep ? 0.3 + rand() * 0.15 : 0.6 + rand() * 0.3,
      r: (rand() - 0.5) * 60,
      flip: rand() < 0.5,
      deep: s.deep,
      pos: s.pos
    }));
    return `<div class="garden" aria-hidden="true">${blooms.join('')}</div>`;
  }

  const rail = [
    bloom('gypsophila', { w: 190, o: 0.7, r: -12, pos: 'left:-10px;top:0' }),
    bloom('cherry-b', { w: 96, o: 0.9, r: 18, pos: 'left:70px;top:70px' })
  ].join('');

  const footer = [
    bloom('apple-b', { w: 42, r: -14 }),
    bloom('cherry-a', { w: 46, r: 8 }),
    bloom('hawthorn', { w: 40, r: 22, flip: true })
  ].join('');

  return { garden, rail, footer };
})();
