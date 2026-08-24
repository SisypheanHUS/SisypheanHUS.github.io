/* Site content — ported verbatim from the design handoff prototype.
   English only. */

const UI = {
  role: 'Applied mathematics · Hanoi',
  search: 'Search notes, posts, files…',
  theme: 'Toggle dark mode',
  homeKicker: 'Student · alpha researcher · writes things down',
  epigraph: 'One must imagine Sisyphus happy.',
  epigraphSource: 'Albert Camus, The Myth of Sisyphus',
  readWriting: 'Read the blog',
  seeResume: 'Resume',
  nowTitle: 'What I am doing now',
  latestTitle: 'Latest writing',
  all: 'All',
  back: 'Back',
  contents: 'Contents',
  blogTitle: 'Blog',
  notesTitle: 'Technical notes',
  projectsTitle: 'Projects',
  pubsTitle: 'Publications',
  activitiesTitle: 'Academic activities',
  materialsTitle: 'Materials',
  canonTitle: 'The Western Gappy Canon',
  materialsIntro: 'I am a fan of Gappy, and I think this list of his is good, so I keep a copy of it here on my own blog. The picks and the short note under each title are his words, not mine.',
  emptyKicker: 'Reserved',
  emptyTitle: 'Nothing here yet.',
  emptyBody: 'This section is held open. Send me what belongs here and I will set it in.',
  resumeTitle: 'Resume',
  resumeIntro: 'The short version. The PDF has everything, including the full alpha research detail.',
  downloadPdf: 'Download PDF',
  education: 'Education',
  experience: 'Experience',
  skills: 'Skills',
  awards: 'Awards',
  aboutTitle: 'About',
  interestsTitle: 'Outside the math',
  elsewhere: 'Elsewhere',
  feedTitle: 'Feed',
  feedIntro: 'Everything on this site in one chronological list — posts, notes, papers, talks.',
  resultsFor: 'Results for',
  results: 'results',
  noResults: 'Nothing matched. Try “alpha”, “SIS”, “Raman” or “PDE”.',
  builtWith: 'Set in Garamond. The stone goes back up tomorrow.',
  kindPost: 'Post',
  kindPub: 'Paper',
  titles: 'titles',
  draft: 'Draft — the rest of this piece is still in my notebook. Ask me and I will finish it sooner.'
};

const NAV = [
  { id: 'home', num: '01', label: 'Home' },
  { id: 'blog', num: '02', label: 'Blog' },
  { id: 'notes', num: '03', label: 'Technical notes' },
  { id: 'projects', num: '04', label: 'Projects' },
  { id: 'publications', num: '05', label: 'Publications' },
  { id: 'materials', num: '06', label: 'Materials' },
  { id: 'resume', num: '07', label: 'Resume' },
  { id: 'about', num: '08', label: 'About' },
  { id: 'feed', num: '09', label: 'Feed' }
];

const HOME = {
  headline: 'I write down what I am still figuring out.',
  intro: 'Applied mathematics student in Hanoi. I do alpha research at WorldQuant BRAIN and physics research at IOP VAST. The rest of my mathematics is self-taught, and I only read what brings me joy. This site is where I reflect on and criticize my own work, tell a few jokes, and share whatever else I feel like writing about.',
  stats: [
    { n: 'i', label: 'im not good at math' },
    { n: 'ii', label: 'im going for a master degree in germany for mathematics (hopefully)' },
    { n: 'iii', label: 'i want to retire as soon as posible to sleep all days lmao' }
  ],
  now: [
    { role: 'Research Consultant', org: 'WorldQuant BRAIN', what: 'I use techniques such as pre-measured signal pooling (alpha pool), correlation-penalized scoring with hard prod-corr gates, bandit-style weighted sampling with decay (Efraimidis–Spirakis), closed-form local optimization instead of black-box search, and out-of-sample-only validation for capital allocation.' },
    { role: 'Research Internship', org: 'Vietnam Academy of Science and Technology · Internship', what: 'Institutions of Physics. Supervisor: Dr Vu Duong.', quip: 'If you’re reading this, professor. thank you for guiding a confused particle.' },
    { role: 'wanderer of thoughts', org: 'Under a good tree. · Full-time', what: 'I’m farming wisdom and try to be able to see math as a painting.' }
  ]
};

const POSTS = [
  {
    slug: 'thesis-notebook', date: '2026-09-15', read: '1 min read', tags: ['upcoming', 'thesis', 'math', 'life'],
    title: 'The thesis notebook',
    excerpt: 'A running account of writing my graduation thesis — what works, what does not, and everything I would tell myself six months ago.',
    body: [{ note: 'draft' }]
  },
  {
    slug: 'hcm-physics-summer-school-2026', date: '2026-08-30', read: '1 min read', tags: ['upcoming', 'physics', 'summer school', 'ho chi minh city'],
    title: 'Ho Chi Minh City, for a physics summer school',
    excerpt: 'A week in Ho Chi Minh City for a physics summer school, August 2026. Full write-up coming.',
    body: [{ note: 'draft' }]
  },
  {
    slug: 'singapore-iqc-2025', date: '2026-08-24', read: '1 min read', tags: ['upcoming', 'singapore', 'IQC', 'quant'],
    title: 'Singapore, for the IQC 2025 Global Final',
    excerpt: 'Notes from the WorldQuant International Quant Championship 2025 finals — twelve delegates, one from Vietnam. Writing this up soon.',
    body: [{ note: 'draft' }]
  },
  {
    slug: 'nara', date: '2025-09-02', read: '11 min read', tags: ['nara', 'math biology', 'life'],
    title: 'One month in Nara',
    excerpt: 'Population dynamics in the morning, deer in the afternoon, and a birthday spent watching a film about a girl who does not exist.',
    body: [
      { img: 'assets/ps-09.jpeg', cap: 'Nara Women’s University, morning' },
      { pair: [{ img: 'assets/ps-08.jpeg', cap: 'The way in' }, { img: 'assets/ps-05.jpeg', cap: 'Club noticeboard' }] },
      { h: 'The mathematics', id: 'nara-math' },
      { math: '$$\\frac{dN}{dt} = f(N)\\,N$$' },
      { img: 'assets/lecture.jpeg', cap: 'Non-spatial models, day one' },
      { math: '$$N(t) = \\frac{N_0 K}{N_0 + (K - N_0)e^{-\\lambda t}}$$' },
      { img: 'assets/notes.jpeg', cap: 'Separating variables, badly, in a spiral notebook' },
      { img: 'assets/lecture-ugm.jpeg', cap: 'Pest, infected pest, predator — Fajar Adi Kusumo, UGM' },
      { h: 'The deer are not impressed', id: 'nara-deer' },
      { img: 'assets/deer.jpeg', cap: 'Behind the buildings' },
      { pair: [{ img: 'assets/ps-07.jpeg', cap: 'Benches, library, one deer' }, { img: 'assets/canteen.jpeg', cap: 'Canteen lunch, most days' }] },
      { h: 'August 4th', id: 'nara-birthday' },
      { pair: [{ img: 'assets/lily-chou-chou.jpeg', cap: 'All About Lily Chou-Chou (1of2001)' }, { img: 'assets/birthday-gift.jpeg', cap: 'Second-hand, 中古, mine' }] },
      { h: 'Walking, mostly alone', id: 'nara-walking' },
      { img: 'assets/forest-selfie.jpeg', cap: '金龍神社' },
      { pair: [{ img: 'assets/ps-06.jpeg', cap: 'Garden, campus edge' }, { img: 'assets/ps-04.jpeg', cap: 'A shrine between apartment blocks' }] },
      { pair: [{ img: 'assets/ps-01.jpeg', cap: 'Vending machines' }, { img: 'assets/ps-02.jpeg', cap: 'Shop window, late light' }] },
      { pair: [{ img: 'assets/ps-00.jpeg', cap: 'Nara station, east exit' }, { img: 'assets/ps-03.jpeg', cap: 'Headlights, out of focus' }] },
      { h: 'Weekends: Osaka', id: 'nara-osaka' },
      { pair: [{ img: 'assets/osaka-dai.jpeg', cap: 'Osaka' }, { img: 'assets/masks.jpeg', cap: 'Kitsune masks, souvenir shop' }] },
      { img: 'assets/aquarium-2.jpeg', cap: 'Moon jellyfish' },
      { img: 'assets/aquarium.jpeg', cap: '“From now on, we all are circling.”' },
      { h: 'The certificate', id: 'nara-cert' },
      { img: 'assets/cert.jpeg', cap: 'With Professor Fugo Takasu' }
    ]
  }
];

const PUBS = [
  {
    kind: 'Proceedings', date: '2025-12-01',
    authors: 'Dinh, T. T. & Duong, V. (2025)',
    title: 'Raman spectroscopy for methanol detection: 1D vs. 2D CNN performance evaluation',
    venue: 'Proceedings of the 9th International Conference on Applied and Engineering Physics (ICAEP-9)'
  }
];

const ACTIVITIES = [
  { when: '30 Jul — 8 Aug 2025', what: 'Summer School on Mathematical Biology, VIASM' },
  { when: 'Aug 2025', what: 'Summer research program, Group of Mathematical Biology, Nara Women’s University' },
  { when: '10 — 14 Aug 2026', what: 'Summer School on Mathematics and Physics, VIASM' }
];

const MATERIALS = [
  {
    name: 'Optimization, Approximation and Basic Analysis',
    items: [
      { ref: 'D. Luenberger', title: 'Optimization by Vector Space Methods', formats: 'hardcopy, kindle [much cheaper]', note: 'This was an outgrowth of Luenberger’s PhD thesis. It is a very friendly introduction to basic concepts of functional analysis, and a treatment of optimization in abstract spaces. A masterful example of great exposition, and extremely useful.' },
      { ref: 'S. Boyd and L. Vandenberghe', title: 'Convex Optimization', formats: 'hardcopy/kindle, free copy', note: 'Friendly, free, complete. It focuses on the theory of optimization, in a discursive but rigorous way. Can be read back to back for self-instruction. Very good reference.' },
      { ref: 'B. Bollobas', title: 'Linear Analysis, 2nd ed.', formats: 'hardcopy', note: 'Undergraduate course material on functional analysis covering all the bases for the working analyst. The easiest treatment I know of, written by another master expositor.' },
      { ref: 'E. W. Cheney, W. Light', title: 'A Course In Approximation Theory', formats: 'Hardcopy', note: 'You need to know approximation theory, especially in the era of overcomplete models. This is a book about the theory of AT. It will open your mind to new concepts.' }
    ]
  },
  {
    name: 'Linear Algebra',
    items: [
      { ref: 'L. N. Trefethen, Bau', title: 'Numerical Linear Algebra', formats: 'paperback', note: 'The best way to learn linear algebra is to learn numerical linear algebra. Great introduction to matrix decompositions and computation of projections.' },
      { ref: 'G. Golub, C. Van Loan', title: 'Matrix Computations, 4th ed.', formats: 'hard/paper/soft', note: 'The bible of numerical linear algebra. So clear and useful. Mostly useful as a reference' },
      { ref: 'P. R. Halmos', title: 'Finite Dimensional Vector Spaces', formats: 'hardcopy', note: 'How to get intuition about linear algebra. Undergraduate-level but not dumb' },
      { ref: 'R. Bhatia', title: 'Matrix Analysis', formats: 'hard/paper', note: 'This is in equal parts linear algebra and functional analysis in finite spaces. It is advanced and synthetic. If you know the contents of this book, you know linear algebra.' }
    ]
  },
  {
    name: 'Probability',
    items: [
      { ref: 'R. Durrett', title: 'Probability, 5th ed.', formats: 'hard/softcover', note: 'I learned graduate probability on this book. Not easy. It has thoroughly corrected typos. Self-contained. Interesting examples.' },
      { ref: 'D. Williams', title: 'Probability with Martingales', formats: 'softcover/ebook', note: 'Breezy reading, the shortest book to quickly learn measure-theoretic probability. It’s funny, it’s enlightening. It changed my life because it made me fall in love with probability.' },
      { ref: 'R. Vershynin', title: 'High-Dimensional Probability', formats: 'hardcover/ebook, free softcopy', note: 'Covers concepts that are relevant to machine learning, PAC bounds, concentration results, geometry of convex bodies/norms in high dimensions. Very well-written and friendly.' },
      { ref: 'J. Nair, A. Wierman, B. Zwart', title: 'The Fundamentals of Heavy', formats: 'hardcover/kindle', note: 'This is the best short introduction to heavy-tailed phenomena. Relevant to finance people.' },
      { ref: 'T. Cover, J. Thomas', title: 'Elements of Information Theory, 2nd ed.', formats: 'hardcover/paperback/kindle', note: 'A classic of exposition. Not really probability, I know. I use it mostly as a reference.' }
    ]
  },
  {
    name: 'Machine Learning / Statistics',
    items: [
      { ref: 'K. P. Murphy', title: 'Probabilistic Machine Learning: an Introduction · Advanced Topics', formats: 'Kindle/hardcover', note: 'These two books are some of the best theoretical (but with an eye to applications) intro to ML.' },
      { ref: 'M. Mohri, A. Rostamizadeh, A. Talwalkar', title: 'Foundations of Machine Learning, 2nd ed.', formats: 'Kindle/hardcover', note: 'I love this book because it is short, selective, elegant. It makes you understand the concepts behind ML.' },
      { ref: 'T. Hastie, R. Tibshirani, J. Friedman', title: 'The Elements of Statistical Learning, 2nd ed', formats: 'hard/softcover/kindle, free copy', note: 'Dated, with a poor treatment of neural networks, and questionable ideas about model selection. But unsupervised learning, PCA, ensemble methods are still masterfully explained.' },
      { ref: 'L. Wasserman', title: 'All of Statistics · All Nonparametric Statistics', formats: 'hardcopy/kindle', note: '' },
      { ref: 'F. E. Harrell Jr.', title: 'Regression Modeling Strategies', formats: 'hard/softcover/etextbook', note: '' }
    ]
  },
  {
    name: 'Finance',
    items: [
      { ref: 'J. Cochrane', title: 'Asset Pricing', formats: 'hardcover/kindle', note: 'It has a very unique style: Cochrane uses "I" and "you" a lot. He focuses on concepts, and explains factor models, empirical pricing and Generalized Method of Methods like no one else.' },
      { ref: 'L. Harris', title: 'Trading and Exchanges', formats: 'hardcover/paperback/kindle', note: 'Overlong but essential treatment of the institutional details of market structure. A bit dated.' },
      { ref: 'J.P. Bouchaud, M. Potters', title: 'Theory of Financial Risk and Derivative Pricing', formats: 'hard/soft/kindle', note: 'Another old book, written when Bouchaud was relatively new to the game. It’s full of ideas and has aged well' },
      { ref: 'M. Isichenko', title: 'Quantitative Portfolio Management', formats: 'hard/kindle', note: 'This is the best available book on quantitative investing written by an actual practitioner. It’s scattershot and in parts generic, but still worth reading.' },
      { ref: 'J. Danielsson', title: 'The Illusion of Control', formats: 'various formats', note: 'The best (most intelligent, well written) book on broad, macro-level risk management available. Very accessible, just a bit too long.' },
      { ref: 'G. Connor, L. R. Goldberg, R. A. Korajczyk', title: 'Portfolio Risk Analysis', formats: 'hardcover/etextbook', note: 'Connor worked as a consultant to Barra, and Goldberg worked at Barra for many years. This book is clear and a good introduction to factor models' }
    ]
  }
];

const RESUME = {
  school: 'Vietnam National University — University of Science',
  degree: 'Bachelor’s degree in Applied Mathematics',
  years: 'Aug 2022 — Mar 2027 (expected)',
  gpa: 'GPA 2.95 / 4',
  courses: 'Differential equations, calculus, PDEs, probability theory, mathematical modelling, statistics.',
  roles: [
    {
      role: 'Research Consultant', org: 'WorldQuant · Contract',
      place: 'Hanoi, Vietnam · Remote', when: 'Apr 2024 — Present · 2 yrs 5 mos',
      quip: 'Trying to predict the unpredictable while pretending it’s science.',
      bullets: [
        'Built mathematical models for price movement prediction in Fast Expression Language and Python; submitted 1,800+ alphas across global markets.',
        '5-time Grandmaster (top 2%) and 2-time Master (top 8%) in the Genius Program, out of 10,000+ consultants.',
        'Sole delegate from Vietnam — one of 12 selected globally — at the International Quant Championship 2025 finals in Singapore.'
      ]
    },
    {
      role: 'Specialist', org: 'VinsmartFuture · Full-time',
      place: 'Hanoi Capital Region · On-site', when: 'Jul 2026 · 1 mo',
      quip: 'Ended due to personal reason', bullets: []
    },
    {
      role: 'Intern', org: 'VinsmartFuture · Full-time',
      place: 'Hanoi Capital Region · On-site', when: 'Apr 2026 — Jun 2026 · 3 mos',
      quip: 'Apr–May : VinUni. June : VinSmartFuture', bullets: []
    },
    {
      role: 'Research Internship', org: 'Vietnam Academy of Science and Technology · Internship',
      place: 'Ba Đình district, Hanoi, Vietnam · On-site', when: 'Jul 2025 — Jun 2026 · 1 yr',
      quip: 'If you’re reading this, professor. thank you for guiding a confused particle.',
      bullets: [
        'Institutions of Physics. Supervisor: Dr Vu Duong.',
        'First two months: a deep learning approach to quantifying methanol concentration in ethanol–methanol mixtures from Raman spectroscopy; first author of a paper in the ICAEP-9 (2025) proceedings.',
        'The rest of the year: general research on Raman spectroscopy with deep learning and machine learning.'
      ]
    },
    {
      role: 'Intern AI Engineer', org: 'Kaopiz · Part-time',
      place: 'Hanoi Capital Region · On-site', when: 'Feb 2026 — Mar 2026 · 2 mos',
      quip: 'Not what I expected.',
      bullets: [
        'Explored OpenClaw to automate routine tasks such as Jira logwork, data crawling, and multi-source aggregation.',
        'Evaluated Mem0 by assessing its strengths, limitations, and use cases, comparing it with other chatbot memory approaches like vector databases, retrieval-augmented generation, and long-term memory layers.'
      ]
    },
    {
      role: 'wanderer of thoughts', org: 'Under a good tree. · Full-time',
      place: 'On-site', when: 'Dec 2025 — Mar 2026 · 4 mos',
      quip: 'I’m farming wisdom and try to be able to see math as a painting.',
      bullets: []
    },
    {
      role: 'Summer Research Fellow', org: 'Vietnam Institute for Advanced Study in Mathematics · Internship',
      place: 'Hanoi Capital Region · On-site', when: 'Aug 2025 — Nov 2025 · 4 mos',
      quip: 'great experience. Never coming back, I promise.',
      bullets: [
        'VIASM Summer School Research Experience for Undergraduate.',
        'Epidemic modelling and actuarial science under Dr. Hoang Manh Tuan.'
      ]
    },
    {
      role: 'Summer Program on Mathematical Modeling', org: '（国法）奈良女子大学 · Full-time',
      place: 'Nara, Japan · On-site', when: 'Aug 2025 · 1 mo',
      bullets: [
        'Organized by TAKASU Fugo (NWU, Japan) with co-organizers Fajar Adi Kusumo and Nanang Susyanto (UGM, Indonesia).',
        'Participated in an intensive English-conducted summer program on mathematical modeling of population dynamics, including ODEs, stochastic models, and Python-based simulations.'
      ]
    }
  ],
  skills: [
    { group: 'Languages', items: ['Python', 'R', 'Fast Expression Language', 'LaTeX'] },
    { group: 'Libraries', items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas'] },
    { group: 'Knowledge areas', items: [
      'Portfolio construction',
      'Factor analysis', 'Machine learning',
      'Deep learning'
    ] },
    { group: 'Language', items: [
      'English — TOEIC 890 (L/R 460/430)',
      'Japanese — JLPT N5'
    ] }
  ],
  awards: [
    '1st prize, International Quant Championship 2024 — University Round (37,000+ participants)',
    '9th place, International Quant Championship 2024 — National / Regional Round'
  ]
};

const ABOUT = {
  paras: [
    'I am Tuan, a fourth-year applied mathematics student in Hanoi. Most of what I do falls into two piles: probability and modelling on one side, and the daily practice of alpha research on the other. They turned out to be the same skill wearing different clothes, which I did not expect when I started.',
    'This site exists because I kept losing my own notes. Everything here is something I wrote for myself first: derivations I needed to get straight, guides I wrote after a forum thread got the same question five times, and a few posts that are honestly just diary entries with equations in them.',
    'If any of it is useful, take it. If any of it is wrong, tell me — that is the more valuable email of the two.'
  ],
  interests: [
    { name: 'Applied mathematics', line: 'Probability, modelling, and the moment a messy real problem turns into a clean equation.' },
    { name: 'Quant finance', line: 'Factor investing and alpha research. Two years in and still mostly curiosity.' },
    { name: 'Piano', line: 'Practising badly and often. Good for the same patience research needs.' },
    { name: 'Photography', line: 'Mostly Hanoi, mostly people, mostly in black and white.' },
    { name: 'Anime', line: 'A long-running habit I have stopped apologising for.' },
    { name: 'Gym', line: 'Progressive overload is the only optimisation problem I solve with my body.' },
    { name: 'Books about anything', line: 'Genuinely anything on earth. Ask me what I am reading and you will get a strange answer.' },
    { name: 'Touching grass', line: 'Walking around, being outside, talking to people who do not do mathematics.' }
  ]
};
