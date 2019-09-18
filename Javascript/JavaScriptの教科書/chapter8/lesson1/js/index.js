// スライダーに表示する画像
var imgList = [
    "images/img01.png",
    "images/img02.png",
    "images/img03.png",
    "images/img04.png"
];

// 画像とドットナビの要素を自動で追加
for (var i = 0; i < imgList.length; i++) {
  // 画像要素の追加
  var slide = document.createElement("li");
  // li要素の中に画像タグを埋め込む
  slide.innerHTML = "<img src='" + imgList[i] + "'>";
  // li要素をクラス名[slider-inner]の子要素として追加
  // [0]はクラス名が指定されている順番（[0]をつけていないとHTMLCollection[1]の状態なので、appendChildできない）
  document.getElementsByClassName("slider-inner")[0].appendChild(slide);
 
  // ドットナビ要素の追加
  var nav = document.createElement("li");
  // プロパティ「data-nav-index」に数値を割り振る（data-：カスタムデータ属性）
  nav.setAttribute("data-nav-index", i);
  // li要素をクラス名「nav」の子要素として追加
  document.getElementsByClassName("nav")[0].appendChild(nav);
}

// スライドの数を取得（後の処理のため-1）
var length = imgList.length - 1;
var imageSlide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
var dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
// 「現在◯枚目の画像を表示している」というインデックス番号を格納する変数
var nowIndex = 0;
// 現在表示されている画像とドットナビにクラスを追加する
imageSlide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");
// スライドがアニメーション中か判断するフラグ
var isChanging = false;
// スライドのsetTimeoutを管理するタイマー
var slideTimer;

// スライド切り替え時に呼び出す関数
function sliderSlide(val) {
  if (isChanging === true) {
    return false;
  }
  isChanging = true;
  // 現在表示している画像とドットナビからクラスを削除
  imageSlide[nowIndex].classList.remove("show");
  dotNavigation[nowIndex].classList.remove("current");
  nowIndex = val;
  // 次に表示する画像とドットナビにクラスを追加
  imageSlide[nowIndex].classList.add("show");
  dotNavigation[nowIndex].classList.add("current");
  // アニメーションが終わるタイミングでisChangingのステータスをfalseに。cssと全く同じ600ミリ秒にセットで大丈夫なのかなぁ。
  slideTimer = setTimeout(function() {
    isChanging = false;
  }, 600);
}

// 左矢印のナビをクリックした時のイベント（第3引数はuseCaptureで、デフォルトはfalse。バブリングフェーズで）
document.getElementById("arrow-prev").addEventListener("click", function() {
  var index = nowIndex - 1;
  if (index < 0) {
    index = length;
  }
  sliderSlide(index);
}, false);

// 右矢印のナビをクリックした時のイベント
document.getElementById("arrow-next").addEventListener("click", function() {
  var index = nowIndex + 1;
  if (index > length) {
    index = 0;
  }
  sliderSlide(index);
}, false);

// ドットナビをクリックした時のイベント
for (var i = 0; i < dotNavigation.length; i++) {
  // データ属性のインデックス番号を元にスライドを行う
  dotNavigation[i].addEventListener("click", function() {
    var index = Number(this.getAttribute("data-nav-index"));
    sliderSlide(index);
  }, false);
}