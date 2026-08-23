/* Site content — ported verbatim from the design handoff prototype.
   Every {en, vi} pair is resolved at render time by app.js. */

const UI = {
  role: { en: 'Applied mathematics · Hanoi', vi: 'Toán ứng dụng · Hà Nội' },
  search: { en: 'Search notes, posts, files…', vi: 'Tìm bài viết, ghi chú, tài liệu…' },
  theme: { en: 'Toggle dark mode', vi: 'Chế độ tối' },
  homeKicker: { en: 'Student · alpha researcher · writes things down', vi: 'Sinh viên · nghiên cứu alpha · hay ghi chép lại' },
  epigraph: { en: 'One must imagine Sisyphus happy.', vi: 'Phải hình dung Sisyphus hạnh phúc.' },
  epigraphSource: { en: 'Albert Camus, The Myth of Sisyphus', vi: 'Albert Camus, Huyền thoại Sisyphus' },
  readWriting: { en: 'Read the blog', vi: 'Đọc blog' },
  seeResume: { en: 'Resume', vi: 'Hồ sơ' },
  nowTitle: { en: 'What I am doing now', vi: 'Hiện tại tôi đang làm' },
  latestTitle: { en: 'Latest writing', vi: 'Bài viết mới nhất' },
  all: { en: 'All', vi: 'Tất cả' },
  back: { en: 'Back', vi: 'Quay lại' },
  contents: { en: 'Contents', vi: 'Mục lục' },
  blogTitle: { en: 'Blog', vi: 'Blog' },
  notesTitle: { en: 'Technical notes', vi: 'Ghi chú kỹ thuật' },
  projectsTitle: { en: 'Projects', vi: 'Dự án' },
  pubsTitle: { en: 'Publications', vi: 'Công bố' },
  activitiesTitle: { en: 'Academic activities', vi: 'Hoạt động học thuật' },
  materialsTitle: { en: 'Materials', vi: 'Tài liệu' },
  canonTitle: 'The Western Gappy Canon',
  materialsIntro: { en: 'I am a fan of Gappy, and I think this list of his is good, so I keep a copy of it here on my own blog. The picks and the short note under each title are his words, not mine.', vi: 'Tôi là fan của Gappy, và tôi thấy list của ổng rất oke, nên tôi lưu lại một bản ở đây trên blog của mình. Các lựa chọn và phần ghi chú ngắn dưới từng cuốn là lời của ổng, không phải của tôi.' },
  emptyKicker: { en: 'Reserved', vi: 'Đã dành sẵn' },
  emptyTitle: { en: 'Nothing here yet.', vi: 'Chưa có gì ở đây.' },
  emptyBody: { en: 'This section is held open. Send me what belongs here and I will set it in.', vi: 'Phần này đang để trống. Gửi tôi thứ cần đặt vào đây và tôi sẽ dựng lên.' },
  resumeTitle: { en: 'Resume', vi: 'Hồ sơ' },
  resumeIntro: { en: 'The short version. The PDF has everything, including the full alpha research detail.', vi: 'Bản ngắn. File PDF có đầy đủ, kể cả chi tiết phần nghiên cứu alpha.' },
  downloadPdf: { en: 'Download PDF', vi: 'Tải PDF' },
  education: { en: 'Education', vi: 'Học vấn' },
  experience: { en: 'Experience', vi: 'Kinh nghiệm' },
  skills: { en: 'Skills', vi: 'Kỹ năng' },
  awards: { en: 'Awards', vi: 'Giải thưởng' },
  aboutTitle: { en: 'About', vi: 'Về tôi' },
  interestsTitle: { en: 'Outside the math', vi: 'Ngoài toán' },
  elsewhere: { en: 'Elsewhere', vi: 'Liên hệ' },
  feedTitle: { en: 'Feed', vi: 'Dòng thời gian' },
  feedIntro: { en: 'Everything on this site in one chronological list — posts, notes, papers, talks.', vi: 'Toàn bộ nội dung của trang trong một danh sách theo thời gian — bài viết, ghi chú, bài báo, hội thảo.' },
  resultsFor: { en: 'Results for', vi: 'Kết quả cho' },
  results: { en: 'results', vi: 'kết quả' },
  noResults: { en: 'Nothing matched. Try “alpha”, “SIS”, “Raman” or “PDE”.', vi: 'Không có kết quả. Thử “alpha”, “SIS”, “Raman” hoặc “PDE”.' },
  builtWith: { en: 'Set in Garamond. The stone goes back up tomorrow.', vi: 'Chữ Garamond. Mai lại đẩy đá lên núi.' },
  kindPost: { en: 'Post', vi: 'Bài viết' },
  kindPub: { en: 'Paper', vi: 'Bài báo' },
  titles: { en: 'titles', vi: 'cuốn' },
  draft: { en: 'Draft — the rest of this piece is still in my notebook. Ask me and I will finish it sooner.', vi: 'Bản nháp — phần còn lại vẫn nằm trong sổ tay. Nhắc tôi thì tôi sẽ viết xong sớm hơn.' }
};

const NAV = [
  { id: 'home', num: '01', label: { en: 'Home', vi: 'Trang chủ' } },
  { id: 'blog', num: '02', label: { en: 'Blog', vi: 'Blog' } },
  { id: 'notes', num: '03', label: { en: 'Technical notes', vi: 'Ghi chú kỹ thuật' } },
  { id: 'projects', num: '04', label: { en: 'Projects', vi: 'Dự án' } },
  { id: 'publications', num: '05', label: { en: 'Publications', vi: 'Công bố' } },
  { id: 'materials', num: '06', label: { en: 'Materials', vi: 'Tài liệu' } },
  { id: 'resume', num: '07', label: { en: 'Resume', vi: 'Hồ sơ' } },
  { id: 'about', num: '08', label: { en: 'About', vi: 'Về tôi' } },
  { id: 'feed', num: '09', label: { en: 'Feed', vi: 'Dòng thời gian' } }
];

const HOME = {
  headline: { en: 'I write down what I am still figuring out.', vi: 'Tôi ghi lại những gì mình vẫn đang tìm hiểu.' },
  intro: {
    en: 'Applied mathematics student in Hanoi. I do alpha research at WorldQuant BRAIN and physics research at IOP VAST. The rest of my mathematics is self-taught, and I only read what brings me joy. This site is where I reflect on and criticize my own work, tell a few jokes, and share whatever else I feel like writing about.',
    vi: 'Sinh viên Toán ứng dụng ở Hà Nội. Tôi làm nghiên cứu alpha tại WorldQuant BRAIN và nghiên cứu vật lý tại IOP VAST. Phần toán còn lại tôi tự học, và tôi chỉ đọc những gì mang lại niềm vui. Trang này là nơi tôi ngẫm lại và tự phê bình việc mình làm, kể vài câu chuyện vui, và viết bất cứ thứ gì mình muốn.'
  },
  stats: [
    { n: 'i', label: { en: 'im not good at math', vi: 'tôi không giỏi toán' } },
    { n: 'ii', label: { en: 'im going for a master degree in germany for mathematics (hopefully)', vi: 'tôi định đi Đức học thạc sĩ toán (mong là vậy)' } },
    { n: 'iii', label: { en: 'i want to retire as soon as posible to sleep all days lmao', vi: 'tôi muốn nghỉ hưu càng sớm càng tốt để ngủ cả ngày lmao' } }
  ],
  now: [
    { role: { en: 'Research Consultant', vi: 'Research Consultant' }, org: 'WorldQuant BRAIN', what: { en: 'I use techniques such as pre-measured signal pooling (alpha pool), correlation-penalized scoring with hard prod-corr gates, bandit-style weighted sampling with decay (Efraimidis–Spirakis), closed-form local optimization instead of black-box search, and out-of-sample-only validation for capital allocation.', vi: 'Tôi dùng các kỹ thuật như gộp tín hiệu đã đo trước (alpha pool), cho điểm có phạt tương quan kèm ngưỡng prod-corr cứng, lấy mẫu có trọng số kiểu bandit với suy giảm (Efraimidis–Spirakis), tối ưu cục bộ dạng closed-form thay cho tìm kiếm black-box, và kiểm định chỉ trên out-of-sample cho phân bổ vốn.' } },
    { role: { en: 'Research Internship', vi: 'Thực tập nghiên cứu' }, org: 'Vietnam Academy of Science and Technology · Internship', what: { en: 'Institutions of Physics. Supervisor: Dr Vu Duong.', vi: 'Viện Vật lý. Người hướng dẫn: TS. Vũ Dương.' }, quip: 'If you’re reading this, professor. thank you for guiding a confused particle.' },
    { role: 'wanderer of thoughts', org: 'Under a good tree. · Full-time', what: 'I’m farming wisdom and try to be able to see math as a painting.' }
  ]
};

const POSTS = [
  {
    slug: 'thesis-notebook', date: '2026-09-15', read: { en: '1 min read', vi: '1 phút đọc' }, tags: ['upcoming', 'thesis', 'math', 'life'],
    title: { en: 'The thesis notebook', vi: 'Sổ tay khóa luận' },
    excerpt: { en: 'A running account of writing my graduation thesis — what works, what does not, and everything I would tell myself six months ago.', vi: 'Ghi chép dần trong quá trình làm khóa luận tốt nghiệp — cái gì ổn, cái gì không, và mọi thứ tôi muốn nói với chính mình sáu tháng trước.' },
    body: [{ note: 'draft' }]
  },
  {
    slug: 'hcm-physics-summer-school-2026', date: '2026-08-30', read: { en: '1 min read', vi: '1 phút đọc' }, tags: ['upcoming', 'physics', 'summer school', 'ho chi minh city'],
    title: { en: 'Ho Chi Minh City, for a physics summer school', vi: 'TP. Hồ Chí Minh, trường hè Vật lý' },
    excerpt: { en: 'A week in Ho Chi Minh City for a physics summer school, August 2026. Full write-up coming.', vi: 'Một tuần ở TP. Hồ Chí Minh cho trường hè Vật lý, tháng 8 năm 2026. Bài viết đầy đủ sắp có.' },
    body: [{ note: 'draft' }]
  },
  {
    slug: 'singapore-iqc-2025', date: '2026-08-24', read: { en: '1 min read', vi: '1 phút đọc' }, tags: ['upcoming', 'singapore', 'IQC', 'quant'],
    title: { en: 'Singapore, for the IQC 2025 Global Final', vi: 'Singapore, chung kết toàn cầu IQC 2025' },
    excerpt: { en: 'Notes from the WorldQuant International Quant Championship 2025 finals — twelve delegates, one from Vietnam. Writing this up soon.', vi: 'Ghi chép từ chung kết International Quant Championship 2025 của WorldQuant — mười hai đại diện, một người đến từ Việt Nam. Sắp viết.' },
    body: [{ note: 'draft' }]
  },
  {
    slug: 'nara', date: '2025-09-02', read: { en: '11 min read', vi: '11 phút đọc' }, tags: ['nara', 'math biology', 'life'],
    title: { en: 'One month in Nara', vi: 'Một tháng ở Nara' },
    excerpt: { en: 'Population dynamics in the morning, deer in the afternoon, and a birthday spent watching a film about a girl who does not exist.', vi: 'Buổi sáng học động lực quần thể, buổi chiều gặp hươu, và một ngày sinh nhật ngồi xem phim về một cô gái không tồn tại.' },
    body: [
      { img: 'assets/ps-09.jpeg', cap: 'Nara Women’s University, morning' },
      { pair: [{ img: 'assets/ps-08.jpeg', cap: 'The way in' }, { img: 'assets/ps-05.jpeg', cap: 'Club noticeboard' }] },
      { h: { en: 'The mathematics', vi: 'Phần toán' }, id: 'nara-math' },
      { math: '$$\\frac{dN}{dt} = f(N)\\,N$$' },
      { img: 'assets/lecture.jpeg', cap: 'Non-spatial models, day one' },
      { math: '$$N(t) = \\frac{N_0 K}{N_0 + (K - N_0)e^{-\\lambda t}}$$' },
      { img: 'assets/notes.jpeg', cap: 'Separating variables, badly, in a spiral notebook' },
      { img: 'assets/lecture-ugm.jpeg', cap: 'Pest, infected pest, predator — Fajar Adi Kusumo, UGM' },
      { h: { en: 'The deer are not impressed', vi: 'Những con hươu không quan tâm' }, id: 'nara-deer' },
      { img: 'assets/deer.jpeg', cap: 'Behind the buildings' },
      { pair: [{ img: 'assets/ps-07.jpeg', cap: 'Benches, library, one deer' }, { img: 'assets/canteen.jpeg', cap: 'Canteen lunch, most days' }] },
      { h: { en: 'August 4th', vi: 'Ngày 4 tháng 8' }, id: 'nara-birthday' },
      { pair: [{ img: 'assets/lily-chou-chou.jpeg', cap: 'All About Lily Chou-Chou (1of2001)' }, { img: 'assets/birthday-gift.jpeg', cap: 'Second-hand, 中古, mine' }] },
      { h: { en: 'Walking, mostly alone', vi: 'Đi bộ, phần lớn là một mình' }, id: 'nara-walking' },
      { img: 'assets/forest-selfie.jpeg', cap: '金龍神社' },
      { pair: [{ img: 'assets/ps-06.jpeg', cap: 'Garden, campus edge' }, { img: 'assets/ps-04.jpeg', cap: 'A shrine between apartment blocks' }] },
      { pair: [{ img: 'assets/ps-01.jpeg', cap: 'Vending machines' }, { img: 'assets/ps-02.jpeg', cap: 'Shop window, late light' }] },
      { pair: [{ img: 'assets/ps-00.jpeg', cap: 'Nara station, east exit' }, { img: 'assets/ps-03.jpeg', cap: 'Headlights, out of focus' }] },
      { h: { en: 'Weekends: Osaka', vi: 'Cuối tuần: Osaka' }, id: 'nara-osaka' },
      { pair: [{ img: 'assets/osaka-dai.jpeg', cap: 'Osaka' }, { img: 'assets/masks.jpeg', cap: 'Kitsune masks, souvenir shop' }] },
      { img: 'assets/aquarium-2.jpeg', cap: 'Moon jellyfish' },
      { img: 'assets/aquarium.jpeg', cap: '“From now on, we all are circling.”' },
      { h: { en: 'The certificate', vi: 'Tờ giấy chứng nhận' }, id: 'nara-cert' },
      { img: 'assets/cert.jpeg', cap: 'With Professor Fugo Takasu' }
    ]
  }
];

const PUBS = [
  {
    kind: { en: 'Proceedings', vi: 'Kỷ yếu' }, date: '2025-12-01',
    authors: 'Dinh, T. T. & Duong, V. (2025)',
    title: { en: 'Raman spectroscopy for methanol detection: 1D vs. 2D CNN performance evaluation', vi: 'Raman spectroscopy for methanol detection: 1D vs. 2D CNN performance evaluation' },
    venue: { en: 'Proceedings of the 9th International Conference on Applied and Engineering Physics (ICAEP-9)', vi: 'Kỷ yếu Hội nghị Quốc tế lần thứ 9 về Vật lý Ứng dụng và Kỹ thuật (ICAEP-9)' }
  }
];

const ACTIVITIES = [
  { when: '30 Jul — 8 Aug 2025', what: { en: 'Summer School on Mathematical Biology, VIASM', vi: 'Trường hè Sinh học Toán học, VIASM' } },
  { when: 'Aug 2025', what: { en: 'Summer research program, Group of Mathematical Biology, Nara Women’s University', vi: 'Chương trình nghiên cứu hè, Nhóm Sinh học Toán học, Đại học Nữ sinh Nara' } },
  { when: '10 — 14 Aug 2026', what: { en: 'Summer School on Mathematics and Physics, VIASM', vi: 'Trường hè Toán và Vật lý, VIASM' } }
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
  school: { en: 'Vietnam National University — University of Science', vi: 'Đại học Quốc gia Hà Nội — Trường Đại học Khoa học Tự nhiên' },
  degree: { en: 'Bachelor’s degree in Applied Mathematics', vi: 'Cử nhân Toán ứng dụng' },
  years: { en: 'Aug 2022 — Mar 2027 (expected)', vi: 'Th8 2022 — Th3 2027 (dự kiến)' },
  gpa: 'GPA 2.95 / 4',
  courses: { en: 'Differential equations, calculus, PDEs, probability theory, mathematical modelling, statistics.', vi: 'Phương trình vi phân, giải tích, phương trình đạo hàm riêng, lý thuyết xác suất, mô hình hoá toán học, thống kê.' },
  roles: [
    {
      role: { en: 'Research Consultant', vi: 'Research Consultant' }, org: 'WorldQuant · Contract',
      place: { en: 'Hanoi, Vietnam · Remote', vi: 'Hà Nội, Việt Nam · Remote' }, when: 'Apr 2024 — Present · 2 yrs 5 mos',
      quip: 'Trying to predict the unpredictable while pretending it’s science.',
      bullets: [
        { en: 'Built mathematical models for price movement prediction in Fast Expression Language and Python; submitted 1,800+ alphas across global markets.', vi: 'Xây mô hình toán dự báo biến động giá bằng Fast Expression Language và Python; submit hơn 1.800 alpha trên các thị trường toàn cầu.' },
        { en: '5-time Grandmaster (top 2%) and 2-time Master (top 8%) in the Genius Program, out of 10,000+ consultants.', vi: '5 lần Grandmaster (top 2%) và 2 lần Master (top 8%) trong Genius Program, trên hơn 10.000 consultant.' },
        { en: 'Sole delegate from Vietnam — one of 12 selected globally — at the International Quant Championship 2025 finals in Singapore.', vi: 'Đại diện duy nhất của Việt Nam — 1 trong 12 người được chọn toàn cầu — tại chung kết International Quant Championship 2025 ở Singapore.' }
      ]
    },
    {
      role: { en: 'Specialist', vi: 'Specialist' }, org: 'VinsmartFuture · Full-time',
      place: { en: 'Hanoi Capital Region · On-site', vi: 'Vùng Thủ đô Hà Nội · On-site' }, when: 'Jul 2026 · 1 mo',
      quip: 'Ended due to personal reason', bullets: []
    },
    {
      role: { en: 'Intern', vi: 'Thực tập' }, org: 'VinsmartFuture · Full-time',
      place: { en: 'Hanoi Capital Region · On-site', vi: 'Vùng Thủ đô Hà Nội · On-site' }, when: 'Apr 2026 — Jun 2026 · 3 mos',
      quip: 'Apr–May : VinUni. June : VinSmartFuture', bullets: []
    },
    {
      role: { en: 'Research Internship', vi: 'Thực tập nghiên cứu' }, org: 'Vietnam Academy of Science and Technology · Internship',
      place: { en: 'Ba Đình district, Hanoi, Vietnam · On-site', vi: 'Quận Ba Đình, Hà Nội · On-site' }, when: 'Jul 2025 — Jun 2026 · 1 yr',
      quip: 'If you’re reading this, professor. thank you for guiding a confused particle.',
      bullets: [
        { en: 'Institutions of Physics. Supervisor: Dr Vu Duong.', vi: 'Viện Vật lý. Người hướng dẫn: TS. Vũ Dương.' },
        { en: 'First two months: a deep learning approach to quantifying methanol concentration in ethanol–methanol mixtures from Raman spectroscopy; first author of a paper in the ICAEP-9 (2025) proceedings.', vi: 'Hai tháng đầu: hướng học sâu để định lượng nồng độ methanol trong hỗn hợp ethanol–methanol từ phổ Raman; tác giả chính một bài trong kỷ yếu ICAEP-9 (2025).' },
        { en: 'The rest of the year: general research on Raman spectroscopy with deep learning and machine learning.', vi: 'Thời gian còn lại: nghiên cứu chung về phổ Raman với học sâu và học máy.' }
      ]
    },
    {
      role: { en: 'Intern AI Engineer', vi: 'Intern AI Engineer' }, org: 'Kaopiz · Part-time',
      place: { en: 'Hanoi Capital Region · On-site', vi: 'Vùng Thủ đô Hà Nội · On-site' }, when: 'Feb 2026 — Mar 2026 · 2 mos',
      quip: 'Not what I expected.',
      bullets: [
        { en: 'Explored OpenClaw to automate routine tasks such as Jira logwork, data crawling, and multi-source aggregation.', vi: 'Tìm hiểu OpenClaw để tự động hoá các việc lặp lại như logwork Jira, crawl dữ liệu và tổng hợp đa nguồn.' },
        { en: 'Evaluated Mem0 by assessing its strengths, limitations, and use cases, comparing it with other chatbot memory approaches like vector databases, retrieval-augmented generation, and long-term memory layers.', vi: 'Đánh giá Mem0 về điểm mạnh, hạn chế và trường hợp sử dụng, so sánh với các hướng bộ nhớ chatbot khác như vector database, retrieval-augmented generation và các lớp bộ nhớ dài hạn.' }
      ]
    },
    {
      role: { en: 'wanderer of thoughts', vi: 'wanderer of thoughts' }, org: 'Under a good tree. · Full-time',
      place: { en: 'On-site', vi: 'On-site' }, when: 'Dec 2025 — Mar 2026 · 4 mos',
      quip: 'I’m farming wisdom and try to be able to see math as a painting.',
      bullets: []
    },
    {
      role: { en: 'Summer Research Fellow', vi: 'Summer Research Fellow' }, org: 'Vietnam Institute for Advanced Study in Mathematics · Internship',
      place: { en: 'Hanoi Capital Region · On-site', vi: 'Vùng Thủ đô Hà Nội · On-site' }, when: 'Aug 2025 — Nov 2025 · 4 mos',
      quip: 'great experience. Never coming back, I promise.',
      bullets: [
        { en: 'VIASM Summer School Research Experience for Undergraduate.', vi: 'VIASM Summer School Research Experience for Undergraduate.' },
        { en: 'Epidemic modelling and actuarial science under Dr. Hoang Manh Tuan.', vi: 'Mô hình dịch tễ và khoa học bảo hiểm dưới hướng dẫn của TS. Hoàng Mạnh Tuấn.' }
      ]
    },
    {
      role: { en: 'Summer Program on Mathematical Modeling', vi: 'Summer Program on Mathematical Modeling' }, org: '（国法）奈良女子大学 · Full-time',
      place: { en: 'Nara, Japan · On-site', vi: 'Nara, Nhật Bản · On-site' }, when: 'Aug 2025 · 1 mo',
      bullets: [
        { en: 'Organized by TAKASU Fugo (NWU, Japan) with co-organizers Fajar Adi Kusumo and Nanang Susyanto (UGM, Indonesia).', vi: 'Tổ chức bởi TAKASU Fugo (NWU, Nhật Bản) cùng Fajar Adi Kusumo và Nanang Susyanto (UGM, Indonesia).' },
        { en: 'Participated in an intensive English-conducted summer program on mathematical modeling of population dynamics, including ODEs, stochastic models, and Python-based simulations.', vi: 'Tham gia chương trình hè cường độ cao bằng tiếng Anh về mô hình hoá toán học động lực quần thể, gồm ODE, mô hình ngẫu nhiên và mô phỏng bằng Python.' }
      ]
    }
  ],
  skills: [
    { group: { en: 'Languages', vi: 'Ngôn ngữ lập trình' }, items: ['Python', 'R', 'Fast Expression Language', 'LaTeX'] },
    { group: { en: 'Libraries', vi: 'Thư viện' }, items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas'] },
    { group: { en: 'Knowledge areas', vi: 'Lĩnh vực' }, items: [
      { en: 'Portfolio construction', vi: 'Xây dựng portfolio' },
      { en: 'Factor analysis', vi: 'Phân tích factor' }, { en: 'Machine learning', vi: 'Học máy' },
      { en: 'Deep learning', vi: 'Học sâu' }
    ] },
    { group: { en: 'Language', vi: 'Ngoại ngữ' }, items: [
      { en: 'English — TOEIC 890 (L/R 460/430)', vi: 'Tiếng Anh — TOEIC 890 (L/R 460/430)' },
      { en: 'Japanese — JLPT N5', vi: 'Tiếng Nhật — JLPT N5' }
    ] }
  ],
  awards: [
    { en: '1st prize, International Quant Championship 2024 — University Round (37,000+ participants)', vi: 'Giải Nhất, International Quant Championship 2024 — Vòng Đại học (hơn 37.000 thí sinh)' },
    { en: '9th place, International Quant Championship 2024 — National / Regional Round', vi: 'Hạng 9, International Quant Championship 2024 — Vòng Quốc gia / Khu vực' }
  ]
};

const ABOUT = {
  paras: [
    { en: 'I am Tuan, a fourth-year applied mathematics student in Hanoi. Most of what I do falls into two piles: probability and modelling on one side, and the daily practice of alpha research on the other. They turned out to be the same skill wearing different clothes, which I did not expect when I started.', vi: 'Tôi là Tuấn, sinh viên năm tư ngành Toán ứng dụng ở Hà Nội. Phần lớn việc tôi làm chia thành hai nhóm: xác suất và mô hình hoá ở một bên, và công việc nghiên cứu alpha hằng ngày ở bên kia. Hoá ra chúng là cùng một kỹ năng khoác áo khác nhau, điều tôi không ngờ khi mới bắt đầu.' },
    { en: 'This site exists because I kept losing my own notes. Everything here is something I wrote for myself first: derivations I needed to get straight, guides I wrote after a forum thread got the same question five times, and a few posts that are honestly just diary entries with equations in them.', vi: 'Trang này tồn tại vì tôi cứ làm mất ghi chú của chính mình. Mọi thứ ở đây trước hết đều viết cho bản thân: những phần tính toán tôi cần hiểu cho rõ, những hướng dẫn tôi viết sau khi một chủ đề trên diễn đàn nhận cùng một câu hỏi năm lần, và vài bài thực chất chỉ là nhật ký có kèm phương trình.' },
    { en: 'If any of it is useful, take it. If any of it is wrong, tell me — that is the more valuable email of the two.', vi: 'Nếu có gì hữu ích, cứ lấy dùng. Nếu có gì sai, hãy nói cho tôi — trong hai loại email thì loại đó quý hơn.' }
  ],
  interests: [
    { name: { en: 'Applied mathematics', vi: 'Toán ứng dụng' }, line: { en: 'Probability, modelling, and the moment a messy real problem turns into a clean equation.', vi: 'Xác suất, mô hình hoá, và cái khoảnh khắc một bài toán thực tế lộn xộn trở thành một phương trình gọn gàng.' } },
    { name: { en: 'Quant finance', vi: 'Quant finance' }, line: { en: 'Factor investing and alpha research. Two years in and still mostly curiosity.', vi: 'Factor investing và nghiên cứu alpha. Hai năm rồi và phần lớn vẫn là tò mò.' } },
    { name: { en: 'Piano', vi: 'Piano' }, line: { en: 'Practising badly and often. Good for the same patience research needs.', vi: 'Tập dở nhưng tập đều. Tốt cho đúng loại kiên nhẫn mà nghiên cứu cần.' } },
    { name: { en: 'Photography', vi: 'Nhiếp ảnh' }, line: { en: 'Mostly Hanoi, mostly people, mostly in black and white.', vi: 'Phần lớn là Hà Nội, phần lớn là con người, phần lớn là trắng đen.' } },
    { name: { en: 'Anime', vi: 'Anime' }, line: { en: 'A long-running habit I have stopped apologising for.', vi: 'Một thói quen lâu năm mà tôi thôi xin lỗi vì nó.' } },
    { name: { en: 'Gym', vi: 'Phòng gym' }, line: { en: 'Progressive overload is the only optimisation problem I solve with my body.', vi: 'Tăng tải dần là bài toán tối ưu duy nhất tôi giải bằng cơ thể.' } },
    { name: { en: 'Books about anything', vi: 'Sách về mọi thứ' }, line: { en: 'Genuinely anything on earth. Ask me what I am reading and you will get a strange answer.', vi: 'Thật sự là mọi thứ trên đời. Hỏi tôi đang đọc gì và bạn sẽ nhận một câu trả lời lạ.' } },
    { name: { en: 'Touching grass', vi: 'Ra ngoài hít khí trời' }, line: { en: 'Walking around, being outside, talking to people who do not do mathematics.', vi: 'Đi lang thang, ở ngoài trời, nói chuyện với những người không làm toán.' } }
  ]
};
