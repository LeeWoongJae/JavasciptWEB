let numArray = new Array();
let str = new String('abra cadabra');
let num = new Number(1);

let isAdult = new Boolean(true);
let today = new Date();

//문자열관련 매소드

str = 'Hello';
console.log(str.length);
for(let i = 0;i<str.length;i++){
    console.log(str[i]);
}


// charAt(indexValue)
console.log(str.charAt(4));

for(let i=0;i<str.length;i++){
    console.log(str.charAt(i));
}
// concat()두 문자열을 연결한 값을 반환.
// 문자열 두개를 합친다 공백 포함
let newStr = str.concat(' world');
console.log(newStr);

// indexOf('찾을 문자열');
let ind = newStr.indexOf('w');
// 문자열의 index값을 리턴해준다
console.log(ind);
//값이 없으면 -1 리턴

let names = '홍길동, 김민수, 박시현, 최우진';
if(names.indexOf('김민수') > -1){
    console.log('김민수를 포함 하고 있습니다.');
}

if(names.includes('김민수')){ 
    console.log('김민수를 포함 하고 있습니다.');
    
}

//replace('찾을 문자열','바꿀문자열') let으로 새변수안에 바꾼값을 리턴
let newNames = names.replace('김민수','이웅재');
console.log(newNames);


// substring(start index , end index) index값을 지정하여 지정된 범위를 잘라온다
console.log(names.substring(5,8));
console.log(names.substring(10));



// slice(start, end)
console.log(names.slice(5,8));
console.log(names.slice(-8, -5));

let jumin ='000101-3456789';
let jumin2 = '000101-4456677';
let jumin3 = '0202043456789';

function checkGender(juminArg){
    // 8번째 값을 체크해서 3이면 남자 리턴 , 4면은 여자입니다 리턴
//    juminArg = juminArg.replace('-','') ; 하이픈을 공란으로 만들어 공통으로 계산
  
    if(juminArg.slice(-7,-6)==3){
        return '남자';
    }
    else{
        return '여자';
    }
}
console.log(checkGender(jumin));
console.log(checkGender(jumin2));
console.log(checkGender(jumin3));



