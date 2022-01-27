// makeTable2.js
let member1 = {
    first_name: 'JunWoo',
    last_name: 'jo',
    math_score: 80,
    eng_score: 29
}
let member2 = {
    first_name: 'hongjae',
    last_name: 'lee',
    math_score: 90,
    eng_score: 20
}
let member3 = {
    first_name: 'eekyung',
    last_name: 'park',
    math_score: 70,
    eng_score: 45
}
let members = [member1, member2, member3];
// for(let member of members){
//     document.write(member);
// }
// 두번째 맴버의 이름을 변경 : 정성훈 >> members[1]
members[1].first_name='성훈';
members[1]['last_name']='정';
console.log(`첫번째 맴버의 이름은 : ${members[0].first_name}`);
console.log(`두번쨰 맴버의 수학점수: ${members[1]['math_score']}, ${members[1]['first_name']} ${members[1]['last_name']}`);
console.log(`세번쨰 맴버의 이름과 성씨: [${members[2].first_name}] 과 [${members[2]['last_name']}]`);


var table = '<table border="1" align="center">';
table+=`<tbody>`;
table+=`</tbody>`;
// document.write(table);

document.write('<table border="1" align="center">');
document.write('<thead><tr><th>이름</th><th>수학점수</th><th>영어점수</th></tr></thead>');
document.write('<tbody>');
for(let member of members){
    console.log(member,member['first_name'],member.last_name);
    document.write('<tr>');
    document.write(`<td>${member['first_name']}-${member.last_name}</td>
                    <td>${member['eng_score']}</td>
                    <td>${member['math_score']}</td>`);
    document.write('<tr>');
}
document.write('<tbody');
document.write('<table>');

// for(let i=0;i<members.length;i++){
    
//     table+=`<tr>`;
//     table+=`<th>${members[i]['first_name']}<th>`;
//     table+=`<th>${members[i].math_score}<th>`;
//     table+=`<th>${members[i]['eng_score']}<th>`;
//     table+=`</tr>`;
// }
