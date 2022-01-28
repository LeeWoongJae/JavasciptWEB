// function4.js
var sum = 0;


for (let i = 0; i < 10; i++) {
    sum += i;
}
console.log(`sum의 값 : ${sum}`);

console.clear();
var cnt = 0;
var isBool = false;
while (isBool) {
    if (Math.floor((Math.random() * 6)) == 4) {
        // break;
        isBool = false;
    }else{
        isBool=true;
    }
    console.log(cnt);
    cnt++;

}
console.log(`마지막 수 : ${cnt}`);

console.clear();

isBool = false;
do {
    if (Math.floor((Math.random() * 6)) == 4) {
        // break;
        isBool = false;
    } else{
        isBool = true;
    }
    console.log(cnt);
    cnt++;
}while(isBool);
console.log(`마지막 수 : ${cnt}`);



for(let i=0;i<10;i++){
var tmp = Math.floor((Math.random() * 10));
// floor 소수첫재부터 쭉 버리고 정수부만 가져옴
console.log(`tmp의 값 : ${tmp}`);
}



/*while 구문으로 구현시도 > 난수 1부터 10 까지를 생성 
임의값이 5가 될떄까지 sum의 값을 누적
*/

console.clear();

sum = 0;
while (true) {
    var temp = Math.floor(Math.random() * 10) + 1;
    sum += temp;
    console.log(temp);
    if (temp == 5) {break;}
}
console.log(`sum의 최종값 : ${sum}`);



console.clear();
sum = 0;
while (true) {
    var inputValue = prompt('이름을 입력해주세요 끝내려면 0을 입력하세요');
    sum += parseInt(inputValue);
    if (inputValue == 0) {break;}
}
console.log(`sum의 최종값 : ${sum}`);
