/* Painted blossom branches after Van Gogh's Almond Blossom (1890): contoured branches, white petals
   laid in with short brush strokes, swirling dabs of night sky, and a turbulence filter that roughens
   every edge like wet paint. Seeded, so the same branch is drawn on every visit.
   FLOWERS.hero — the large branch on the home page. FLOWERS.sprig(id) — a small twig for rail and footer. */

const FLOWERS = (() => {
  // mulberry32: tiny seeded random, returns floats in [0, 1)
  const seeded = (seed) => () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const n = (v) => v.toFixed(1);

  // Smooth a hand-placed polyline into many points (Catmull-Rom), so it can be stroked with a taper.
  function smooth(pts, steps = 8) {
    const out = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [p0, p1, p2, p3] = [pts[i - 1] || pts[i], pts[i], pts[i + 1], pts[i + 2] || pts[i + 1]];
      for (let s = 0; s < steps; s++) {
        const t = s / steps, t2 = t * t, t3 = t2 * t;
        const c = (a, b, c2, d) => 0.5 * (2 * b + (c2 - a) * t + (2 * a - 5 * b + 4 * c2 - d) * t2 + (3 * b - a - 3 * c2 + d) * t3);
        out.push([c(p0[0], p1[0], p2[0], p3[0]), c(p0[1], p1[1], p2[1], p3[1])]);
      }
    }
    out.push(pts[pts.length - 1]);
    return out;
  }

  // A branch: dark contour, bark body, and a thin moonlit highlight, all tapering toward the tip.
  function branch(pts, width) {
    const line = smooth(pts);
    const passes = [
      { color: '#141112', scale: 1.35, dx: 0 },
      { color: '#5b4a3f', scale: 1, dx: 0 },
      { color: '#9a8574', scale: 0.28, dx: -width * 0.18 }
    ];
    return passes.map(({ color, scale, dx }) => line.slice(1).map((p, i) => {
      const q = line[i];
      const w = Math.max(0.8, width * scale * (1 - (i / line.length) * 0.7));
      return `<line x1="${n(q[0] + dx)}" y1="${n(q[1] + dx)}" x2="${n(p[0] + dx)}" y2="${n(p[1] + dx)}" stroke="${color}" stroke-width="${n(w)}"/>`;
    }).join('')).join('');
  }

  // Point and direction at fraction t along a polyline.
  function along(pts, t) {
    const lens = pts.slice(1).map((p, i) => Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1]));
    let d = t * lens.reduce((a, b) => a + b, 0);
    for (let i = 0; i < lens.length; i++) {
      if (d <= lens[i] || i === lens.length - 1) {
        const k = Math.min(1, d / lens[i]);
        const [a, b] = [pts[i], pts[i + 1]];
        return { x: a[0] + (b[0] - a[0]) * k, y: a[1] + (b[1] - a[1]) * k, angle: Math.atan2(b[1] - a[1], b[0] - a[0]) };
      }
      d -= lens[i];
    }
  }

  const PETAL_FILLS = ['#f4f2ec', '#eef2f4', '#f7f5ef', '#e6ecf0'];

  // An open blossom: five overlapping petals, each with two brush strokes, and a yellow-green heart.
  function blossom(x, y, r, rand) {
    const turn = rand() * 72;
    const tilt = 0.72 + rand() * 0.28;
    const petals = [0, 1, 2, 3, 4].map((i) => {
      const a = turn + i * 72 + (rand() - 0.5) * 14;
      const s = r * (0.9 + rand() * 0.2);
      const fill = PETAL_FILLS[Math.floor(rand() * PETAL_FILLS.length)];
      // Strokes run from the heart to the rim, bowing to a random side so the flower does not spin.
      const bow = (rand() < 0.5 ? -1 : 1) * s * (0.08 + rand() * 0.12);
      const side = (rand() < 0.5 ? -1 : 1) * s * 0.28;
      return `<g transform="rotate(${n(a)})">
        <path d="M0 0C${n(-s * 0.8)} ${n(-s * 0.25)} ${n(-s * 0.72)} ${n(-s * 1.08)} 0 ${n(-s)}C${n(s * 0.72)} ${n(-s * 1.08)} ${n(s * 0.8)} ${n(-s * 0.25)} 0 0Z" fill="${fill}" stroke="#7d8e9c" stroke-width="1.1"/>
        <path d="M0 ${n(-s * 0.28)}Q${n(bow)} ${n(-s * 0.6)} 0 ${n(-s * 0.88)}" stroke="#c2cfd9" stroke-width="${n(s * 0.12)}" fill="none"/>
        <path d="M${n(side * 0.6)} ${n(-s * 0.4)}Q${n(side)} ${n(-s * 0.62)} ${n(side * 0.7)} ${n(-s * 0.8)}" stroke="#ffffff" stroke-width="${n(s * 0.1)}" fill="none" opacity=".85"/>
      </g>`;
    }).join('');
    const stamens = [0, 1, 2, 3, 4, 5, 6].map((i) => {
      const a = (i / 7) * Math.PI * 2 + rand();
      return `<circle cx="${n(Math.cos(a) * r * 0.3)}" cy="${n(Math.sin(a) * r * 0.3)}" r="${n(r * 0.06)}" fill="#d9b44a"/>`;
    }).join('');
    return `<g transform="translate(${n(x)} ${n(y)}) scale(1 ${n(tilt)})">
      ${petals}
      <circle r="${n(r * 0.2)}" fill="#a9b95a"/><circle r="${n(r * 0.08)}" fill="#c47a86"/>${stamens}
    </g>`;
  }

  // A closed bud: a pale teardrop sitting in a rust-and-green cup, pointing away from the twig.
  function bud(x, y, r, angle) {
    const deg = (angle * 180) / Math.PI + 90;
    return `<g transform="translate(${n(x)} ${n(y)}) rotate(${n(deg)})">
      <path d="M0 ${n(-r)}C${n(r * 0.5)} ${n(-r * 0.6)} ${n(r * 0.45)} ${n(r * 0.15)} 0 ${n(r * 0.3)}C${n(-r * 0.45)} ${n(r * 0.15)} ${n(-r * 0.5)} ${n(-r * 0.6)} 0 ${n(-r)}Z" fill="#f1ede3" stroke="#7d8e9c" stroke-width="1"/>
      <path d="M${n(-r * 0.32)} ${n(r * 0.1)}Q0 ${n(r * 0.55)} ${n(r * 0.32)} ${n(r * 0.1)}" stroke="#8c4a3c" stroke-width="${n(r * 0.28)}" fill="none"/>
    </g>`;
  }

  // Short dabs of night sky that follow a slow swirl, the way the strokes move in The Starry Night.
  function sky(w, h, count, rand) {
    const cx = w * 0.55, cy = h * 0.4;
    const colors = ['#16233a', '#1d2d49', '#111b2c', '#243656'];
    return Array.from({ length: count }, () => {
      const x = rand() * w, y = rand() * h;
      const a = Math.atan2(y - cy, x - cx) + Math.PI / 2 + (rand() - 0.5) * 0.4;
      const len = 8 + rand() * 16;
      const dx = Math.cos(a) * len / 2, dy = Math.sin(a) * len / 2;
      return `<line x1="${n(x - dx)}" y1="${n(y - dy)}" x2="${n(x + dx)}" y2="${n(y + dy)}" stroke="${colors[Math.floor(rand() * colors.length)]}" stroke-width="${n(3 + rand() * 3)}" opacity=".7"/>`;
    }).join('');
  }

  function paint({ id, w, h, twigs, size, skyDabs, seed }) {
    const rand = seeded(seed);
    const flowers = twigs.flatMap(({ pts, count }) => Array.from({ length: count }, (_, k) => {
      const at = along(pts, 0.2 + (0.8 * (k + 0.5 + (rand() - 0.5) * 0.5)) / count);
      const side = k % 2 ? 1 : -1;
      const off = size * (0.3 + rand() * 0.5) * side;
      const x = at.x - Math.sin(at.angle) * off, y = at.y + Math.cos(at.angle) * off;
      const r = size * (0.65 + rand() * 0.45);
      return rand() < 0.22 ? bud(x, y, r * 0.75, at.angle + (side * Math.PI) / 2) : blossom(x, y, r, rand);
    }));
    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <defs><filter id="${id}" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="2" seed="${seed}"/>
        <feDisplacementMap in="SourceGraphic" scale="${n(size * 0.24)}"/>
      </filter></defs>
      <g filter="url(#${id})" stroke-linecap="round">
        ${skyDabs ? sky(w, h, skyDabs, rand) : ''}
        ${twigs.map((t) => branch(t.pts, t.width)).join('')}
        ${flowers.join('')}
      </g>
    </svg>`;
  }

  return {
    hero: paint({
      id: 'paint-hero', w: 600, h: 520, size: 24, skyDabs: 90, seed: 1890,
      twigs: [
        { pts: [[640, 10], [560, 60], [470, 110], [390, 160], [300, 210], [210, 250], [120, 300], [40, 370]], width: 14, count: 6 },
        { pts: [[470, 110], [455, 70], [420, 30]], width: 6, count: 3 },
        { pts: [[390, 160], [400, 220], [380, 290], [340, 350]], width: 7, count: 4 },
        { pts: [[300, 210], [270, 150], [250, 95]], width: 6, count: 3 },
        { pts: [[210, 250], [200, 310], [170, 380]], width: 5, count: 3 },
        { pts: [[120, 300], [90, 250], [60, 220]], width: 4, count: 2 },
        { pts: [[560, 60], [590, 120], [585, 190]], width: 5, count: 3 }
      ]
    }),
    // Takes an id so each copy on the page owns its filter.
    sprig: (id) => paint({
      id, w: 220, h: 150, size: 13, skyDabs: 0, seed: 1853,
      twigs: [
        { pts: [[230, 30], [170, 55], [110, 80], [50, 120], [10, 140]], width: 6, count: 3 },
        { pts: [[170, 55], [150, 20]], width: 3, count: 1 },
        { pts: [[110, 80], [120, 125]], width: 3, count: 2 }
      ]
    })
  };
})();
