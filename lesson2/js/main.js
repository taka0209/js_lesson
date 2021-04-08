'use strict';

const lists = document.getElementById('lists');
const li = document.createElement('li');
const anchor = document.createElement('a');
const image = document.createElement('img');
anchor.href = '1.html';
image.src = 'bookmark.png';
image.alt = 'ブックマーク';
anchor.textContent = 'これです';
lists.appendChild(li).appendChild(anchor).insertBefore(image, anchor.firstChild);
