// calendar.js
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
document.write(`<div class="container">`);
    for (let day of days) {
        document.write(`<div class="days">${day}</div>`);
    }
document.write(`</br>`);

// 밀어버리기 (실제달력화)
for(let i=0;i<6;i++){
    document.write(`<div class="day">&nbsp;</div>`);
}


    for (let i = 1; i <= 31; i++) {
        document.write(`<div class="day">${i}</div>`);
        if ((i+6) % 7 == 0) {
            document.write(`<br/>`);
        }
    }
document.write(`</div>`);