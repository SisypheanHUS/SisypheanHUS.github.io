/* Site content — ported verbatim from the design handoff prototype.
   English only. */

const UI = {
  role: 'Applied mathematics · Hanoi',
  search: 'Search notes, posts, files…',
  homeKicker: 'Student · alpha researcher · writes things down',
  epigraph: 'One must imagine Sisyphus happy.',
  epigraphSource: 'Albert Camus, The Myth of Sisyphus',
  readWriting: 'Read the blog',
  seeResume: 'Resume',
  nowTitle: 'What I am doing now',
  readingTitle: 'Current reading',
  readingNow: 'Reading',
  upNext: 'Up next',
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
  materialsIntro: 'I am a fan of Gappy, and I think this list of his is good, so I keep a copy of it here on my own blog. The picks and the short note under each title are his words, not mine. Except the last group, My own picks: those three are my recommendations.',
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
  intro: 'Applied mathematics student in Hanoi. I do alpha research at WorldQuant <span class="caps">BRAIN</span> and physics research at <span class="caps">IOP VAST</span>. The rest of my mathematics is self-taught, and I only read what brings me joy. This site is where I reflect on and criticize my own work, tell a few jokes, and share whatever else I feel like writing about.',
  stats: [
    { n: 'i', label: 'im not good at math' },
    { n: 'ii', label: 'im going for a master degree in germany for mathematics (hopefully)' },
    { n: 'iii', label: 'i want to retire as soon as posible to sleep all days lmao' }
  ],
  now: [
    { role: 'Research Consultant', org: 'WorldQuant BRAIN', what: 'I use techniques such as pre-measured signal pooling (alpha pool), correlation-penalized scoring with hard prod-corr gates, bandit-style weighted sampling with decay (Efraimidis–Spirakis), closed-form local optimization instead of black-box search, and out-of-sample-only validation for capital allocation.' },
    { role: 'Research Internship', org: 'Vietnam Academy of Science and Technology · Internship', what: 'Institutions of Physics. Supervisor: Dr Vu Duong.', quip: 'If you’re reading this, professor. thank you for guiding a confused particle.' },
    { role: 'wanderer of thoughts', org: 'Under a good tree. · Full-time', what: 'I’m farming wisdom and try to be able to see math as a painting.' }
  ],
  reading: [
    { ref: 'Trefethen & Bau', title: 'Numerical Linear Algebra' },
    { ref: 'Boyd & Vandenberghe', title: 'Convex Optimization' },
    { ref: 'Williams', title: 'Probability with Martingales' },
    { ref: 'Wasserman', title: 'All of Statistics' },
    { ref: 'Murphy', title: 'Probabilistic Machine Learning', now: true },
    { ref: 'Cochrane', title: 'Asset Pricing' },
    { ref: 'Paleologo', title: 'The Elements of Quantitative Investing' },
    { ref: 'Xinfeng Zhou', title: 'A Practical Guide to Quantitative Finance Interviews (Green Book)' },
    { ref: 'Timothy Crack', title: 'Heard on the Street' }
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
    slug: 'hcm-physics-summer-school-2026', date: '2026-08-14', read: '3 min read', tags: ['physics', 'summer school', 'ho chi minh city', 'photos'],
    title: 'Ho Chi Minh City, for a physics summer school',
    excerpt: 'A week at the Summer School in Mathematical Physics 2026, VNUHCM University of Science with VIASM: lectures in the morning, the city in the afternoon. In photos.',
    body: [
      { p: 'A week in Ho Chi Minh City, 10–14 August 2026, for the Summer School in Mathematical Physics at VNUHCM University of Science, run with VIASM. Lectures in the morning, the city in the afternoon. Photos and captions only; the notes stayed in the notebook.' },
      { img: 'assets/hcm-summer-2026/banner.jpg', cap: 'Summer School in Mathematical Physics 2026, at the University of Science. The banner survived the rain.' },
      { img: 'assets/hcm-summer-2026/lecture-shock-curves.jpg', cap: 'Shock curves: solving the Rankine–Hugoniot equations. Conservation laws, first morning.' },
      { img: 'assets/hcm-summer-2026/talk-hoshiya.jpg', cap: 'Akitoshi Hoshiya (University of Tokyo) on Schrödinger operators with negative Coulomb-like potentials, joint work with Kouichi Taira. 13 August.' },
      { img: 'assets/hcm-summer-2026/canteen-cat.jpg', cap: 'The canteen, and its cat, between lectures.' },
      { pair: [
        { img: 'assets/hcm-summer-2026/hu-tieu.jpg', cap: 'Prawn noodle soup, the first lunch.' },
        { img: 'assets/hcm-summer-2026/fish-soup.jpg', cap: 'Prawn soup again, this time with herbs and a bowl of greens on the side.' }
      ] },
      { pair: [
        { img: 'assets/hcm-summer-2026/rice-plate.jpg', cap: 'Rice, an omelette, stewed pork and vegetables.' },
        { img: 'assets/hcm-summer-2026/noodles-quail-egg.jpg', cap: 'Noodles with pork and a quail egg, on the blue plastic table every canteen in the country owns.' }
      ] },
      { img: 'assets/hcm-summer-2026/spring-rolls-dessert.jpg', cap: 'Fried spring rolls and a coconut dessert. Not from the canteen.' },
      { img: 'assets/hcm-summer-2026/independence-palace.jpg', cap: 'Independence Palace, from the gate, at closing time.' },
      { img: 'assets/hcm-summer-2026/central-post-office.jpg', cap: 'Inside the Central Post Office: the old map of Saigon and its surroundings, and everyone photographing it.' },
      { img: 'assets/hcm-summer-2026/war-remnants-museum.jpg', cap: 'The War Remnants Museum.' },
      { img: 'assets/hcm-summer-2026/museum-beheiren.jpg', cap: 'Beheiren — the Japanese Citizens’ League for Peace in Vietnam — its banner on the wall.' },
      { img: 'assets/hcm-summer-2026/museum-protests.jpg', cap: 'Photographs of the anti-war movement abroad.' },
      { img: 'assets/hcm-summer-2026/museum-plain-dealer.jpg', cap: 'The Cleveland Plain Dealer, 1969: the first photographs of Mỹ Lai.' },
      { img: 'assets/hcm-summer-2026/museum-paris-room.jpg', cap: 'The room on the Paris negotiations.' },
      { img: 'assets/hcm-summer-2026/museum-longest-negotiation.jpg', cap: '“The longest peace negotiation in history.” Nguyễn Thị Bình’s words above the photographs from Paris.' },
      { img: 'assets/hcm-summer-2026/museum-ao-dai.jpg', cap: 'An áo dài in a glass case, in the room on the Paris talks.' },
      { img: 'assets/hcm-summer-2026/museum-mother.jpg', cap: '“Mother”, a sculpture made of bomb and shell fragments, by Nguyễn Hoàng Huy of Tây Ninh.' },
      { img: 'assets/hcm-summer-2026/museum-bullets.jpg', cap: 'Bullets and shells, arranged like specimens.' },
      { img: 'assets/hcm-summer-2026/certificate.jpg', cap: 'Certificate of completion, 14 August 2026. Signed, stamped, folded once in a backpack.' }
    ]
  },
  {
    slug: 'nhat-nac-thien-kim', date: '2026-05-29', read: '1 min read', tags: ['poetry', 'tiếng việt'],
    title: 'Nhất nặc thiên kim',
    excerpt: 'Ai buôn nỗi nhớ nỗi lòng / Ai mua ai bán, người mong kẻ cần',
    body: [
      { p: 'Ai buôn nỗi nhớ nỗi lòng<br>Ai mua ai bán, người mong kẻ cần<br>Ai đong ai đếm xa gần<br>Trăm cân một kiếp, nghìn cân một đời.' },
      { p: 'Nhớ thương nào dễ rao mời<br>Bán mua sao được một lời thủy chung<br>Tình kia gói trọn vô cùng<br>Đem cân chợ nhớ, muôn trùng cách xa.' },
      { p: 'Người đi để lại mình ta<br>Ôm sầu cân mãi, ngày qua tháng dài<br>Tình sâu nghĩa nặng chẳng phai<br>Nghìn cân gánh nặng vì ai trọn đời.' },
      { p: '- Tứn' }
    ]
  },
  {
    slug: 'tong-hop-tho-vo-van', date: '2025-12-14', read: '2 min read', tags: ['poetry', 'tiếng việt'],
    title: 'Tổng hợp thơ vớ vẩn',
    excerpt: 'Vẫn góc phòng, vẫn anh và cây viết, / Xuân sang rồi, anh ngỡ ái tình vơi',
    body: [
      { h: 'Năm ấy', id: 'nam-ay' },
      { p: 'Vẫn góc phòng, vẫn anh và cây viết,<br>Xuân sang rồi, anh ngỡ ái tình vơi<br>Chuyện xưa tưởng đã ngủ, luân hồi<br>Em vẫn thở, và vẫn cười, vẫn nói.' },
      { p: 'Xuân lại tới, lòng anh dần đã tỏ,<br>Lời chưa ngỏ anh thấy hãy còn vương<br>Gió xuân thoảng, tiếng cười em trong gió<br>Ai ngờ xuân cũng hóa tang thương.' },
      { p: '- Tứn' },
      { h: 'Vọng vũ', id: 'vong-vu' },
      { p: 'Ngày đầu gặp em, mưa giăng tới,<br>Một thoáng tim nghiêng, nắng vỡ trời.<br>Tưởng chuyện như mây tan cuối hạ,<br>Mà hồn còn vang bóng ai cười.' },
      { p: 'Nhìn mắt em, tôi ngỡ hạ vừa tới,<br>Nào hay thu khẽ gọi đông rơi.<br>Chuyện xưa cũ, người đã không buồn kể,<br>Tôi vẫn ngồi đây — ngóng mưa rơi.' },
      { p: '- Tứn' },
      { h: 'Em thấy gì trong mắt tôi', id: 'em-thay-gi-trong-mat-toi' },
      { p: 'Em thấy gì trong mắt tôi —<br>Giảng đường sương sớm, ghế còn đôi.<br>Trang vở nghiêng nghiêng tên người viết,<br>Chữ Mến còn vương một góc trời.' },
      { p: 'Chiều rụng nắng tàn bên khóm cúc,<br>Lối về gió quét lá bay rơi.<br>Tôi đứng ngẩn ngơ nhìn khung cửa,<br>Ngỡ như ai gọi giữa mưa phơi.' },
      { p: '- Tứn' },
      { h: 'Museum of Failure', id: 'museum-of-failure' },
      { p: 'I look at myself and find nothing<br>It\'s like a part of me was dying<br>Trying hard, did everything I could<br>What\'s left is just a splash of trying' },
      { p: '- Tứn' },
      { note: 'Đa số thời điểm thì mình cũng chẳng nhận thức được mình đang làm gì, mà về cơ bản cũng chẳng quan tâm nó cho lắm, vì cũng giải quyết được gì.<br><br>Cơ mà những lúc não rỗi hơi thì sẽ chợt nhận ra mình đang sống. Ngoài kia có hàng tỷ người cũng đang sống giống mình, mỗi người có một ước mơ, kế hoạch, hoài bão giống mình. Tự nhiên thấy thế giới to lớn hẳn, cơ mà thấy cũng dở hơi không kém: thế giới nhiều người như thế, lớn như thế, thế mà bằng cách thần kỳ nào đấy, hầu hết mọi người vẫn chẳng tìm được cách tìm được một nửa để bên nhau.<br><br>Nói chung là dở hơi. Thế giới này dở hơi thật.' },
      { h: 'Đông chí', id: 'dong-chi' },
      { p: 'Em bước tới cùng mưa rào mùa hạ<br>Chân dạo bước trên đường nhỏ có hoa<br>Tiếng chân nhịp cùng mưa rơi rộn rã<br>Rộn cả đời, rộn cả trái tim ta<br>Để rồi khi cơn mưa vừa qua<br>Em hỏi tôi: "Tình này liệu có giả?"<br>Tôi bảo là: "Tình chả phải hôm qua.<br>Nếu có thể, xin một ngàn năm nữa<br>Nửa yêu em, nửa viết hết tình ta."' },
      { p: '- Tứn' }
    ]
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
    slug: 'icarus', date: '2025-11-16', read: '1 min read', tags: ['life', 'diary'],
    title: 'Icarus',
    excerpt: 'I want to know what\'s inside Icarus\'s head when he starts to fall off the sky.',
    body: [
      { p: 'I want to know what\'s inside Icarus\'s head when he starts to fall off the sky. Does he regret it, or does he just feel disappointed, cause he can\'t reach just a little higher?' },
      { p: 'That\'s question I think most human should ask before they decide to do something big, to pursue something that matters, to them.' },
      { p: 'It\'s not about the worthiness of the subject, like: does it important? Does it consider as a "higher level of mind"? That\'s all b.s. to me.' },
      { p: 'In the end, people should just care about themself and their own answer to that question.' },
      { p: 'At least, that\'s what inside my head. So do I 50 years later.' },
      { img: 'assets/tromso-reading-room.png', cap: '' }
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
    slug: 'what-a-generation', date: '2025-02-23', read: '1 min read', tags: ['life', 'diary'],
    title: 'What a generation',
    excerpt: 'But now I\'m always worried that I\'m making the wrong choice.',
    body: [
      { p: 'But now I\'m always worried that I\'m making the wrong choice. That I\'ll end up super poor and unsuccessful because I didn\'t keep going with that engineer degree that "guarantees a good job" or whatever. It sucks, I\'m always worrying about it, that I\'m not doing enough to do well, that any time I spend relaxing is time wasted because there\'s no guarantee things will be good after college.' },
      { p: 'What a generation.' }
    ]
  },
  {
    slug: 'all-by-luck', date: '2024-10-16', read: '1 min read', tags: ['life', 'diary'],
    title: 'All by luck',
    excerpt: 'I did realize this for a while. But dealing with it is not that easy. Sometime it fades away for a moment, then it came back.',
    body: [
      { p: 'I did realize this for a while. But dealing with it is not that easy. Sometime it fades away for a moment, then it came back. Feeling you aren\'t goood enough, you are here, is all by luck.' },
      { p: 'I don\'t understand why. I do know for 100 percent that I got all these thing by myself. I have tremendous amounts of sleepless night; I work from 3 o\'clock for a competition till late night and win it. Though I still feel like I won it by luck.' },
      { p: 'No amount of money can make me feel safe. I know why I felt like this: I just scared like someday this doesn\'t work anymore, and I will become useless. Sitting down, I\'ve dealing with so much thing lately that I didn\'t even have time to think, or even care about anything else. I\'m tired, but not that tired. I\'m tired enough to don\'t want to do anything.' },
      { p: 'It\'s not like I need someone talk to me and said "you\'re worthy, you are not a piece of trash, you may become successful oneday".' },
      { p: 'I\'m the only one who can solve the problem myself.' },
      { p: 'I hope I can surpass this feeling soon. Some moment I just wanna die.' },
      { p: '-JD-' }
    ]
  },
  {
    slug: 'tram-dau-phuong', date: '2024-04-10', read: '1 min read', tags: ['poetry', 'tiếng việt'],
    title: 'Trâm Đầu Phượng',
    excerpt: 'Tay xinh gửi rượu hoàng đằng, / Đầy thành xuân sắc, bền tường liễu xanh.',
    body: [
      { p: 'Tay xinh gửi rượu hoàng đằng,<br>Đầy thành xuân sắc, bền tường liễu xanh.<br>Gió đông ác nghiệt đã đành,<br>Ai hay bạc cả ân tình vì đâu.<br>Lòng riêng đeo nặng mối sầu,<br>Bao năm xa cách đơn cô một mình.<br>Sai! Sai! Sai! Xót xa tình.<br>Người ơi, gầy võ dáng hình vì xuân<br>Lụa hồng thấm ngấn lệ hoen,<br>Hoa đào rơi rụng lầu xuân vắng người.<br>Minh sơn thệ hải bao lời,<br>Mà phong thư gấm gởi người được đâu.<br>Thôi đừng phiền lụy chi nhau.' },
      { p: '- Lục Du - Trâm Đầu Phượng' },
      { img: 'assets/garden-of-words.jpg', cap: '言の葉の庭 — The Garden of Words' }
    ]
  },
  {
    slug: 'happy-new-year', date: '2024-01-05', read: '1 min read', tags: ['music', 'life'],
    title: 'Happy New Year',
    excerpt: 'Seems to me now / That the dreams we had before / Are all dead, nothing more / Than confetti on the floor',
    body: [
      { p: 'Seems to me now<br>That the dreams we had before<br>Are all dead, nothing more<br>Than confetti on the floor<br>It\'s the end of a decade<br>In another ten years time<br>Who can say what we\'ll find<br>What lies waiting down the line<br>In the end of eighty-nine' },
      { p: '- ABBA - Happy New Year' },
      { img: 'assets/bus-stop-night.jpg', cap: '' }
    ]
  },
  {
    slug: 'how-should-we-live-our-lives', date: '2023-09-02', read: '4 min read', tags: ['life', 'quora'],
    title: 'How should we live our lives?',
    excerpt: 'I know a close family friend. Dedicated Doctor. Loving husband. Caring father.',
    body: [
      { note: 'An answer I liked on Quora. I have forgotten the author’s name; the words below are theirs, not mine.' },
      { p: 'How do I learn how to live life?' },
      { p: 'How should we live our lives?' },
      { p: 'I know a close family friend.' },
      { p: 'Dedicated Doctor. Loving husband. Caring father. Professionally, he was a very successful person. He ran his own hospital.' },
      { p: 'He was famous in the area for his many philanthropic deeds, timely help for the needy, and selfless dedication toward his work. Locals had a faith that visiting him would be the cure for most ailments. They trusted him. He was god-like.' },
      { p: 'He was also famous in my family circles for his strong atheistic views. Reasoning, logic, and objective approaches formed the very core of his life.' },
      { p: 'My family is deep-rooted in Christianity and thus his stance looked oddly outlandish.' },
      { p: 'He was very rich, at least compared to most people in my family. My mom and dad do not have a car even now. But this man had three cars ten years ago. He was a dog lover. He had five dogs.' },
      { p: 'Frequent international tours. Finest food. Stunning cars. Grand lifestyle. Put all these with this: kind, altruistic, balanced, and charismatic personality.' },
      { p: 'That was him. The perfect package.' },
      { p: 'Naturally, as a young man, I considered him my role model. I could not sense a false note anywhere.' },
      { p: 'The final year of my engineering.' },
      { p: 'He was diagnosed with Pancreatic cancer. The news struck us like lightning. The whole family scrabbled its way to his home.' },
      { p: 'His life came crashing like a meteor. The whole town was in disbelief and shock.' },
      { p: 'Many stupid but concerned questions were raised: “How could this happen to HIM?” “Why HIM, of all people?” “How could this happen to a Doctor?”' },
      { p: 'Regardless of the commotion, his time kept ticking. I remember visiting him during his last two months.' },
      { p: 'I literally stopped breathing for a moment when I entered his home.' },
      { p: 'The curtains had been enveloped with dust. The floor had not been mopped. The beautiful plants outside had started dying. The cars stood there begging for attention.' },
      { p: 'Three of the five dogs had been given away. “He wanted to keep Fido and Henry until…” the maid said with a trembling voice, holding on to my mom.' },
      { p: 'Every face in the home was grief-stricken. Death prevailed in the room. There was an absolute silence in the home. Deafening silence.' },
      { p: 'When I walked to his bed-side, every tinge of charm, glamour, and life his face once had had deserted him. He was pale and lifeless.' },
      { p: 'There were pastors in his home. He had apparently requested for people from all faiths to pray for him. There were bibles all over. Verses from the Quran and bible had been pasted all over the wall.' },
      { p: 'His wife told me about the changes he had been showing ever since the diagnosis. That night, I witnessed the horrors of his pain.' },
      { p: 'I was in the hall and I could hear him wailing in his room. “Someone save me. Take this pain away from me. Jesus, please hear me. I beg you. IS THERE A GOD WHO HEARS ME?”' },
      { p: 'I could clearly hear him sobbing like a 10-year old. I could hear thumps. Slaps. Something clawing the ground. Something being dragged on the floor. Something wriggling.' },
      { p: 'A few minutes later.' },
      { p: '“Darling, forgive me. PLEASE FORGIVE ME. PLEASE TELL ME I WILL LIVE.. JUST TELL ME…JUST….ahhhhhhh”' },
      { p: 'And then some unintelligible mumbling. Muffled screams. Muted and menacing.' },
      { p: 'This continued for almost an hour. And then, silence, marred intermittently by a woman sobbing. His wife.' },
      { p: 'The next morning, the wife said that such nights had become a norm. She said how badly she wished he died instead of enduring the pain.' },
      { p: 'I heard her crying into my mom’s chests: “Akka, I want him to die, but he keeps saying some miracle will happen and he will survive.”' },
      { p: 'I left his home, but my mom told me of how his final hours were.' },
      { p: '“He kept begging to ALL the gods before stumbling into unconsciousness.” “He sobbed, pleadingly.”' },
      { p: 'He kept believing in a miracle. He waited.' },
      { p: 'We hold on to so many ideologies. Beliefs. Plans. Rules. Policies. Everything is just a facade.' },
      { p: 'When your oxygen runs out. When the last drop of your blood trickles down. When the last month of your life nears. When the last moment arrives.' },
      { p: 'When your life is on the cliffhanger, the human inside you kicks his way out. Trembling. Begging. Pleading. Disproving all the massive facades you had built all your life.' },
      { p: 'Every brick of the wall you have built will be blown to smithereens. Your knowledge will vanish. Remember, the man who waited for a miracle was a doctor.' },
      { p: 'You and I are fragile. Just wet fluttering tissues.' },
      { p: 'Stop building facades. Be whoever you want to be. Atheist. Religious. Fat. Thin. Rich. Poor. Famous. Obscured.' },
      { p: 'It does not matter. Just Start living while you still can. Love more. Live more. Lose the hatred. Lose the arrogance.' },
      { p: '’Cause no matter how you choose to live, death beckons.' },
      { p: '-Quora-' }
    ]
  },
  {
    slug: 'live-free', date: '2023-08-25', read: '2 min read', tags: ['life', 'diary', 'music'],
    title: 'Live free',
    excerpt: 'It\'s part of our life that we need to sacrifice something to achieve something, but that\'s the thing.',
    body: [
      { p: 'Well, I just want to write something today.' },
      { p: 'It\'s part of our life that we need to sacrifice something to achieve something (it could be better or worse), but that\'s the thing.' },
      { p: 'Truthfully, I want to get a lot of things, but I don\'t really know whether they are good or not. Thinking about it is one of several ways to know, but just thinking isn\'t enough.' },
      { p: 'Also, I always consider that the "youth" things almost every young man out there talks about, like "having fun", chilling out with your friends, playing games, going travelling, etc., are not really "living"? That\'s just an excuse to enjoy their life without any consequences, and if someone says they are wasting their life, they will say it\'s because they were young.' },
      { p: 'Well, I still hate that one, but I found something in it that might be right.' },
      { p: 'Doing something you like is not that bad, especially when you don\'t know what to do.' },
      { p: 'All this is about the war between dream and reality. I didn\'t know what to do or what to learn because I was scared it would be wrong; now it doesn\'t confuse me anymore.' },
      { p: 'I\'m just going to go ahead and do one thing, no matter whether it turns out worse or better than the other one.' },
      { p: 'For sure, that choice is not as bad as you think; it just might not be as good as the other.' },
      { p: 'That\'s all. Now I\'m going right back to my work and keep doing it. Have a good day, sir.' },
      { p: 'Oh, and one more thing: I\'ve got some lyrics here, from one of my favourite songs.' },
      { p: 'They gonna try to tell you no<br>Shatter all your dreams<br>But you gotta get up and go<br>To bigger better things' },
      { p: '- Mac Miller -' },
      { p: 'Live free, mate.' },
      { img: 'assets/live-free.jpg', cap: '' }
    ]
  },
  {
    slug: 'nhin-thau-trai-tim', date: '2023-02-27', read: '1 min read', tags: ['books', 'murakami', 'tiếng việt'],
    title: 'Nhìn thấu trái tim',
    excerpt: 'Nhưng dù có hiểu nhau thế nào, dù có yêu say đắm thế nào đi nữa thì tôi e rằng, nhìn thấu trái tim người khác là điều không thể.',
    body: [
      { p: '“Nhưng dù có hiểu nhau thế nào, dù có yêu say đắm thế nào đi nữa thì tôi e rằng, nhìn thấu trái tim người khác là điều không thể. Đòi hỏi này chỉ khiến bản thân đau khổ mà thôi. Tuy nhiên, nếu là trái tim của mình thì chỉ cần nỗ lực thôi là có thể nhìn thấu được. Vì vậy, rốt cuộc điều chúng ta phải làm chẳng phải là thu xếp một cách ổn thỏa và thành thật với chính trái tim mình hay sao. Nếu thực sự mong muốn nhìn thấu người khác thì chỉ còn cách là nhìn thẳng, thật sâu vào chính con người mình.”' },
      { p: '- Haruki Murakami, Men Without Women -' }
    ]
  },
  {
    slug: 'memory-is-a-funny-thing', date: '2023-01-12', read: '1 min read', tags: ['books', 'murakami'],
    title: 'Memory is a funny thing',
    excerpt: 'Memory is a funny thing. When I was in the scene, I hardly paid it any mind.',
    body: [
      { p: '“Memory is a funny thing. When I was in the scene, I hardly paid it any mind. I never stopped to think of it as something that would make a lasting impression, certainly never imagined that eighteen years later I would recall it in such detail. I didn’t give a damn about the scenery that day. I was thinking about myself. I was thinking about the beautiful girl walking next to me. I was thinking about the two of us together, and then about myself again. It was the age, that time of life when every sight, every feeling, every thought came back, like a boomerang, to me. And worse, I was in love. Love with complications. The scenery was the last thing on my mind.”' },
      { p: '- Haruki Murakami, Norwegian Wood -' }
    ]
  },
  {
    slug: 'what-do-we-have-left', date: '2022-10-20', read: '2 min read', tags: ['life', 'diary'],
    title: 'What do we have left',
    excerpt: 'It\'s not about money, it\'s not about love, or anything else; it\'s about people and how they treat their lives.',
    body: [
      { p: 'There are a lot of things that I want to say these days, but around them there is always one thing. It\'s not about money, it\'s not about love, or anything else; it\'s about people and how they treat their lives. I feel the disrespect for their lives coming from the bottom of their hearts. I just don\'t get it.' },
      { p: 'Why do they need to be like that? Why?' },
      { p: 'I could say shit like this all day, but you know, the reason behind this account is that every day my brain throws some shit at me, and I just don\'t want to keep it to myself, so I push it back out to the social, like this.' },
      { p: 'People nowadays are something that I didn\'t understand, still don\'t, and never, ever will.' },
      { p: 'I hate \'em. They say pride is gonna destroy someone, but without pride, who are they?' },
      { p: 'Well, in the book <i>Man\'s Search for Meaning</i>, there\'s a question that is always in my head: "What do we have after we lose everything, like money, a job, a degree, all that stuff?" It reminds me of what really matters in life. Well, anyone can have their own answer, but for me, it can be anything, you know.' },
      { p: 'For a dad, it\'s his son, his wife.' },
      { p: 'For a mom, it\'s her parents, her home.' },
      { p: 'And that\'s the key.' },
      { p: 'I wish people could just put money behind life and get a life, truly living, not just trying to exist.' },
      { p: 'Anyway, I still hate people, and it will never change, at least for some years.' }
    ]
  },
  {
    slug: 'khong-con-nhung-co-don', date: '2022-10-20', read: '2 min read', tags: ['life', 'diary', 'tiếng việt'],
    title: 'Chúc thế giới những 20 tháng 10 sau sẽ không còn những "cô đơn"',
    excerpt: 'Giá mà mỗi một người có một ngày nghỉ cho riêng mình.',
    body: [
      { p: 'Giá mà mỗi một người có một ngày nghỉ cho riêng mình.' },
      { p: 'Việc tất cả có chung một dịp đặc biệt, nên cứ vào những dịp ấy, mọi người cứ phải chen chúc nhau, chờ đợi để được tận hưởng cái hạnh phúc lẽ ra phải có, chứ không như được ban ơn như vậy.' },
      { p: 'Một mặt khác, việc tất cả mọi người cùng có chung những dịp nghỉ ngơi như này, đấy là việc người cô đơn, người không hạnh phúc, người đang hạnh phúc cùng nhau có một dịp nghỉ ngơi. Lúc này:' },
      { p: '"Người cô đơn sẽ càng cô đơn, người không hạnh phúc sẽ càng không hạnh phúc, và người hạnh phúc, tôi tin, cũng không muốn nhìn thấy cảnh này."' },
      { p: 'Đương nhiên, xã hội không vận hành theo cách tôi muốn được.' },
      { p: 'Một lần nữa, tôi ghét mạng xã hội. Mọi người, ai cũng sẽ có lúc buồn khi dùng mạng xã hội.' },
      { p: 'Bạn biết đấy, chúng ta luôn luôn chỉ đăng tải những khung cảnh hạnh phúc lên mạng xã hội. Điều đó vô hình chung tạo ra ảo tưởng cho những người xung quanh, rằng cái người đấy, người kia sao lại hạnh phúc đến vậy, rằng tại sao cuộc sống mình lại tồi tệ đến thế.' },
      { p: 'Họ quên mất việc ai trong chúng ta cũng có những vấn đề riêng, và không ai tránh được cả.' },
      { p: 'Thôi, dừng tại đây vậy...' },
      { p: 'Chúc thế giới những 20 tháng 10 sau sẽ không còn những "cô đơn".' }
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
  },
  {
    name: 'My own picks',
    items: [
      { ref: 'G. A. Paleologo', title: 'Advanced Portfolio Management: A Quant’s Guide for Fundamental Investors', formats: 'hardcover/kindle', note: 'Gappy’s first book. Factor models, risk and position sizing, written for fundamental investors who pick stocks rather than build models.' },
      { ref: 'G. A. Paleologo', title: 'The Elements of Quantitative Investing', formats: 'hardcover/kindle', note: 'Gappy’s second book, the systematic side: factor models, portfolio construction and backtesting for quantitative investors.' },
      { ref: 'G. Coqueret, T. Guida', title: 'Machine Learning for Factor Investing', formats: 'hardcover/kindle, free online version', note: 'Machine learning applied to factor investing end to end: data, features, trees, neural networks and backtests, with code in R (and a Python edition).' }
    ]
  }
];

const RESUME = {
  school: 'Vietnam National University — University of Science',
  degree: 'Bachelor of Science in Applied Mathematics · GPA 7.3/10',
  years: 'Aug 2022 — Sep 2026 · Hanoi, Vietnam',
  courses: 'Main courses: differential equations, calculus, PDEs, probability theory, mathematical modelling, statistics. Thesis: Raman Spectroscopy for Methanol Detection, advised by Dr. Vu Duong (Institute of Physics, VAST).',
  roles: [
    {
      role: 'AI Engineer OJT', org: 'VinSmart Future',
      place: 'Hanoi, Vietnam', when: 'Apr — Jul 2026',
      bullets: [
        'Studying and evaluating machine learning approaches for fraud detection, including XGBoost and Random Forest, using the PaySim dataset.'
      ]
    },
    {
      role: 'Summer Research Student', org: 'Vietnam Institute for Advanced Study in Mathematics',
      place: 'Hanoi, Vietnam', when: 'Aug — Nov 2025',
      quip: 'great experience. Never coming back, I promise.',
      bullets: [
        'Research in epidemic modeling and actuarial science under the supervision of Dr. Hoang Manh Tuan.',
        'Contributor of a manuscript on a modified SIS model for health insurance pricing.'
      ]
    },
    {
      role: 'Summer Research Student', org: 'Group of Mathematical Biology, Nara Women’s University',
      place: 'Nara, Japan', when: 'Aug 2025',
      bullets: [
        'Short summer research program on dynamical systems in population biology.',
        'Developed and presented a SIR modeling project in R.'
      ]
    },
    {
      role: 'Research Intern', org: 'Institute of Physics, Vietnam Academy of Science and Technology',
      place: 'Hanoi, Vietnam', when: 'Jul 2025 — Present',
      quip: 'If you’re reading this, professor. thank you for guiding a confused particle.',
      bullets: [
        'Proposed a deep learning-based approach for quantifying methanol concentration in ethanol–methanol mixtures using Raman spectroscopy.',
        'Proposed and evaluated 1D and 2D CNN-based methods for the classification of methanol and ethanol from Raman spectral data.',
        'First author of a paper published in the proceedings of ICAEP-9 (2025).'
      ]
    },
    {
      role: 'Research Consultant', org: 'WorldQuant BRAIN',
      place: 'Hanoi · Remote', when: 'Apr 2024 — Present',
      quip: 'Trying to predict the unpredictable while pretending it’s science.',
      bullets: [
        'Submitted 1,800+ alphas across global equity markets using Fast Expression Language and Python; built automated pipelines for template mining, correlation-based selection, and Power Pool allocation.',
        '5-time Grandmaster (top 2%) and 3-time Master (top 8%) in the Genius Program, out of 10,000+ consultants.',
        'Exclusive delegate from Vietnam — among 12 selected globally — for the IQC 2025 finals in Singapore.'
      ]
    }
  ],
  skills: [
    { group: 'Programming languages', items: ['Python', 'R', 'Fast Expression Language', 'LaTeX'] },
    { group: 'Libraries & frameworks', items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NumPy', 'Pandas'] },
    { group: 'Knowledge areas', items: [
      'Portfolio construction', 'Backtesting', 'Factor analysis',
      'Machine learning', 'Deep learning', 'Feature engineering', 'Model validation'
    ] },
    { group: 'Languages', items: [
      'Vietnamese — Native',
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
