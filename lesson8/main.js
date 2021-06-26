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
wrapper.id = "loading-icon-wrapper";
body.appendChild(wrapper);

//はじめからloading iconを表示するだけなので即時関数にした
(function () {
   const loadingIcon = document.createElement("img");
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
})();

function createListElements() {
   const fragment = document.createDocumentFragment();
   const lists = document.getElementById("lists");
   data.forEach((value) => {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      const image = document.createElement("img");
      const text = document.createTextNode(value.text);
      anchor.href = `/${value.to}`;
      image.alt = value.alt;
      image.src = value.src;
      anchor.appendChild(text);
      anchor.appendChild(image);
      li.appendChild(anchor);
      fragment.appendChild(li);
   });

   lists.appendChild(fragment);
}

 //promiseで受ける
const menuList = new Promise((resolve, reject) => {
   setTimeout(() => {
      if (false) {
         //NOTE: 課題８ではrejectを実行するため、一時的にfalseとしている
         //To Do: 後に判定を実装する
         resolve(data);
      } else {
         reject();
      }
   }, 3000);
});

menuList
   .then((data) => {
      wrapper.remove();
      createListElements();
   })
   .catch(() => {
      console.error("エラー！");
   });
