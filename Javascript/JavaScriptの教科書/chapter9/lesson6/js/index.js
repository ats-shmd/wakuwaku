$(function() {
  // どうしてお手本はclick()じゃなくてon()にしてるんだろう。後から追加した要素にも対応できるからかなあ。
  $(".btn-gnavi").on("click", function() {
    // ハンバーガーメニューの位置を設定するための変数
    var rightVal = 0;
    if($(this).hasClass("open")) {
      // 「open」クラスを持つ要素はメニューを開いた状態に設定
      rightVal = -300;
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).removeClass("open");
    } else {
      // 「open」クラスを持たない要素はメニューを閉じた状態に設定(rightValは0の状態)
      // メニューを閉じたら次回クリック時は開いた状態になるように設定
      $(this).addClass("open");
    }
    // .stop()はユーザーが連続でアニメーションを実行した時も快適に動作させるため
    // animate()は色々できてめちゃんこ面白そう。第3引数でアニメーションの挙動を設定したり、
    // 第4引数でコールバック関数も設定できる
    $("#global-navi").stop().animate({
      right: rightVal
    }, 200);
  });
});