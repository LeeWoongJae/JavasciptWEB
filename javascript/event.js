// event.js

// // document.write('<h1 onclick="h1Click(event)">Hello World</h1>');
// document.write('<p>notice</p>');

// function h1Click(e) {
//     console.log('h1Click');
//     // console.log(e.target.remove());
// }
function turnOnFunc() {
    var img = document.getElementsByTagName('img');
    // HTML Collection > 배열처럼 여러요소가 존재.
    console.log(img[0].src = "http://www.w3schools.com/js/pic_bulbon.gif"); //0~n 까지 index 지정
}

function turnOffFunc() {
    var img = document.getElementsByTagName('img');
    // HTML Collection > 배열처럼 여러요소가 존재.
    console.log(img[0].src = "http://www.w3schools.com/js/pic_bulboff.gif"); //0~n 까지 index 지정
}
var btns = document.getElementsByTagName('button');
console.log(btns);
btns[0].onmouseover = turnOnFunc;
btns[1].onclick = turnOffFunc;

// 주의 펑션표기 () 를 쓰지 않도록


var colorBtns = document.getElementsByClassName('color');
// class이름이 color라고 되어있는 것들을 전부 불러들임
console.log(colorBtns.length);
for (let i = 0; i < colorBtns.length; i++) {
    // 첫번째 방법. colorBtns[i].onclick = changeColorFunc;  하단의 function changeColorFunc()까지 포함
    // 두번째 방법. console.log(colorBtns);
    // colorBtns[i].onclick = function (event) {
    //     var show = document.getElementById('show');
    //     show.style.backgroundColor = event.target.innerText;
    //     // yellow~orange까지 배경색으로써 수정된다    
    // };까지 두번째방법
    colorBtns[i].addEventListener('click',changeColorFunc);//세번째 방법.
}
// 새로운 요소가 생성이되면 해당요소에 이벤트 등록
// colorBtns[6].addEventListener('click',changeColorFunc);

function changeColorFunc(event) {
    console.log(event.target.innerText);
    var show = document.getElementById('show');

    show.style.backgroundColor = event.target.innerText;
    // yellow~orange까지 배경색으로써 수정된다

}