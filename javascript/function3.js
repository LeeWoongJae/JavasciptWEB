
let member1 = {
    mem_id:1001,
    first_name: 'JunWoo',
    last_name: 'jo',
    math_score: 80,
    eng_score: 29
}
let member2 = {
    mem_id:1002,
    first_name: 'hongjae',
    last_name: 'lee',
    math_score: 90,
    eng_score: 20
}
let member3 = {
    mem_id:1003,
    first_name: 'eekyung',
    last_name: 'park',
    math_score: 70,
    eng_score: 45
}

let members = [member1, member2, member3];

function makeTr(member){
    // member_id,first_name,last_name,math_score,eng_score;
    var trTag=`<tr>`;
    trTag+=`<td>${member.mem_id}</td><td>${member.last_name}${member.first_name}</td><td>${member.eng_score}</td><td>${member.math_score}</td>`;
    trTag+=`<td><button>Delete</button></td>`;
    trTag+=`</tr>`;

    return trTag;
}


var str=`<table border="1">`;
str+=`<thead><tr><th>학번</th><th>이름</th><th>영어</th><th>수학</th><th>기능</th></tr></thead>`;
str+=`<tbody>`;
// for(let member of members){
//     // str+=makeTr(member);
//     document.write(makeTr(member));
// }
for(let i=0;i<members.length;i++){
    str+=makeTr(members[i]);//member[index]번째 member를 호출하여 넘겨
}
// document.write(`</tbody>`);
// document.write(`</table>`);
str+=`</tbody>`;
str+=`</table>`;
document.write(str);