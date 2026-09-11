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
  commentsTitle: 'Comments',
  commentsEmpty: 'No comments yet. Say something.',
  commentsLoading: 'Loading…',
  commentsOffline: 'Comments could not be loaded.',
  commentName: 'Name',
  commentText: 'Your comment',
  commentSend: 'Post comment',
  commentSending: 'Posting…',
  commentFail: 'Could not post. Try again.',
  kindPost: 'Post',
  kindPub: 'Paper',
  kindProject: 'Project',
  liveSite: 'Live site',
  sourceCode: 'Source',
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
    slug: 'tu-hang-ghe-cuoi-cung', date: '2026-09-10', read: '3 min read', tags: ['life', 'essay', 'tiếng việt'],
    title: 'Từ hàng ghế cuối cùng',
    excerpt: 'Hàng ghế cuối cùng, về bản chất, là một hàng ghế không được mấy ai chọn. Ấy vậy mà nó cũng có cho riêng mình vài ưu điểm mà ít người để ý.',
    body: [
      { p: 'Hàng ghế cuối cùng, về bản chất, là một hàng ghế không được mấy ai chọn. Họa hoằn lắm, chỉ những kẻ không đặt được vé sớm mới phải ngó tới nó. Trong rạp chiếu phim, nó cách xa màn hình nhất; trên máy bay, nó gần khoang vệ sinh; trên xe giường nằm hay tàu hỏa, nó thường chật chội, xóc nảy và chẳng có lấy bao nhiêu chỗ để mà trở mình.' },
      { p: 'Ấy vậy mà hàng ghế cuối cũng có cho riêng mình vài ưu điểm mà ít người để ý, có lẽ bởi người ta đã quá chú tâm vào những điều khó chịu của nó mà quên mất rằng cái gì bị bỏ qua cũng thường có một vẻ đẹp riêng.' },
      { p: 'Một cái nhìn bao quát hơn trong rạp phim, một sự riêng tư ít có ở phương tiện công cộng, nơi vốn chỉ để dành cho những ánh mắt phán xét, những cái nhìn vụn vặt vào cuối ngày, khi người ta vốn chỉ đủ sức nhìn nhau một chút, phán xét nhau một chút, rồi ai về nhà nấy.' },
      { p: 'Còn với tôi, hàng ghế cuối đôi lúc lại là lựa chọn ưu tiên. Không phải vì tôi có một thú vui nào với những chỗ ngồi tệ nhất, mà đơn giản vì tôi có vài kỷ niệm đặc biệt với nó.' },
      { p: 'Nếu một ngày nào đó tôi lại ngồi ở cuối một chuyến bay, có lẽ tôi sẽ ngửi thấy mùi khí lạnh đặc trưng của khoang hành khách. Một thứ mùi rất khó tả, nhưng kỳ lạ thay, lại có thể kéo tôi chạm vào những vùng ký ức đã ngủ rất sâu. Có những chuyện trí nhớ đã quên, nhưng cái mũi thì hình như vẫn còn nhớ. Chỉ cần một mùi hương đúng lúc, một căn phòng đã biến mất từ lâu bỗng nhiên trở lại, cùng với những người mà tôi tưởng mình đã thôi nghĩ đến.' },
      { p: 'Có lẽ cũng vì thế mà tôi không còn thấy phiền khi mình là một hàng ghế cuối.' },
      { p: 'Tôi ắt hẳn không phải lựa chọn ưu tiên hàng đầu của hầu hết mọi người, nếu xét đến nhiều thứ. Tất nhiên, tôi vẫn có một vài năng lực mà tôi tin mình vượt trội hơn phần đông nhân loại. Cợt nhả chẳng hạn. Một kỹ năng tuy chưa chắc đem lại nhiều lợi ích trong cuộc sống, nhưng ít nhất cũng giúp tôi tồn tại được đến ngày hôm nay.' },
      { p: 'Âu cũng là như thế.' },
      { p: 'Tôi luôn nghĩ rằng bất kỳ một ai đó, dù có tự thấy mình xấu xí, khó chịu, hằn học, cọc cằn, đau khổ, uất ức hay đau đớn đến đâu, nếu ta chịu dành đủ thời gian ở cạnh họ, trải qua đủ nhiều thăng trầm cùng họ, rồi sớm muộn ta cũng sẽ thấy được những điểm tinh tế, khác thường mà chỉ riêng họ có.' },
      { p: 'Việc ta có yêu những điều ấy hay không, dĩ nhiên, vẫn còn tùy vào trải nghiệm của mỗi người.' },
      { p: 'Nhưng tôi nghĩ, đôi khi chỉ riêng việc ta chịu ngồi xuống đủ lâu để nhận ra cái đẹp trong một ai đó, cũng đã là một việc đáng để sống rồi.' },
      { p: 'Có lẽ hàng ghế cuối cũng vậy.' },
      { p: 'Nó vẫn ở đó, chẳng được mấy ai chọn. Chỉ là nếu có một người nào đó chịu ngồi xuống, ngồi đủ lâu, thì biết đâu đến một lúc nào đó, họ sẽ nhận ra: chỗ này thật ra cũng chẳng tệ, nhỉ. Hì.' },
      { p: 'Tứn' },
      { img: 'assets/back-row.png', cap: '' }
    ]
  },
  {
    slug: 'hcm-physics-summer-school-2026', date: '2026-08-14', read: '1 min read', tags: ['upcoming', 'physics', 'summer school', 'ho chi minh city'],
    title: 'Ho Chi Minh City, for a physics summer school',
    excerpt: 'A week in Ho Chi Minh City for a physics summer school, August 2026. Full write-up coming.',
    body: [{ note: 'draft' }]
  },
  {
    slug: 'van-toc-roi-cua-la-hoa-anh-dao', date: '2025-12-06', read: '1 min read', tags: ['life', 'film', 'tiếng việt'],
    title: 'Vận tốc rơi của lá hoa anh đào',
    excerpt: '5cm/s is not just the falling speed of cherry blossoms, but the speed at which we quietly walked past each other and lost the warmest feelings of love.',
    body: [
      { img: 'assets/byosoku5-title.jpeg', cap: '秒速5センチメートル — a chain of short stories about their distance.' },
      { p: '5cm/s is not just the falling speed of cherry blossoms, but the speed at which we quietly walked past each other and lost the warmest feelings of love.' },
      { img: 'assets/byosoku5-park.jpeg', cap: '“This place is not a park, it is more like a small forest.”' },
      { pair: [{ img: 'assets/byosoku5-stove.jpeg', cap: 'A waiting room, a stove, a night that would not end' }, { img: 'assets/byosoku5-cherry.jpeg', cap: 'Under the cherry tree' }] },
      { img: 'assets/byosoku5-sunset.jpeg', cap: 'Where the rocket went' },
      { p: '“At what speed must I live to be able to see you again?” — Takaki' }
    ]
  },
  {
    slug: 'mi-tom-hao-hao', date: '2025-11-28', read: '2 min read', tags: ['life', 'essay', 'tiếng việt'],
    title: 'Mì tôm Hảo Hảo',
    excerpt: 'Tôi vẫn luôn tự hỏi xem mình nên làm gì với cái tương lai mịt mù phía trước, nên cố trở thành ai trong cái xã hội đã dư thừa gần như mọi thứ.',
    body: [
      { p: 'Tôi vẫn luôn tự hỏi xem mình nên làm gì với cái tương lai mịt mù phía trước, nên cố trở thành ai trong cái xã hội đã dư thừa gần như mọi thứ, từ đồ ăn, công việc, đến cả những vai trò nhìn phát biết ngay là chẳng ai cần. Người ta thì giành nhau để trở thành phiên bản tốt nhất của chính họ, còn tôi thì vẫn luôn loay hoay xem bản thân liệu có nên cố… trở thành cái gì đó tử tế hơn cái hiện tại hay cứ để vậy cho rồi. Nhưng càng nghĩ thì càng thấy câu hỏi ấy trông quan trọng vậy thôi chứ về bản chất thì khá vô nghĩa. Việc hỏi nên làm gì ở tuổi 22 nghe giống kiểu hỏi “nên mua đôi dép màu gì để thay đổi cuộc đời”, về cơ bản là không có ý nghĩa, dù có, cũng chả thay đổi cái gì.' },
      { p: 'Tôi vẫn chưa có câu trả lời cho cái cái câu hỏi rối ren kia, và thú thật là tôi cũng không chắc mình có muốn tìm nữa hay không. Nhưng tôi nghĩ, nếu đến lúc đóng nắp đời mình lại, tôi vẫn còn ngồi ăn bún bò Huế với cái vẻ như thể đó là khám phá ẩm thực của nhân loại, đọc vài cuốn sách ngớ ngẩn đến mức chính tác giả chắc cũng quên họ từng viết chúng, chăm chỉ học những thứ mà tôi biết 200% là không áp dụng được vào đâu, rồi âm thầm thích một người mà khả năng cao là… thích kiểu cho vui, thì cũng coi như tôi đã sống được như “tôi” hết cái đời này.' },
      { p: 'Và nghĩ qua nghĩ lại, tôi cũng chẳng có nhiều thứ để khoe. Tôi không có thành tựu gì vĩ đại, cũng không có một hành trình truyền cảm hứng, và tất nhiên là không có một sự nghiệp sáng chói nào cả. Tôi chỉ có một đống chuyện lặt vặt, vài sở thích kỳ cục, một chút cố chấp vô lý và vô số lần tự dằn vặt xem mình có nên làm lại cuộc đời từ thứ Hai tuần sau. Nhưng nếu gom hết lại thành một gói, chắc nó vẫn ngang tầm một gói Hảo Hảo tôm chua cay, rẻ nhưng vẫn đủ vị.' },
      { p: 'Tôi đã là “tôi” trong cả cuộc đời... và với tất cả sự tầm thường dễ thương đó, chắc cũng đủ để gọi là ổn.' },
      { img: 'assets/mirror-nara.jpeg', cap: '' }
    ]
  },
  {
    slug: 'singapore-iqc-2025', date: '2025-09-24', read: '3 min read', tags: ['singapore', 'IQC', 'quant', 'photos'],
    title: 'Singapore, for the IQC 2025 Global Final',
    excerpt: 'The WorldQuant International Quant Championship 2025 Global Final, as one of twelve Research Consultants invited and the only one from Vietnam. In photos, mostly of food.',
    body: [
      { p: 'Singapore, end of September 2025, for the WorldQuant International Quant Championship Global Final — invited as one of twelve Research Consultants, the only one from Vietnam. I never wrote the notes I promised, so here are the photos instead. A lot of them are food.' },
      { img: 'assets/iqc-2025/changi-f1.jpg', cap: 'Changi. The first thing Singapore shows you is a Formula 1 car parked in a whisky shop.' },
      { img: 'assets/iqc-2025/room.jpg', cap: 'The room at the JW Marriott South Beach. The desk got more use than the bed.' },
      { img: 'assets/iqc-2025/turndown-note.jpg', cap: 'Turndown note and a chocolate. The chocolate did not survive the photo.' },
      { img: 'assets/iqc-2025/window-skyline.jpg', cap: 'From the window: the Pan Pacific, the Singapore Flyer, and Marina Bay Sands at the edge of the frame.' },
      { img: 'assets/iqc-2025/flow18-breakfast.jpg', cap: 'Breakfast at Flow 18, up on the roof, before the first session.' },
      { pair: [
        { img: 'assets/iqc-2025/breakfast-bacon.jpg', cap: 'Breakfast, morning one.' },
        { img: 'assets/iqc-2025/breakfast-pastry.jpg', cap: 'Breakfast, morning two. Same plate, different pastry.' }
      ] },
      { img: 'assets/iqc-2025/becoming-titans.jpg', cap: '“Becoming Titans” at the door of the Global Final.' },
      { img: 'assets/iqc-2025/judges.jpg', cap: 'Meet the judges: Igor Tulchinsky and the WorldQuant leadership.' },
      { img: 'assets/iqc-2025/research-consultants.jpg', cap: 'The twelve Research Consultants invited to the final. Top row, far right: Hanoi University of Science, Vietnam.' },
      { img: 'assets/iqc-2025/press-wall.jpg', cap: 'The press wall. Someone asked questions on camera and I answered them in a suit.' },
      { img: 'assets/iqc-2025/lift-mirror.jpg', cap: 'Lift mirror, same suit, day one.' },
      { img: 'assets/iqc-2025/delegates.jpg', cap: 'The delegates, between sessions.' },
      { img: 'assets/iqc-2025/magic-show.jpg', cap: 'Evening entertainment: a card magician, hands ten metres wide on the screen.' },
      { img: 'assets/iqc-2025/dinner-menu.jpg', cap: 'Welcome dinner menu, Grand Ballroom, 29 September 2025.' },
      { pair: [
        { img: 'assets/iqc-2025/dinner-soup.jpg', cap: 'Cannellini white bean soup, under the blue light.' },
        { img: 'assets/iqc-2025/dinner-soup-table.jpg', cap: 'The same soup, the same blue.' }
      ] },
      { img: 'assets/iqc-2025/dinner-scallop.jpg', cap: 'Marinated Hokkaido scallop crudo.' },
      { img: 'assets/iqc-2025/dinner-chicken.jpg', cap: 'Corn-fed baby spring chicken, potato gratin.' },
      { img: 'assets/iqc-2025/lunch-mussels.jpg', cap: 'Lunch, another day: mussels in squid ink.' },
      { img: 'assets/iqc-2025/prawn-curry.jpg', cap: 'Prawn curry with rice.' },
      { img: 'assets/iqc-2025/fish-rice.jpg', cap: 'Fish, greens, fried rice.' },
      { img: 'assets/iqc-2025/hotel-restaurant.jpg', cap: 'The hotel restaurant in the morning, before it filled up.' },
      { img: 'assets/iqc-2025/pho-airport.jpg', cap: 'Last meal before flying home: a bowl of pho, of all things.' },
      { img: 'assets/iqc-2025/coming-home.jpg', cap: 'Han Meilin’s “Coming Home” at Changi. A fitting name for the last photo.' }
    ]
  },
  {
    slug: 'nara', date: '2025-08-04', read: '11 min read', tags: ['nara', 'math biology', 'life'],
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
      { img: 'assets/nara-teishoku.jpeg', cap: 'Grilled mackerel set, the other days' },
      { h: 'August 4th', id: 'nara-birthday' },
      { pair: [{ img: 'assets/lily-chou-chou.jpeg', cap: 'All About Lily Chou-Chou (1of2001)' }, { img: 'assets/birthday-gift.jpeg', cap: 'Second-hand, 中古, mine' }] },
      { h: 'Walking, mostly alone', id: 'nara-walking' },
      { pair: [{ img: 'assets/ps-06.jpeg', cap: 'Garden, campus edge' }, { img: 'assets/ps-04.jpeg', cap: 'A shrine between apartment blocks' }] },
      { pair: [{ img: 'assets/ps-01.jpeg', cap: 'Vending machines' }, { img: 'assets/ps-02.jpeg', cap: 'Shop window, late light' }] },
      { pair: [{ img: 'assets/ps-00.jpeg', cap: 'Nara station, east exit' }, { img: 'assets/ps-03.jpeg', cap: 'Headlights, out of focus' }] },
      { pair: [{ img: 'assets/nara-tokae.jpeg', cap: 'Tōkae, lanterns along the pond' }, { img: 'assets/nara-yukata.jpeg', cap: 'Yukata, on the way home' }] },
      { h: 'Weekends: Osaka', id: 'nara-osaka' },
      { pair: [{ img: 'assets/osaka-dai.jpeg', cap: 'Osaka' }, { img: 'assets/masks.jpeg', cap: 'Kitsune masks, souvenir shop' }] },
      { img: 'assets/aquarium-2.jpeg', cap: 'Moon jellyfish' },
      { img: 'assets/aquarium.jpeg', cap: '“From now on, we all are circling.”' },
      { h: 'The certificate', id: 'nara-cert' },
      { img: 'assets/cert.jpeg', cap: 'With Professor Fugo Takasu' },
      { note: 'Sorry, I was 70 kg at the time so I was a bit overframe, lmao.' }
    ]
  },
  {
    slug: 'all-by-luck', date: '2024-10-16', read: '1 min read', tags: ['life', 'diary'],
    title: 'All by luck',
    excerpt: 'I did realize this for a while. But dealing with it is not that easy. Sometime it fades away for a moment, then it came back.',
    body: [
      { p: 'I did realize this for a while. But dealing with it is not that easy. Sometime it fades away for a moment, then it came back. Feeling you aren\'t goood enough, you are here, is all by luck.' },
      { p: 'I don\'t understand why. I do know for 100 percent that i got all these thing by myself, I have tremendous amounts of sleepless night, I work from 3 o\' clock for a competition till late night and win it. Though I still feel like i won it by luck. No amount of money can make me feel safe. I know why I felt like this, I just scared like someday this doesn\'t work anymore and I will become useless. Sitting down, I\'ve dealing with so much thing lately that I didn\'t even have time to think, or even care about anything else. I\'m tired, but not that tired, I\'m tired enough to dont want to do anything.' },
      { p: 'It\'s not like I need someone talk to me and said "you\'re worthy, you are not a piece of trash, you may become successful oneday".' },
      { p: 'I\'m the only one who can solve the problem myself.' },
      { p: 'I hope I can surpass this feeling soon. Some moment I just wanna die.' },
      { p: '-JD-' }
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

const PROJECTS = [
  {
    kind: 'Web app', date: '2026-08',
    title: 'RamanID — Raman spectral identification in the browser',
    summary: 'Drop a Raman spectrum (.txt / .csv) and get a ranked list of candidate materials with posterior probabilities. Bayesian evidence against a Legendre-polynomial null model, within-class PCA over a reference library of ~16 000 spectra (minerals, organics, polymers; RRUFF, ROD, pharmaceutical sets). The whole pipeline — interpolation, Savitzky–Golay, ALS baseline, L2 normalisation, matching — is ported 1:1 from the Python research code and runs entirely client-side: no server, no upload.',
    tags: ['Raman', 'Bayesian inference', 'PCA', 'JavaScript'],
    live: 'https://sisypheanhus.github.io/raman/',
    source: 'https://github.com/SisypheanHUS/raman'
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
  years: 'Aug 2022 — Sep 2026',
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
