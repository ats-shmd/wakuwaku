// いいねボタンをクリックした時の動作を追加(無名関数ver)
// document.getElementById("nice").addEventListener("click", function() {
//     // pタグを設定
//     var element = document.createElement("p");
//     var text = document.createTextNode("いいね！");
//     document.body.appendChild(element).appendChild(text);
// })

// いいねボタンをクリックした時の動作を追加(自作関数ver)
var button = document.getElementById("nice");
button.addEventListener("click", niceActon);

function niceActon () {
  var element = document.createElement("p");
  var text = document.createTextNode("いいね！");
  document.body.appendChild(element).appendChild(text);
}