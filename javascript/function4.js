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

// for(let i=0;i<10;i++){
// var tmp = Math.floor((Math.random() * 10));
// // floor 소수첫재부터 쭉 버리고 정수부만 가져옴
// console.log(`tmp의 값 : ${tmp}`);
// }