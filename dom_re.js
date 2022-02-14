//dom_re.js => document Object Model
//Object{name : 'Hong' , age : 20 , fullName:function(){return this.name;}}
//요소를 생성 . createElement()
//요소를 선택 . getElementById() , getElementByTagName(ClassName)
// 속성을 지정 setAttribute() , getAttribute()



//html 페이지에 element attribute , value 를 생성하거나 수정하거나 삭제


console.dir(document.getElementById("name"));
//아이디값이 name 인 요소를 선택해온 의미

console.log(document.getElementsByTagName('input'));
// 태그 네임으로 오건(모든 태그 정보를 출력)
var name = document.getElementsByTagName('input')['name'].value;
console.log(name);
// 태그안에 있는 요소를 지정(인덱스로 지정가능)해서 가져오건 결과는 같다
document.getElementsByTagName('input')['name'].value = 'none';

document.getElementById('btn').addEventListener('click', function () {
    var name = document.getElementsByTagName('input')[0].value; // test
    var age = document.getElementsByTagName('input')[1].value; // 20
    var score = document.getElementsByTagName('input')[2].value; //80
    if (name == '' || age == '' || score == '') {
        alert('필수 값을 입력하세요.')
        return; //function의 종료 의미
    }
    var li = document.createElement('li');
    li.innerText = name + ' ' + age + ' ' + score; //<li>none 20 80</li> 이형식으로 생성

    document.getElementById('list').appendChild(li);
    // 만들어진 태그를 list라는 하위 태그를 생성하여 그대로 출력


    //입력된 값들을 clear
    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('input')[1].value = '';
    document.getElementsByTagName('input')[2].value = '';
    //값이 추가이벤트가 발생하면 텍스트 박스 안에 입력되었던 값들이 공백으로 초기화

})
const members = [
    {
        fName: '홍길동',age: 20,score: 60},
    {
        fName: '김만수',age: 27,score: 50},
    {
        fName: '최성식',age: 33,score: 77},
    {
        fName: '황인우',age: 50,score: 100}

]
let field = 'score';
console.log(members[0].fName);
console.log(members[1]['age']);
console.log(members[2][field]);

for(let member of members){
    // 객체에 대한 요소 전부를 이정할떈 of
    for(let field in member){
        //객체 안에 있는 필드 값들을 순서대로 가져오고 싶으면 in
        console.log(member[field]);
    }
}