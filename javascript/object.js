// Object.js

var member1 = {
    // key value생성
    first_name:'kildong',
    last_name:'Hong',
    age:14,
    score:55,
    fullName: function(){
        // 메서드
        return this.last_name +' '+this.first_name;
    },
    isAdult: function(){
        return this.age >= 20 ? true : false;
    }
}

console.log(member1.first_name);
console.log(member1.fullName());

if(!member1.isAdult){
    console.log(`${member1.fullName()} 는 성인입니다`);

}else{
    console.log(`${member1.fullName()} 는 미성년자입니다`);

}








console.log(document.getElementById('hobby').value);
// document.getElementById('hobby').value = 'computing';
document.getElementById('add').addEventListener('click',function(){
console.log(document.getElementById('hobby').value);
var userInputValue = document.getElementById('hobby').value;
// document.write(`<h3>${userInputValue}</h3>`);
var tag = `<h3>${userInputValue}</h3>`;


});