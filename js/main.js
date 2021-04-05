//Lesson1 ulにli要素を追加する
const list = document.getElementById('list');
const li = document.createElement('li');
li.innerHTML = 'これです';
list.appendChild(li);
// li.textContent = 'これです';
// list.appendChild(li);
