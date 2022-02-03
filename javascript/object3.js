// object3.js

// 배열객체
let arr = new Array();
arr[0] = 1;
arr[1] = 10;
delete arr[0];
arr[0] = 123;
arr[arr.length] = 55;
arr[arr.length] = 66;
arr[arr.length] = 77;

console.log(arr);
console.log(arr.length);

let newArr = [];
// arr 과 같이 배열 생성

//push(), pop() : 마지막 위치★에 추가push ,삭제 pop
newArr.push(10);
newArr.push(101);
newArr.push(102);

newArr.pop();
// 마지막위치부터 반대순서로 하나씩 제거


// unshift() , shift() : 처음 위치에 추가unshift, 삭제shift
newArr.unshift(1010);
newArr.unshift(1012);

newArr.shift(); //첫번째 위치부터 삭제
newArr.shift();

// splice() : 요소 1을 요소 2로 변경
newArr.splice(0, 1, '100');
//          index / 바꿀요소의 개수 1개 / 대채될 요소
newArr.splice(0, 1, '10', '200');
//          대체 값 여러개 가능
newArr.splice(1, 1);
//  대채될 요소를 지정 안해주면 지정한 부분을 삭제
// 범위를0으로 두면 바로앞에 커서가 두어진다
newArr.splice(0, 0, 12, 20);

newArr.splice(2, 1, '100');
newArr.splice(2, 0, '300');
// 3번째 인덱스 부분의 앞에 '300'을 추가

console.log(newArr);
console.log(newArr.length);


let names = ['황우석', '이영식', '정영택', '홍길동'];
// 이영식 요소를 삭제.
names.splice(1, 1, '김영식');
names.splice(names.length, 0, '이웅재');
names.splice(2, 2);
console.log(names);


// concat() 배열요소 추가
let numbers = [1, 2, 3, 4];
let newNum = numbers.concat(10, 20);
console.log(newNum, typeof newNum);

console.log(newNum.indexOf(100)); //인자값이 없으면 -1 리턴

// join : 배열요소를 문자열로 연결
let newStr = newNum.join(',');
console.log(newStr, typeof newStr);

//every : 배열의 각 요소에 대해서 function 조건
let all = newNum.some(function (val, ind, arr) {
    console.log(val, ind, arr);
    return val > 2;
});
console.log(all);
// every는 모두가 만족해야 참 / some은 하나라도 만족하면 참 true or false만 리턴

console.clear();
// foreach():배열으 각 요소에 대해서 처리할 기능, 리턴타입 void, fucntion() 실행

let sum = 0;
// newNum.forEach(function(val, ind, arr) {
//     console.log(val, ind, arr);
//     sum  = sum + val;
// });
newNum.forEach(callBackSum);

function callBackSum(val, ind, arr) {
    console.log(val, ind, arr);
    sum += val;
} //위의 주석된 부분과 결과값이 같음, 매서드를 인자로 받는부분을 매서드를 생성하여 호출

console.log(`합계 : ${sum}`);
let indSum = 0;

function callBackSum(val, ind, arr) {
    console.log(val, ind, arr);
    if (ind % 2 == 0) {
        sum += val;
    }
    // val > value값으로 지정하면 값이 짝수인것만 합
    // ind > index 순번이 짝수인것만 합

}
console.clear();
// filter():function을 만족하는 값으로 새로운 배열 생성
let over10 = newNum.filter(function (val, ind, arr) {
    console.log(val, ind, arr);
    return val >= 10;
});
console.log(over10);
names = ['user1', 'user2', 'test1', 'test2', 'admin'];

let userNames = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].indexOf('user') != -1) {
        userNames.push(names[i]);
    }
}
console.log(names);
console.log(userNames);

userNames = [];
for (let name of names) {
    if (names.indexOf('user') != -1) {
        userNames.push(name);
    }
}
console.log(userNames);
userNames = [];
names.forEach(function (val, ind, arr) {
    if (val.indexOf('user') != -1) {
        userNames.push(val);
    }
});
console.log(userNames);

userNames = names.filter(function (val) { //val만 가져와서 그 인덱스번째의 값에 대해 참이면 리턴
    return val.indexOf('user') != -1;
});
console.log(userNames);

userNames = names.filter(function (val) {
    return val.includes('user');
});
console.log(userNames);
userNames = names.filter(val => val.includes('user')); //val값에 대하여 우측값을 리턴(조건부가 있으면 그에 만족하는 값을 리턴)
console.log(userNames);

console.clear();

// arrow function
// 매소드의 매개값으로 활용
// 매개값을 초기설정하여사용
function oper(first = 0, last = 0, operFnc) {
    return operFnc(first, last);
}

function sum1(a, b) {
    // 두수를 더하는 function
    return a + b;
}

let result = oper(10, 20, sum1);
console.log(result);

function multi(a, b) {
    // 두수를 곱하는 function
    return a * b;
}

result = oper(10, 20, multi);
console.log(result);

result = oper(10, 20, function (a, b) {
    return a / b;
});
console.log(result);

result = oper(10, 20, (a, b) => a - b);
console.log(result);

// sort() : 정렬;
// 기본적으로는 가나다 정렬
let numbers1 = [1, 5, 2, 6, 7, 11];
numbers1.sort(function (front, back) {
    let diff = front - back;
    return diff; //음수값이면 오름차순 , 양수값이면 내림차순
});
numbers1.reverse(); //위쪽에 정렬을 마치고 다시 역정렬하면 오름차순정렬
console.log(numbers1);

let fruits = ['cherry', 'coconut', 'hello', 'banana', 'bongo', 'apple'];
fruits.sort();
console.log(fruits);


let sortNum = [1, 3, 2, 8, 4];
for (let j = 0; j < sortNum.length - 1; j++) {
    for (let i = 0; i < sortNum.length - 1; i++) {
        if (sortNum[i] > sortNum[i + 1]) {
            let temp = sortNum[i + 1];
            sortNum[i + 1] = sortNum[i];
            sortNum[i] = temp;
        }
    }
}
console.log(sortNum);