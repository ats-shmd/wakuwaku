// タイマー処理　※コンソールで動作確認
// 時間の設定はミリ秒
// コンソールで実行すると、console.logの中身以外に数字が出力されるけどこれなんなの？
var i = 0;
setInterval(function() {
  console.log(i++);
}, 1000);

var i = 0;
setTimeout(function() {
  console.log(i++);
}, 1000);

var i = 0;
var countup = function() {
  console.log(i++);
}
var timer = setInterval(function () {
    countup();
    if (i > 5) {
        clearInterval(timer);
    }
}, 1000);
