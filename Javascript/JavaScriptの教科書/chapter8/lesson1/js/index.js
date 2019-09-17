// スライダーに表示する画像
var imgList = [
    "images/img01.png",
    "images/img02.png",
    "images/img03.png",
    "images/img04.png"
];

// 画像とドットナビの要素を自動で追加
for(var i =0; i < imgList.length; i++) {
  // li要素を取得
  var slide = document.createElement("li");
  // li要素の中に画像タグを埋め込む
  slide.innerHTML = "<img src='" + imgList[i] + "'>";
  // li要素をクラス名[slider-inner]の子要素として追加
  // [0]はクラス名が指定されている順番（今回はクラス名ここでしか使ってないから不要な気がする）
  document.getElementsByClassName("slider-inner")[0].appendChild(slide);
  // li要素を取得
  var nav = document.createElement("li");
  // プロパティ「data-nav-index」に数値を割り振る（data-：カスタムデータ属性）
  nav.setAttribute("data-nav-index", i);
  // li要素をクラス名「nav」の子要素として追加
  document.getElementsByClassName("nav")[0].appendChild(nav);
}
  
// クラス名「imageSlide」に画像1枚の要素を格納
var imageSlide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
// クラス名「dotNavigation」にドットナビの1つの要素を格納
var dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
// 「現在◯枚目の画像を表示している」というインデックス番号を格納する変数
var nowIndex = 0;
// 現在表示されている画像とドットナビにクラス名をつける
imageSlide[nowIndex].classList.add("show");
dotNavigation[nowIndex].classList.add("current");