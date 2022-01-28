//  function5.js

// 1~10 까지 임의수룰 생성 SUM_2 : 2의배수 sum_3 :3의배수 sum_6 : 6의배수 sum_etc:나머지값
// 각각 담아 넣는다 
var sum_2 = 0,
    sum_3 = 0,
    sum_6 = 0,
    sum_etc = 0;
var sumTotal = 0;
while (true) {

    var temp = Math.floor(Math.random() * 10) + 1;
    console.log(`현재 난수는 : ${temp}`);


    if (temp == 2) {
        sum_2 = temp;
    } else if (temp == 3) {
        sum_3 = temp;
    } else if (temp == 6) {
        sum_6 = temp;
    } else if (temp % 2 == 0) {
        sum_2 = temp;
    } else if (temp % 3 == 0) {
        sum_3 = temp;
    } else if (temp % 6 == 0) {
        sum_6 = temp;
    } else {
        sum_etc = temp;
    }
    sumTotal += (sum_2 + sum_3 + sum_6 + sum_etc);
    console.log(`sumTotal의 값 : ${sumTotal}`);
    
    if (sumTotal >= 100) {
        break;
    }
}
console.log(`2의 배수는 : ${sum_2}`);
console.log(`3의 배수는 : ${sum_3}`);
console.log(`6의 배수는 : ${sum_6}`);
console.log(`그 외의 값은 : ${sum_etc}`);