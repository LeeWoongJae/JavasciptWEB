// object5.js

function clog(str) {
    console.log(str);
}
console.log(Math.round(.4));
clog(Math.floor(3.6));
clog(Math.ceil(3.1));
clog(Math.abs(-2));
clog(Math.cos(20));
clog(Math.pow(3, 2));

clog(Math.PI);

let numbers = [30, 26, 12, 55, 37, 92];

function getMaxValue(argsAry) {
    // argAry배열변수의 제일 큰값을 가져오는 프로그램

    // let maxValue = Math.max.apply(null,argAry);
    let maxValue = 0;
    // for (let i = 0; i < argsAry.length; i++) {
    //     if (maxValue < argsAry[i]) {
    //         maxValue = argsAry[i];
    //     }
    // }
    // });
    argsAry.forEach(function(val ,ind ,arr){
        maxValue = maxValue < val ? val : maxValue;
    });
        
    return maxValue;

}


result = getMaxValue(numbers);
console.log(`최대값은 ${result}`);

// let result = Math.max.apply(null, numbers);
// console.log(`최대값은 ${result}`);

let person = [{
    fName: 'choi',
    age: 20,
    score: 60
    }, {
    fName: 'park',
    age: 30,
    score: 57
    }, {
    fName: 'kim',
    age: 22,
    score: 90
    }];

function getMaxObject(args) {
    // score 점수가 제일 높은 학생의 정보를 출력
    // for(let i=0;i<args.length;i++){
    //     // let maxScore = 0;
    //     if(args[i].score < args[i+1].score){
            
    //     }
    // }
    // return maxScore;
    let maxScore = 0;
    args.forEach(function(val ,ind ,arr){
        maxScore = maxScore < val.score ? val.score : maxScore;
    });
        
    return maxScore;
}
result = getMaxObject(person);
console.log(`최대값은 ${result}이고 정보는 ${person['fName']}`);
