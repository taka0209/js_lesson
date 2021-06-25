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

//loading iconを表示するfunction
(function () {
   const loadingIcon = document.createElement("img");
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
})();

//DOMを構築するfunction
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
   //普通は通信の成功の正否を判定する条件が入るのか？
   setTimeout(() => {
      if (false) {
         resolve(data);
      } else {
         reject();
      }
   }, 3000);
});

 //値を受ける
menuList
   .then((data) => {
      wrapper.remove(); //loading iconを非表示にする
      createListElements();
   })
   .catch(() => {
      console.error("エラー！");
   });
