// オブジェクトの使い方
var student = {
    gender: "female",
    age: 30,
    major: "arts",
    lessons: function(theme) {
        console.log(this.major + "専攻の" + theme + "の授業");
    }
};
console.log(student["gender"]);
console.log(student.gender);
student.lessons("グラフィック");

// windowオブジェクト
console.log(window.outerWidth);

// documentオブジェク
window.document.write("テキストテスト");
// windowオブジェクトの下層のオブジェクトに当たる。window.を省略するのが一般的
document.write("テキストテスト");

// Mathオブジェクト
console.log(Math.PI);
console.log(Math.round(3.6));

// Dateオブジェクト。newが必要。
var today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getDate());
var mm = today.getMonth() + 1;
console.log(mm);

var yy = today.getFullYear();
var dd = today.getDate();
console.log(yy + "年" + mm + "月" + dd + "日");