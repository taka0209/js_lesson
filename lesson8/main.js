//課題の配列
const data = [
   {
      to: "bookmark.html",
      img: "1.png",
      alt: "画像1",
      text: "ブックマーク",
      src: "img/bookmark.jpeg"
   },
   {
      to: "message.html",
      img: "2.png",
      alt: "画像2",
      text: "メッセージ",
      src: "img/message.jpeg"
   }
];

const body = document.getElementById("body");
const wrapper = document.createElement("div");
wrapper.id = "js-loading-icon";
body.appendChild(wrapper);

 //loading iconを表示するfunction
(function () {
   const loadingIcon = document.createElement("img");
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
})();

 //promiseでrejectする
const menuList = new Promise(function (resolve, reject) {
   //3秒待機してreject
   setTimeout(() => {
      reject(data);
   }, 3000);
});
//catch節でエラーをキャッチする
menuList.catch(function (error) {
   console.log('エラー！', error);
});
