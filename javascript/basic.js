//basic.js 파일입니다.
// 기본 타입 이 많지 않다
// 자바스크립트 코드 작성.
// 단축키 등록 beauty selection ctrl + ; 등록후 enter

var age = 10; //number
age = 12.3; //12살 3개월차
var fullName = '홍길동'; //자스 문자열 string" 또는 ''로 표기
var marriage = false; //boolean
// typeof 를 통해서 변수의 타입을 확인가능
// console.log(typeof hobby);


// 변수에 대한것을 미리 선언하지 않아도 스크립트는 변수를 미리 읽어두어 선언된 상태로 기억
// 변수는 var 로 지정 

var hobby; //undefined;
hobby = null; //변수초기화를 써서 잔존값을 없애
// hobby 는  object로써 빈값이라고 출력

hobby = 'reading';
hobby = 200;
hobby = false;

// let hobby =199;


// fullName=prompt('이름을 입력하세여 : ');
// age = prompt('나이를 입력해주세요: ');
// scanner와 같은 기능 하지만 입력박스로 ...

console.log(typeof hobby);
hobby = 'sleeping';

console.log('이름은 ' + fullName + ' 입니다' + ', 나이는 ' + age); //출력을 합니다

if (hobby) { //값이 있으면 true반환, 값이 없으면 : 0 , '' ,null =>false 반환
    console.log('취미는 ' + hobby);
}
var sum = 100 - 90;
if (sum) {
    console.log('sum : ' + sum);
}
// for (let i = 0; i < 10; i++) {
//     sum = sum+i;
//     console.log('sum값 : ' + sum);


// }
console.log('sum : ' + sum);
fullName = ['홍길동', '김민수', '박이현', '최성식']; //자바스크립트 배열 선언;

var translateName = '';
for (let i = 0; i < fullName.length; i++) {
    translateName += ' ' + fullName[i];
    // console.log('translateName 값 : ' + translateName);
}
// console.log('translateName 값 : ' + translateName);

for (let name of fullName) {
    // java의 향for과 같은 기능
    translateName += ' ' + name;
}
console.log('translateName 값 : ' + translateName);

// --------------------------------------

// object 타입
var person = {
    first_name : 'kildong',
    last_name : "Hong",
    age : 15,
    phone : '001-111-1111'
}
// 키와 밸류값만 가지고 만들고싶다~

var field = 'phone';
// field 를 선언하고 그 선언된 값의 초기값을 지정하여 가져오는것도 결과는 같습니다

person.first_name = '길동';
person['last_name'] = '홍'
person[field] = '010-123-1324';
// 선언되어졌던 값들을 다시 재정의
console.log('이름은 ' + person.first_name);
console.log('나이는 ' + person['age']);
console.log('전화번호는 ' + person[field]);



// ------------------------------------------------
document.write('<b>kil dong 의 정보</b>');
document.write('<ul>');
document.write('<li>이름 : '+person.first_name+'</li>');
document.write('<li>성 : '+person['last_name']+'</li>');
document.write('<li>전화번호 : '+person[field]+'</li>');
document.write('<li>나이 : '+person.age+'</li>');


document.write('</ul>');
document.write('<button onclick="+alert(person.first_name)">클릭</button>');

