$(function() {
  // html要素で指定。navで囲まれた要素すべてが対象
  // $("nav").css("background-color", "pink");

  // idやクラス名で指定
  // $("#navi").css("background-color", "pink");
  // $(".item").css("color", "red");

  // htmlの位置関係で指定
  // ul直下のli要素に背景色を指定
  // $("ul > li").css("background-color", "pink");
  // .list-list直下の.itemに文字色赤を指定
  // $(".list-list > .item").css("color", "red");
  // 複数の要素を指定
  // $(".item1_0, .item1_1").css("background-color", "pink");
  // 隣接した要素を指定
  // $(".item1_0 + .item1_1").css("background-color", "pink");
  // 子要素以下の指定
  // $(".list-list li").css("background-color", "pink");

  // メソッドによる要素の指定
  $(".list-list_item").parent().css("background-color", "pink");
});