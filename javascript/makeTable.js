// makeTable.js ES6
var members = ["이효림", "장예빈", "윤희철", "이웅재"];

var table = '<table border="1" align="center">';
table += '<thead>';
table += '<tr>';
table += '<th>순번</th>';
table += '<th>이름</th>';
table += '<th>버튼</th>';
table += '</tr>';
table += '</thead>';



table += '<tbody>';
// for (let i = 0; i < members.length; i++) {
//     table += '<tr>';
//     table += '<td>' + (i + 1);
//     table += '</td>';
//     table += '<td>' + members[i];
//     table += '</td>';
//     table += '</tr>';
// }
var cnt = 0;
for (let member of members) {
    if(cnt%2==0){
        table+='<tr>'
    }
    else{
        table+='<tr style="background-color: yellow;">'
    }
    // console.log(typeof cnt);
    // table += '<tr>';
    table += `<td> ${(++cnt)} </td>`;
    
    table += `<td> ${member} </td>`;
   
    table += `<td><button>Delete</button></td>`
    table += `</tr>`;
    
}

table += '</tbody>';
table += '</table>';



console.log(table);
// 콘솔부에서 내용이 출력
document.write(table);
// 브라우저 화면(document)에서 출력


