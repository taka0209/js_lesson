'use strict';
   const data = [
      {
         href: 'a1.html', 
         src: '/img/bookmark.png', 
         text:'a1',
      },
      {
         href: 'a2.html', 
         src: '/img/bookmark.png', 
         text:'a2',
      },
   ];
   
   const fragment = document.createDocumentFragment();
   const lists = document.getElementById('lists');

   for (let i = 0; i < data.length; i++) {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      const image = document.createElement('img');
      const text = document.createTextNode(data[i].text);
      anchor.href = data[i].href;
      image.src = data[i].src;
      // anchor.setAttribute('href', data[i].href);
      // image.setAttribute('src', data[i].src);
      anchor.appendChild(image);
      anchor.appendChild(text);
      image.after(text);
      li.appendChild(anchor);
      fragment.appendChild(li);
   }

   lists.appendChild(fragment);
   

