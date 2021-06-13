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
   
   const promise1 = new Promise(function (resolve, reject){
      resolve (data);
   });
   // console.log(promise1);
   //PromiseStateにresolve と出るかと思ったのですが、fulfilledとなりました。課題の答えとして、これで正しいのかわかりませんでした。
   
   promise1.then(function(data){
      const fragment = document.createDocumentFragment();
      const lists = document.getElementById('lists');
      
      for (let i = 0; i < data.length; i++) {
         const li = document.createElement('li');
         const anchor = document.createElement('a');
         const image = document.createElement('img');
         const text = document.createTextNode(data[i].text);
         anchor.href = '/' + data[i].to;
         image.img = data[i].img;
         image.alt = data[i].alt;
         anchor.appendChild(image);
         anchor.appendChild(text);
         li.appendChild(anchor);
         fragment.appendChild(li);
      }
   
      lists.appendChild(fragment);
   
   })


