//function.js
function addNumber(first, last){//function정의
    var sum = first + last;
    // console.log(`두수의 합 : ${sum}`);
    return sum;
}

var sum1 = addNumber(10,20);//실행문
var sum2 = addNumber(100,200);

var result = addNumber(sum1, sum2);
console.log(`최종합계는 ${result}`);


result = addNumber('Hello','World');
console.log(result);