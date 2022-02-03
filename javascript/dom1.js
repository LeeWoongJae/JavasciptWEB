let show = document.getElementById('show');
console.log(show);
let head = show.getElementsByTagName('h3');
console.log(head);

let pTag = document.createElement('p'); //p tag 생성
pTag.setAttribute('id', 'hello');
pTag.setAttribute('class', 'world');
let text = document.createTextNode('Hello, world');
pTag.appendChild(text); //p 태그 안에 Hello world 를 생성
console.log(pTag);
document.body.appendChild(pTag); //태그문을 html에 다시 생성, 하위요소에붙혀넣겠다

let listTag = document.createElement('li');
text = document.createTextNode('이웅재');
listTag.appendChild(text);
// list.appendChild(listTag);
document.getElementById('list').appendChild(listTag);

let listN = document.getElementById('list');
listN.childNodes[1].remove();
console.log(listN.childNodes);
listN.childNodes