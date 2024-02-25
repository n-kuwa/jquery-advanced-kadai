$(function() {
  $('#back-btn').hide();
});

// メインビジュアルをカルーセルにする
$('.carousel').slick({
  fade: true,
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 3000,
  arrows: false,
});

// ナビゲーションのh1,About,workdの不透明度の変更
$(document).on({
  'mouseenter' : (event) => {
    let tid = $(event.target).attr('id')
  // カーソルを合わせると不透明度を0.5にする
  $('#'+tid).css('opacity',0.5);
  },
  'mouseout' : (event) => {
    let tid = $(event.target).attr('id')
  // カーソルを外すと不透明度を1にする
  $('#'+ tid).css('opacity', 1);
  }
},'#textAbout, #textWorks, #h1mypro');

// 「TOPに戻る」ボタンのidを持つHTML要素を取得
//const backBtn = document.getElementById('back-btn');
$(document).on('click','#back-btn',(event) => {
  // console.log('クリックしました');
  
});
$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
  // 画面のスクロール量が100px以上であれば、スクロールした時にTOPに戻るボタンを表示させる
  $('#back-btn').show();
  } else {
  //それ以下は隠す
  $('#back-btn').hide();
  }
});


// TOPに戻るボタンをクリックしたとき、滑らかにスクロールさせる
$('a[href ^= "#"]').click(function() {
  // a要素のhref属性の値を取得
  const href = $('a').attr('href');
  
  // href属性の値が＃であれば、スクロール先をhtml要素にする
  if (href == "#") {
    const position = $(html).offset().top;
  } else if (href == '#about') {
    const position = $('#about').offset().top;
  } else {
    const position = $('#works').offset().top;
  }
  $('html.body').animate({scrollTop: position},700,swing);
});

// スクロールした時にセクションをフェードインさせる
$(window).scroll(function () {
  // sectionごとに
  $('section').each(function() {
    // スクロール位置（上から）
    const position = $(this).offset().top;
    // ウィンドウのスクロール量（上から）
    const scroll = $(window).scrollTop();
    // ウィンドウの縦幅
    const windowHeight = $(window).height();
    // ウィンドウのスクロール量がこの要素のスクロール位置-ウィンドウの縦幅+ 100pxより大きい場合
    if (scroll > position - windowHeight + 100) {
      $(this).addClass('scroll');
    }
  });
});

// モーダルでWorksの画像をクリック時に拡大
$('#works img').click(function() {
  // クリックされた画像のsrc属性の値を取得
  const bigImg = $(this).attr('src');
  // console.log(bigImg);
  $('.bigimg').attr('src',bigImg);
  $('.modal').fadeIn();
  $('body,html').css('overflow-y','hidden');

  return false;
});

// モーダル右上の×ボタンを押した際の処理
$('.close-btn').click(function() {
  $('.modal').fadeOut();
  $('body,html').css('overflow-y','visible');
  return false;
});
