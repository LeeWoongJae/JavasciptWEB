//function.js
function addNumber(first, last) { //function정의
    var sum = first + last;
    // console.log(`두수의 합 : ${sum}`);
    return sum;
}

var sum1 = addNumber(10, 20); //실행문
var sum2 = addNumber(100, 200);

var result = addNumber(sum1, sum2);
console.log(`최종합계는 ${result}`);


result = addNumber('Hello', 'World');
console.log(result);

function getMonthDay(month) { //2022년만 가능한 달력
    // 1일의 요일정보 반환
    
    // 일:0 월:1 화2 수3 목4 금5 토:6


    var startVal = 6; //6+31 /7 나누면 나머지에대해서 다음달의 시작일을 셋팅
    var point = []; //[6 , 2, 2,...] 달의 시작되는 일의 요일을 셋팅 ex) 일요일이면 0, 토요일이면 6
    var prevVal = startVal; //전달의 시작일을 계속해서 갱신
    for(let i=0;i<12;i++){
        if(i>0){
            prevVal = (prevVal + getLastDate(i) % 7);
        }
        point[i] = prevVal;
    }
    console.log(point);
    return point[month-1];
}

    // var monthDay = 0;
    // if(month ==1){
    //     monthDay =6;
    // }else if(month==2){
    //     monthDay=2;
    // }else if(month==3){
    //     monthDay=2;
    // }else if(month=4){
    //     monthDay=5;
    // }else{
    //     monthDay=0;
    // }
    // return monthDay;






function getLastDate(month) {
    var lastDate = 31; //마지막날을 지정;
    switch (month) {


        case 2:
            lastDate = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            lastDate = 30;
            break;
        default:
            lastDate = 31;

    }
    return lastDate;
}
var month = 2;
console.log(`${month}월의 마지막 날은 ${getLastDate(month)} 입니다.`);