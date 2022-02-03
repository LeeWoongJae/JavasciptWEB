// object4.js

let today = new Date();

today.setDate(4);
today.setMonth(4);//0~11까지

console.log(today.toDateString());
console.log(today.toTimeString());

console.log(today.getDate());


function printNow(){
    let today = new Date();
    let year  = today.getFullYear();
    let month = today.getMonth()+1;
    let date = today.getDate();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    let sec = today.getSeconds();
    let ampm = hour >= 12? 'PM' : 'AM';

    let now = `${year}년 ${month}월 ${date}일 ${hour}시 ${minutes}분 ${sec}초 ${ampm}`;
    // document.write(now);
    console.log(now);
}
printNow();
setInterval(function(){
    printNow();
}, 3000);//3초마다 갱신하여 갱신한 값들을 출력