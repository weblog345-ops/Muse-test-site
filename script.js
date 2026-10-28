// aoi.design サンプルサイト用スクリプト
(function () {
  'use strict';

  /* ---------- データ（すべて架空のサンプル） ---------- */
  var WORKS = [
    { id: 'cafe', cat: 'web', catLabel: 'Webサイト', img: 'images/work-cafe.jpg',
      title: 'カフェ「木漏れ日」公式サイト',
      short: '常連さんが“いつもの場所”と感じる空気感を、そのまま画面に。',
      body: '地元で愛される小さなカフェの公式サイト。メニューや営業時間がすぐ分かる実用性と、お店の温かい空気感の両立を目指しました。',
      points: ['写真中心のレイアウトで店内の空気感を再現', 'メニューはスマホで読みやすい縦組みに', 'Instagramの投稿を自動で表示'],
      result: '公開後3ヶ月で、Web経由の来店きっかけが約1.3倍に（サンプル数値）' },
    { id: 'salon', cat: 'web', catLabel: 'Webサイト', img: 'images/work-salon.jpg',
      title: 'ヘアサロン「Lumi」予約サイト',
      short: '予約までの迷いをなくす、静かで上品なデザイン。',
      body: '30〜40代の女性が中心客層のヘアサロン。メニューと料金、スタイリスト紹介から予約までを迷わずたどれる導線にしました。',
      points: ['予約ボタンを常に目に入る位置に固定', 'スタイリストごとの得意分野を明記', '料金表は税込・所要時間つきで不安を解消'],
      result: '予約ページへの到達率が改善（サンプル事例）' },
    { id: 'boutique', cat: 'web', catLabel: 'Webサイト', img: 'images/work-boutique.jpg',
      title: 'アパレル「凪」オンラインストア',
      short: '服の色と質感が伝わる、余白の多いストアデザイン。',
      body: '天然素材の服を扱う小さなブランドのECサイト。商品写真を主役に、色味が正確に伝わるよう背景や余白を徹底して整えました。',
      points: ['商品写真は大きめ表示で質感を伝える', '購入までのステップを3画面に短縮', 'サイズ感の不安を減らす着用イメージを追加'],
      result: '公開初月のオンライン売上が想定以上に（サンプル事例）' },
    { id: 'bakery', cat: 'lp', catLabel: 'LP', img: 'images/work-bakery.jpg',
      title: 'ベーカリー「こむぎ日和」季節限定LP',
      short: '焼きたての香りまで伝わりそうな、1枚の特集ページ。',
      body: '秋の限定パンを紹介するランディングページ。読み進めるほどお腹がすく流れを意識して、写真とコピーの順番を設計しました。',
      points: ['最初の画面で限定感と期間を明示', '焼き上がり時間の案内で来店を後押し', '予約フォームまでの導線を1本化'],
      result: '限定パンの予約が例年の約1.5倍に（サンプル数値）' },
    { id: 'clinic', cat: 'web', catLabel: 'Webサイト', img: 'images/work-clinic.jpg',
      title: '歯科クリニック サイトリニューアル',
      short: '不安をやわらげる、白と木目のやさしいサイト。',
      body: '開院10年を機にリニューアル。初めての患者さんが「ここなら大丈夫そう」と感じる安心感を、白と木目のトーンで表現しました。',
      points: ['治療の流れをイラストで分かりやすく', '費用の目安を事前に明示', 'Web予約・電話ボタンをスマホで固定表示'],
      result: '新規のWeb予約が増加（サンプル事例）' },
    { id: 'hotel', cat: 'lp', catLabel: 'LP', img: 'images/work-hotel.jpg',
      title: '小さな宿「凪の宿」宿泊プランLP',
      short: '静けさを売る宿の、静かなランディングページ。',
      body: '1日3組限定の小さな宿の宿泊プランLP。にぎやかな演出を避け、余白と写真で「静けさ」という価値を伝えました。',
      points: ['ファーストビューは部屋からの景色1枚に集中', 'プラン比較を表ではなく物語形式で提示', '空室カレンダーへの導線をシンプルに'],
      result: '直予約の割合が上昇（サンプル事例）' },
    { id: 'archi', cat: 'brand', catLabel: 'ブランディング', img: 'images/work-archi.jpg',
      title: '建築事務所 ロゴ＆サイト一式',
      short: '白模型のような端正さで、事務所の姿勢を表現。',
      body: '独立したばかりの建築事務所のブランディング。ロゴ、名刺、サイトまで一貫した世界観で、実績が少なくても信頼感が伝わる設計に。',
      points: ['ロゴは建物の柱と梁をモチーフに設計', '実績写真を引き立てる無彩色のトーン', '名刺・封筒など紙ものまで統一'],
      result: '紹介経由の相談が増加（サンプル事例）' },
    { id: 'atelier', cat: 'brand', catLabel: 'ブランディング', img: 'images/work-atelier.jpg',
      title: '陶芸工房 ブランドサイト',
      short: '土の手ざわりが伝わる、作り手の顔が見えるサイト。',
      body: '夫婦で営む陶芸工房のブランドサイト。作品だけでなく、作る人の手と日常が見えることで、器への愛着が深まる構成にしました。',
      points: ['制作風景の写真を大きく使用', '器ごとのストーリーを添えた商品紹介', '展示会情報の更新を自分でできる仕組み'],
      result: 'オンラインでの器の販売を開始（サンプル事例）' }
  ];

  var JOURNAL = [
    { id: 'j1', date: '2026.10.20', cat: 'デザイン', img: 'images/journal-color.jpg',
      title: '色は「3色まで」と決めると、サイトはぐっと垢抜ける',
      short: '色が増えるほど安っぽく見える理由と、3色の選び方をまとめました。',
      body: ['サイトがなんだか散らかって見える原因の多くは、色の数です。メインカラー、サブカラー、アクセント。この3つに絞るだけで、全体に統一感が生まれます。',
             '選び方のコツは、お店の内装やロゴなど、すでに決まっている色から拾うこと。新しい色を発明するのではなく、今ある色を整えるイメージです。',
             'どうしても4色目が欲しくなったら、3色の濃淡で代用できないか試してみてください。たいてい、それで足ります。'] },
    { id: 'j2', date: '2026.10.06', cat: '仕事のこと', img: 'images/journal-desk.jpg',
      title: 'ヒアリングで必ず聞く、3つの質問',
      short: '制作の前に、お店の「らしさ」を引き出すために聞いていることです。',
      body: ['サイト制作のヒアリングでは、デザインの好みよりも先に聞くことがあります。「お客様に、どんな言葉で褒められますか？」という質問です。',
             '次に「近くの同業さんと、ここだけは違うと思うところ」。そして「このサイトを見た人に、最後にどうなってほしいか」。この3つが決まると、デザインは自然と決まっていきます。',
             '逆に、この3つが曖昧なまま作り始めると、途中で何度も迷子になります。急がば回れ、です。'] },
    { id: 'j3', date: '2026.09.22', cat: 'デザイン', img: 'images/journal-plant.jpg',
      title: 'スマホで読みやすい文章の、ちょっとした工夫',
      short: '行間と余白を変えるだけでも、読みやすさは大きく変わります。',
      body: ['いま、サイトを見る人の8割以上はスマホからです。なのに文章の設計は、PC基準のままになっていることが少なくありません。',
             'スマホでは、1行を短く、行間を広めに。そして段落ごとに余白をしっかり取ること。この3つだけで、同じ文章でも読みやすさが大きく変わります。',
             '公開前に、自分のスマホで声に出して読んでみるのもおすすめです。つっかえるところは、だいたい読者もつっかえています。'] }
  ];

  /* ---------- ヘッダー ---------- */
  var header = document.getElementById('siteHeader');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var menuBtn = document.getElementById('menuBtn');
  var mobileNav = document.getElementById('mobileNav');
  menuBtn.addEventListener('click', function () {
    var open = mobileNav.classList.toggle('open');
    menuBtn.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  });
  mobileNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      menuBtn.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- スクロールでふわっと表示＆カウントアップ ---------- */
  function startCount(el) {
    var to = parseFloat(el.getAttribute('data-to'));
    var dec = parseInt(el.getAttribute('data-decimal') || '0', 10);
    function render(v) { el.textContent = dec ? (v / 10).toFixed(1) : Math.round(v); }
    if (!window.requestAnimationFrame) { render(to); return; }
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / 1200);
      var v = to * (1 - Math.pow(1 - p, 3));
      render(v);
      if (p < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          e.target.querySelectorAll('.count').forEach(startCount);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.18 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('.count').forEach(startCount);
  }

  /* ---------- モーダル ---------- */
  var backdrop = document.getElementById('modalBackdrop');
  var modalContent = document.getElementById('modalContent');
  function openModal(html) {
    modalContent.innerHTML = html;
    backdrop.hidden = false;
    document.body.classList.add('locked');
  }
  function closeModal() {
    backdrop.hidden = true;
    document.body.classList.remove('locked');
  }
  document.getElementById('modalClose').addEventListener('click', closeModal);
  backdrop.addEventListener('click', function (e) { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !backdrop.hidden) closeModal(); });

  /* ---------- Works ---------- */
  var FILTERS = [
    { key: 'all', label: 'すべて' },
    { key: 'web', label: 'Webサイト' },
    { key: 'lp', label: 'LP' },
    { key: 'brand', label: 'ブランディング' }
  ];
  var currentFilter = 'all';
  var filtersEl = document.getElementById('workFilters');
  var gridEl = document.getElementById('worksGrid');
  var countEl = document.getElementById('workCount');
  var emptyEl = document.getElementById('worksEmpty');

  FILTERS.forEach(function (f) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'chip' + (f.key === 'all' ? ' active' : '');
    b.textContent = f.label;
    b.setAttribute('data-filter', f.key);
    b.addEventListener('click', function () {
      currentFilter = f.key;
      filtersEl.querySelectorAll('.chip').forEach(function (c) {
        c.classList.toggle('active', c.getAttribute('data-filter') === f.key);
      });
      renderWorks();
    });
    filtersEl.appendChild(b);
  });

  function renderWorks() {
    var list = WORKS.filter(function (w) { return currentFilter === 'all' || w.cat === currentFilter; });
    gridEl.innerHTML = '';
    list.forEach(function (w) {
      var card = document.createElement('button');
      card.type = 'button';
      card.className = 'work-card';
      card.innerHTML = '<img src="' + w.img + '" alt="" loading="lazy">' +
        '<span class="work-body"><span class="work-cat">' + w.catLabel + '</span>' +
        '<h3>' + w.title + '</h3><p>' + w.short + '</p></span>';
      card.addEventListener('click', function () {
        openModal(
          '<img class="hero-img" src="' + w.img + '" alt="">' +
          '<div class="modal-body"><span class="work-cat">' + w.catLabel + '</span>' +
          '<h3 id="modalTitle">' + w.title + '</h3><p>' + w.body + '</p>' +
          '<h4>工夫したポイント</h4><ul>' +
          w.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') +
          '</ul><h4>公開後</h4><p>' + w.result + '</p></div>'
        );
      });
      gridEl.appendChild(card);
    });
    countEl.textContent = list.length + '件の実績を表示しています';
    emptyEl.hidden = list.length > 0;
  }
  renderWorks();

  /* ---------- Journal ---------- */
  var jGrid = document.getElementById('journalGrid');
  JOURNAL.forEach(function (j) {
    var card = document.createElement('button');
    card.type = 'button';
    card.className = 'journal-card';
    card.innerHTML = '<img src="' + j.img + '" alt="" loading="lazy">' +
      '<span class="journal-body"><span class="journal-meta"><time>' + j.date + '</time>' +
      '<span class="journal-cat">' + j.cat + '</span></span>' +
      '<h3>' + j.title + '</h3><p>' + j.short + '</p></span>';
    card.addEventListener('click', function () {
      openModal(
        '<img class="hero-img" src="' + j.img + '" alt="">' +
        '<div class="modal-body"><span class="journal-meta"><time>' + j.date + '</time>' +
        '<span class="journal-cat">' + j.cat + '</span></span>' +
        '<h3 id="modalTitle">' + j.title + '</h3>' +
        j.body.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>'
      );
    });
    jGrid.appendChild(card);
  });

  /* ---------- お問い合わせフォーム（サンプル：実際には送信しない） ---------- */
  var form = document.getElementById('contactForm');
  var errorEl = document.getElementById('formError');
  var doneEl = document.getElementById('formDone');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('fName').value.trim();
    var email = document.getElementById('fEmail').value.trim();
    var msg = document.getElementById('fMsg').value.trim();
    var errs = [];
    if (!name) errs.push('お名前を入力してください');
    if (!email) errs.push('メールアドレスを入力してください');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push('メールアドレスの形式を確認してください');
    if (!msg) errs.push('メッセージを入力してください');
    if (errs.length) {
      errorEl.textContent = errs.join(' / ');
      errorEl.hidden = false;
      return;
    }
    errorEl.hidden = true;
    form.hidden = true;
    doneEl.hidden = false;
    if (doneEl.scrollIntoView) doneEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  document.getElementById('formReset').addEventListener('click', function () {
    form.reset();
    doneEl.hidden = true;
    form.hidden = false;
  });

  /* ---------- 動きを減らす設定では動画を止める ---------- */
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var video = document.querySelector('.hero-video');
    if (video) video.pause();
  }
})();
