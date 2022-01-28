// 생성자 : Object를 만드는 방식
function Member(first_name, last_name, age, score) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.score = score;
    this.fullName = function () {
            return this.last_name + ' ' + this.first_name;
        },
        this.isAdult = function () {
            return this.age >= 20 ? true : false;
        }
}
var member1 = new Member('길동', '홍', 18, 77);
var member2 = new Member('익수', '광', 25, 60);
var member3 = new Member('chanHO', 'Park', 44, 70);
var members = [member1, member2, member3, new Member('chanHO', 'choi', 19, 60)];

console.log(member1.first_name, member1.last_name, member1.fullName());



var table = '<table border="1" align="center">';
table += '<thead>';
table += '<tr>';
table += '<th>이름(홍 길동)</th>';
table += '<th>나이</th>';
table += '<th>점수</th>';
table += '<th>성인/청소년</th>';

table += '</tr>';
table += '</thead>';



table += '<tbody>';
var cnt = 0;
for (let member of members) {

    table += '<tr>';

    // table += `<td>${member['last_name']} ${member.first_name}</td>`;
    table += `<td>${member.fullName()}</td>`;

    table += `<td>${member['age']}</td>`;
    table += `<td>${member.score}</td>`;
    table += `<td>${member.isAdult() ? '성인' : '청소년'}</td>`;
    table += `</tr>`;

}

table += '</tbody>';
table += '</table>';
console.log(table);
document.write(table);