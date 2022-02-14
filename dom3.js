// dom3.js

// 변수는 값을 재할당 할수 있는 값
let n1 = 10;
n1 = 'tem';

// 상수는 값을 재할당 할수 없다 절대적인 값
const n2 = 11;
// n2 = 1111;

function makeHead() {
    // title의 개수만큼 th생성
    // tr, thead 생성해서 반환

    const titles = ['이름', '나이', '성적', '삭제'];
    let thead = document.createElement('thead');
    //thead 영역 
    let tr = document.createElement('tr');

    for (let title of titles) {

        let th = document.createElement('th');
        let text = document.createTextNode(title);
        th.appendChild(text); //<th>이름</th>
        tr.appendChild(th); //<tr><th>이름</th></tr>

    }
    thead.appendChild(tr); //<thead><tr><th>이름</th></tr></thead>


    return thead;
}

function makeBody(dataAry) {
    let tbody = document.createElement('tbody');


    //tbody영역
    dataAry.forEach(function (val, ind, arr) {

        let tr = makeRow(val); // value 값들을 하나하나 받아서 tr생성
        tbody.appendChild(tr);
    });

    return tbody;
}

//row 생성
function makeRow(obj) {
    let tr = document.createElement('tr');
    for (let field in obj) { //val가 가진 필드 개수 만큼(fname, age, score)
        let td = document.createElement('td');
        let text = document.createTextNode(obj[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    //버튼 추가
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.innerText = '삭제';
    td.appendChild(btn);
    tr.appendChild(td);
    return tr;
}


const members = [
    {fName: '홍길동',age: 20,score: 60},
    {fName: '콩길동',age: 22,score: 50},
    {fName: '박길동',age: 33,score: 99},
    {fName: '김길동',age: 50,score: 100}

];
let table = document.createElement('table');

table.setAttribute('border', '1');c

table.appendChild(makeHead());

table.appendChild(makeBody(members));


console.log(table); //<table><thead></thead><tbody</tbody></table>
document.getElementById('show').appendChild(table);


//신규 추가... 

// let newobj = {
//     fName: '김나박이',
//     age: 69,
//     score: 80
// };
// let newTr = makeRow(newobj);
// document.getElementsByTagName('tbody')[0].appendChild(newTr);


let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let score = document.getElementById('score').value;


    let newobj = {fName: name,age: age,score: score};
    let newTr = makeRow(newobj);
    document.getElementsByTagName('tbody')[0].appendChild(newTr);

    // 값을 초기화
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('score').value = '';
    document.getElementById('name').focus(); //element에 포커스를 맞춘다
});