// タイマー処理の実習：擬似チャット
var answer = ["なるほど！", "ふむふむ", "うーん", "(笑)", "あらら・・・"];

// メッセージ送信処理　引数：送信したいメッセージ(文字列)、自分かPCか
// なんで急にシングルクォーテーションにしたんやろう
function addChatText(val, type) {
  if(!val) return false;
  
  // チャットに追加するHTMLタグを生成
  var text = document.createElement('li');
  // テキストを設定
  text.innerHTML = val;
  // PCの場合赤文字のスタイルを設定(CSSのclass「message-other」を設定)
  if(type == "other") {
    text.classList.add("message-other");
  }
  // 追加対象となる要素を取得
  var chatWindow = document.getElementById("chat-list");
  // appendChild()メソッドで要素とテキストをHTMLに追加
  chatWindow.appendChild(text);
}

// 送信ボタンを押した時にメッセージを送信
document.getElementById("chat-send").addEventListener("click", function() {
  var inputText = document.getElementById("chat-input");
  // addChatText関数を、入力値とCSSのclass判別文字列を引数として実行
  addChatText(inputText.value, "you");
  // 入力欄を空にする
  inputText.value="";
});

// 8秒ごとにメッセージを自動送信
setInterval(function() {
  // ランダムの整数を設定
  var index = Math.floor(Math.random() * answer.length);
  // ランダムメッセージを表示
  addChatText(answer[index], "other");
}, 8000);

// 初回のみ1秒後にメッセージを自動送信
setTimeout(function() {
  addChatText("へいらっしゃい！", "other");
}, 1000);

