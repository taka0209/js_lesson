'use strict';
   const data =[
      {
         to: "bookmark.html",
         img: "1.png",
         alt:"画像1",
         text: "ブックマーク"
      }, 
      {
         to: "message.html",
         img: "2.png",
         alt:"画像2",
         text: "メッセージ"
      },
   ]
   
   const menuList = new Promise(function (resolve, reject){
      setTimeout(() => {
         resolve (data);
      }, 3000)
   });
   
   menuList.then(function(data){
      const fragment = document.createDocumentFragment();
      const lists = document.getElementById('lists');
      
         for (let i = 0; i < data.length; i++) {
            const li = document.createElement('li');
            const anchor = document.createElement('a');
            const image = document.createElement('img');
            const text = document.createTextNode(data[i].text);
            // anchor.href = '/' + data[i].to;
            anchor.href = `/${data[i].to}`;
            image.img = data[i].img;
            image.alt = data[i].alt;
            anchor.appendChild(image);
            anchor.appendChild(text);
            li.appendChild(anchor);
            fragment.appendChild(li);
         }
         lists.appendChild(fragment);
   })
