//dom_re.js => DOM : Document Object Model
//Object{name : 'Hong' , age : 20 , fullName:function(){return this.name;}}
//요소를 생성 . createElement()
//요소를 선택 . getElementById() , getElementByTagName(ClassName)
// 속성을 지정 setAttribute() , getAttribute()



//html 페이지에 element attribute , value 를 생성하거나 수정하거나 삭제


// console.dir(document.getElementById("name"));
// //아이디값이 name 인 요소를 선택해온 의미

// console.log(document.getElementsByTagName('input'));
// // 태그 네임으로 오건(모든 태그 정보를 출력)
// var name = document.getElementsByTagName('input')['name'].value;
// console.log(name);
// // 태그안에 있는 요소를 지정(인덱스로 지정가능)해서 가져오건 결과는 같다
// document.getElementsByTagName('input')['name'].value = 'none';

//사용되는 함수들..
//선택버튼
function selectFnc(){ //선택버튼을 클릭시 수정화면에 보여주는 기능
    var selectedTr = this.parentNode.parentElement;
       console.log(selectedTr);
       console.log(selectedTr.querySelector('td:nth-child(1)').innerText);//tr 아래 있는 맨 처음 td를 가져온다
       var sName = selectedTr.querySelector('td:nth-child(1)').innerText;
       var sAge = selectedTr.querySelector('td:nth-child(2)').innerText;
       var sScore = selectedTr.querySelector('td:nth-child(3)').innerText;

        document.getElementById('name').value = sName;
        document.getElementById('age').value = sAge;
        document.getElementById('score').value = sScore;

}
//수정버튼 콜백함수
function modBtnFnc(){
    var keyName = document.querySelector('#name').value;
    // console.log(document.getElementById(keyName));
    var modTr = document.getElementById(keyName);

    var iAge = document.getElementById('age').value;
    var iScore = document.getElementById('score').value;

    if(iAge == '' || iScore == ''){
        alert('지정된 포맷으로 값을 입력하세요')
        return;
    }




    modTr.childNodes[1].innerText = iAge;
    // modTr.childNodes[1].innerText = document.querySelector('#age').value; 위와 같은 결과

    modTr.childNodes[2].innerText = iScore;

}
//추가버튼 콜백함수 
function addBtnFnc() {
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

}



// ---------------------------------------------------------------------------------------

//추가 버튼 이벤트 핸들러(friend list 에 추가)
document.getElementById('btn').addEventListener('click', addBtnFnc);
// 이벤트 이름(click)  , 콜백함수(addBtnFnc) (콜백함수를 따로 분려하여 한눈에 보기 쉽게 정의)
// ---------------------------------------------------------------------------------------

//수정 버튼 이벤트 핸들러
document.querySelector('#mod').addEventListener('click',modBtnFnc);
// -----------------------------------------------------------------------------------------
const members = [

    {fName: '홍길동',age: 20,score: 60},
    {fName: '김만수',age: 27,score: 83},
    {fName: '최성식',age: 33,score: 77},
    {fName: '황인우',age: 50,score: 100}

]
let field = 'score';
console.log(members[0].fName);
console.log(members[1]['age']);
console.log(members[2][field]);


//배열 반복시 for...of/ for...in
for(let member of members){
    // members객체에 대한 요소 전부를 임시객체인 member 로 이전할때 of
    for(let field in member){
        //객체 안에 있는 필드값들을 순서대로 가져오고 싶으면 in
        // 임시 객체를 만들어서 그 안에 있는 field 값들을 하나하나 가져오는 상황
        console.log(member[field]);
    }
}
// <table><thead>이름 , 나이 , 점수</thead><tbody><tr>name , age , score</tr></tbody></table>
var table = document.createElement('table');
// 폼만 만들어지고 아직 삽입 되어지지 않아서 appendchild 해야한다
table.setAttribute('border','15');

table.setAttribute('id','tbl');


// table.setAttribute('class','main');
table.className = 'main';

//thead 영역
var thead = document.createElement('thead');
table.appendChild(thead);

var titles = ['이름','나이','점수','삭제/선택'];
var tr = document.createElement('tr');

for(let title of titles){
var th = document.createElement('th');
th.innerText=title;
tr.appendChild(th);
}

thead.appendChild(tr);//건마다 추가되는것을 체크하세요


//tbody 영역
var tbody = document.createElement('tbody');

for(let member of members){
    //tr>td*3(이름 , 나이 , 점수)
    tr = document.createElement('tr');

    tr.setAttribute('id',member.fName);

    for(let field in member){
        var td = document.createElement('td');
        td.innerText = member[field];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);

    td = document.createElement('td');

    var button = document.createElement('button');
    button.innerText='삭제';

    button.addEventListener('click',function(){
        
        this.parentElement.parentElement.remove();

    });
    td.appendChild(button);

    button = document.createElement('button');
    button.innerText='선택';
    button.addEventListener('click',selectFnc);

    td.appendChild(button);
    tr.appendChild(td);
    
}
table.appendChild(tbody);

console.log(table);

// show 하위 요소로 table 을 지정
document.getElementById('show').appendChild(table);
