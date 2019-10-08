// スライドに表示する見出し
var headingList = [
  "Zendeskで最良の顧客体験を実現",
  "お客様が心地よいと感じるエクスペリエンスを実現",
  "カスタマーサービスの質があっという間に向上"
];
// スライドに表示するテキスト
var textList = [
  "Zendeskのカスタマーサービスおよびエンゲージメント分野の製品は、高性能で柔軟性に優れ、あらゆるビジネスのニーズに対応できる拡張性を備えています。",
  "Zendeskは、あらゆる業務や規模に対応できるカスタマーサービスプラットフォームです。今日のお客様が求めるサポート体制を構築し、お客様の関係を強化しませんか？",
  "電話からのお問い合わせも、チャットからのお問い合わせも、全てひとつの画面で管理。カスタマーサービス業務が劇的にスムーズになります。"
];
// スライドに表示する画像
var imgList = [
  "images/illustration-hero.png",
  "images/truck.svg",
  "images/conclusion.svg"
];

// コンテンツとドットナビの要素を自動で追加
for (var i = 0; i < headingList.length; i++) {
  // コンテンツの要素を追加
  var slide = document.createElement("div");
  slide.className = "content";
  // コンテンツ-文章の要素を追加
  var article = document.createElement("div");
  article.className = "article";
  // article要素の中に見出し、テキストを埋め込む
  var heading = document.createElement("p");
  heading.appendChild(document.createTextNode(headingList[i]));
  heading.className = "heading";
  var text = document.createElement("p");
  text.appendChild(document.createTextNode(textList[i]));
  text.className = "text";
  article.appendChild(heading);
  article.appendChild(text);

  // コンテンツ-画像の要素を追加
  var image = document.createElement("div");
  image.className = "image";
  image.innerHTML = "<img src='" + imgList[i] + "'>";
  
  // コンテンツ要素に文章と画像を埋め込む
  slide.appendChild(article);
  slide.appendChild(image);
  document.getElementsByClassName("slider-inner")[0].appendChild(slide);

  // ドットナビ要素の追加
  var nav = document.createElement("li");
  nav.setAttribute("data-nav-index", i);
  // 要素をクラス名navの子要素として追加
  document.getElementsByClassName("nav")[0].appendChild(nav);
}

// スライド数を取得
var length = headingList.lenght -1;

var slide = document.getElementsByClassName("slider-inner")[0].getElementsByClassName("content");

var dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");

// 現在表示しているスライドのインデックス番号
var nowIndex = 0;

// 現在表示しているスライドとドットナビにクラスを追加する
slide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");

// スライドがアニメーション中か判断するフラグ
var isChanging = false;

// スライドのsetTimeoutを管理するタイマー
var slideTimer;

// スライドの切り替え時に呼び出す関数
function sliderSlide(val) {
  if (isChanging === true) {
    return false;
  }
  isChanging = true;

  // 現在表示しているスライドとドットナビからクラスを削除
  slide[nowIndex].classList.remove("show");
  dotNavigation[nowIndex].classList.remove("current");

  nowIndex = val;

  // 次に表示するスライドとドットナビにクラスを追加
  slide[nowIndex].classList.add("show");
  dotNavigation[nowIndex].classList.add("current");

  sliderTimer = setTimeout(function() {
    isChanging = false;
  }, 600);
}

// ドットナビ押下時のイベント
for (var i = 0; i < dotNavigation.length; i++) {
  dotNavigation[i].addEventListener("click", function() {
    var index = Number(this.getAttribute("data-nav-index"));
    sliderSlide(index);
  }, false);
}