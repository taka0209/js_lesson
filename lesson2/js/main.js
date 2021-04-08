'use strict';

const list = document.getElementById('list');
const li = document.createElement('li');
const anchor = document.createElement('a');
anchor.href = '1.html';
const image = document.createElement('img');
image.src = 'bookmark.png';
image.alt = 'ブックマーク';
anchor.textContent = 'これです'
list.appendChild(li);
li.appendChild(anchor);
anchor.insertBefore(image, anchor.firstChild);
