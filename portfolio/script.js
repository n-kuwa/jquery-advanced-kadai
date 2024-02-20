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

// titleのMy Profileの不透明度の変更
/*$('h1').on({
  'mouseenter' : () => {
  // カーソルを合わせると不透明度を0.5にする
  $('h1').css('opacity',0.5);
  },
  'mouseout' : () => {
  // カーソルを外すと不透明度を1にする
    $('h1').css('opacity', 1);
  },
}); */

// ナビゲーションのAboutの不透明度の変更
$('#textAbout,#textWorks,h1').on({
  'mouseenter' : () => {
  // カーソルを合わせると不透明度を0.5にする
  $(this).css('opacity',0.5);
  },
  'mouseout' : () => {
  // カーソルを外すと不透明度を1にする
    $(this).css('opacity', 1);
  },
});
// ナビゲーションWorksの不透明度の変更
/*$('#textWorks').on({
  'mouseenter' : () => {
  // カーソルを合わせると不透明度を0.5にする
  $('#textWorks').css('opacity',0.5);
  },
  'mouseout' : () => {
  // カーソルを外すと不透明度を1にする
    $('#textWorks').css('opacity', 1);
  },
});*/

// 「TOPに戻る」ボタンのidを持つHTML要素を取得
const backBtn = document.getElementById('back-btn');
$(document).on('click','#back-btn',() => {
  console.log('クリックしました');
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
  $('#back-btn').show();
  } else {
  $('#back-btn').hide();
  }
  });

// スクロールした時にTOPに戻るボタンを表示させる
/* window.addEventListener('scroll', () => {
  // 画面のスクロール量を取得
  const scrollValue = document.scrollingElement.scrollTop
  console.log(scrollValue);
  // 画面のスクロール量が100px以上であれば、「TOPに戻る」ボタンを表示
  if (scrollValue >= 100 ) {
  $('#back-btn').show();
  } else {
  // 100px未満であれば、「TOPに戻る」ボタンを非表示
  $('#back-btn').hide();
  }
}); */