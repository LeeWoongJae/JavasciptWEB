var str  =  "hello";
var str2 = 'hello';
var age=29;
str=``; 
// 1 옆쪽 특수기호
str=`I'm ${age}\nMy name is Lee`;
// `` 문자열 표현하는 구분기호
// `` 쓰고 ${변수}를 사용하면 문자열 안에서도 변수값을 받아올수있다

// "",'',`` => 문자열

console.log("I'm 28");
console.log('I"m 29');
console.log('I"m 29\nmy name is yedam!');
console.log(str);

var members = ["이효림", "장예빈", "윤희철", "이웅재"];
var tag=`<ul>`
for(let member of members){
    tag += `<li>이름은 ${member} 입니다. </li>`;
}
tag += `</ul>`
document.write(tag);


