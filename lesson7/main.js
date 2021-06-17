'use strict';
   //loading iconを表示する
   const body = document.getElementById('body');
   const loadingIcon = document.createElement('img');
   loadingIcon.src = "img/loading-circle.gif";
   body.appendChild(loadingIcon);

   //課題の配列
   const data =[
      {
         to: "bookmark.html",
         img: "1.png",
         alt:"画像1",
         text: "ブックマーク",
         src: "img/bookmark.jpeg"
      }, 
      {
         to: "message.html",
         img: "2.png",
         alt:"画像2",
         text: "メッセージ",
         src: "img/message.jpeg"
      },
   ]

   //promiseで解決された値とする
   const menuList = new Promise(function (resolve, reject){
      //3秒待機
      setTimeout(() => {
         resolve (data);
      }, 3000)
   });
   
   //解決された値を受ける
   menuList.then(function(data){
      const fragment = document.createDocumentFragment();
      const lists = document.getElementById('lists');
         data.forEach(value => {
            const li = document.createElement('li');
            const anchor = document.createElement('a');
            const image = document.createElement('img');
            const text = document.createTextNode(value.text);
            anchor.href = `/${value.to}`;
            image.alt = value.alt;
            image.src = value.src;
            anchor.appendChild(text);
            anchor.appendChild(image);
            li.appendChild(anchor);
            fragment.appendChild(li);
            loadingIcon.remove();
         });
      
         lists.appendChild(fragment);
   })

