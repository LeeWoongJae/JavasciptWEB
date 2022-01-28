//function2.js

function makeTr(index,name){
    var trTag=`<tr>`;
    trTag+=`<td>${++index}</td><td>${name}</td><td><button>Delete</button></tr>`;

    return trTag;
}


var members = ["이웅재", "윤희철", "이효림", "장예빈"];




var str = `<table border="1">`;
str+=`<thead><tr><th>순번</th><th>이름</th><th>기능</th></tr></thead>`;
str+=`<tbody>`;
for(let i=0;i<members.length;i++){
    str+=makeTr(i,members[i]);
}
str+=`</tbody>`;
str+=`</table>`;
document.write(str);
