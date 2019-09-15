// HTML要素の書き換え
// var element = document.getElementById("weather");
// element.innerHTML = "<span>曇り</span>";

// クラス属性とセレクタで要素を取得
var element = document.querySelector(".weather");
console.log(element);
var element = document.querySelector("dl");
console.log(element);

// dlセレクタの子要素のdtセレクタを指定したい場合
var element = document.querySelector("dl dt");
console.log(element);

// DOM操作でCSSを変更する
//var element = document.querySelector(".weather");
//element.style.color = "#ff7c89";

//var element = document.querySelector(".weather");
//element.style.textDecoration = "underline";

// 複数のスタイルを一気に指定する
var element = document.querySelector(".weather");
element.style.cssText = "color: #ff7c89; text-decoration: underline;";

// 既存のCSSファイルのclassスタイルを適用する(class指定でもできるけど影響範囲要注意)
var element = document.getElementById("weather");
element.className = "sample";

// DOM操作で要素の追加を行う
var element = document.createElement("p");
var text = document.createTextNode("いいお天気ですね");
document.body.appendChild(element).appendChild(text);

// DOM操作で要素の削除を行う
var element = document.getElementById("credit");
var parent = element.parentElement;
parent.removeChild(element);