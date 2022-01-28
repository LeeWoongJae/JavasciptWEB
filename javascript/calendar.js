// calendar.js

function getMonthDay(year, month) {
    var tMonth = month - 1; //시스템상은 8이어야함으로 -1 연산 0~11까지 존재
    var today = new Date(year, tMonth, tDate); //현재 시점으로 DATE OBJECT

    return today.getDay();//월의 시작일의 요일정보를 가져오기위해

}

function getLastDate(year, month){
var lastDate = new Date(year, tMonth, tDate).getDate(); //현재 시점으로 DATE OBJECT
    return lastDate;//해당 달의 마지막날을 가져오기위해
}




var month = 1; // 보고싶은 달 지정
var year = 2022;

document.write(`<h1>${year}년 ${month}월</h1>`);

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
document.write(`<div class="container">`);

for (let day of days) { // 요일 정보를 알려주는 부분
    document.write(`<div class="days">${day}</div>`);
}
document.write(`</br>`);
var month = 1;
// 밀어버리기 (실제달력화) 요일 정보를 맞춰주기위해서
for (let i = 0; i < getMonthDay(year , month); i++) {
    document.write(`<div class="day">-</div>`);
}
// for(let i=0;i<)
// 날짜 보여주는 부분(일수)
for (let i = 1; i <= getLastDate(year , month); i++) { // 1월의 마지막날까지 스캔

    document.write(`<div class="day">${i}</div>`);
    if ((i + getMonthDay(year , month)) % 7 == 0) {
        document.write(`<br/>`);
    }
}
document.write(`</div>`);