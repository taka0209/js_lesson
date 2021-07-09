//課題の配列
const data = [
   {to: "bookmark.html", img: "1.png", alt: "画像1", text: "ブックマーク", src: "img/bookmark.jpeg"},
   {to: "message.html", img: "2.png", alt: "画像2", text: "メッセージ", src: "img/message.jpeg"}
];

const body = document.getElementById("body");
const wrapper = document.createElement("div");
wrapper.id = "loading-icon-wrapper";
body.appendChild(wrapper);

//はじめからloading iconを表示するだけなので即時関数にしている
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

function waitTime () {
   return new Promise (resolve => {
      setTimeout(() => {
         resolve(data);
      }, 3000);
   })
}

async function callCreateListElements() {
   const dataValue = await waitTime();
   wrapper.remove();
   createListElements();
}

callCreateListElements();
