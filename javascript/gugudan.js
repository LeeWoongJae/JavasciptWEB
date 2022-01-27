// gugudan.js
// var table=``;
// document.write(`<table>`);
// for (let i = 2; i < 10; i++) {
//     document.write(`<div>`);
//     document.write(`<p><h3>${i}단</h3></p>`);
//     for (let j = 1; j < 10; j++) {
//         document.write(`<p>${i} X ${j} = ${i*j}</p>`);
//     }
//     document.write(`</div>`);
//     // if(i%4==0){
//     //     document.write('');
//     // }
// }
// document.write('</table>');

// 반복문 : 반복문 사용
var start_num=[2,3,4,5,6,7,8,9];
var end_num=[1,2,3,4,5,6,7,8,9];
for(let num of start_num){
    document.write(`<div>`);
    document.write(`<P><h3>${num}단</h3></P>`);
    for(let num2 of end_num){
        document.write(`<p>${num} X ${num2} = ${num*num2}</p>`);
    }
    document.write(`</div>`);
}

// 좌석 배치도
// var rowNum = prompt("총 입장객 수는 몇명입니까?");
// var colNum = prompt("한줄에 몇명씩 앉을것인가요?");
// for(let i=0 ; i<rowNum;i++){
//     document.write(`<div>`);
//     document.write(`<p><h3>${i}열</h3></p>`);
//     for(let j=1;j<=colNum;j++){
//         document.write(`<p>${i}행+${j}열${i*j+j}</p>`);
//     }
}

