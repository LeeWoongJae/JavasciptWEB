// calendar.js
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
document.write(`<div class="container">`);
    for (let day of days) {
        document.write(`<div class="days">${day}</div>`);
    }
document.write(`</br>`);
var month = 1;
// 밀어버리기 (실제달력화)
for(let i=0;i<getMonthDay(month);i++){
    document.write(`<div class="day">-</div>`);
}
for(let i=0;i<)
// 날짜 보여주는 부분(일수)
    for (let i = 1; i <= getLastDate(month); i++) {// 1월의 마지막날까지 스캔
        
        document.write(`<div class="day">${i}</div>`);
        if ((i+getMonthDay(month)) % 7 == 0) {
            document.write(`<br/>`);
        }
    }
document.write(`</div>`);