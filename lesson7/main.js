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
<<<<<<< HEAD
wrapper.id = "js-loading-icon";
body.appendChild(wrapper);

 //loading iconを表示するfunction
(function () {
   const loadingIcon = document.createElement("img");
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
})();

 //promiseで解決された値とする
const menuList = new Promise(function (resolve, reject) {
   //3秒待機してローディングアイコンを非表示にする
   setTimeout(() => {
      resolve(data);
      wrapper.remove();
=======
wrapper.setAttribute("id", "loading-icon");
body.appendChild(wrapper);

 //loading iconを表示するfunction
(function () {
   const loadingIcon = document.createElement("img");
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
 })(); 
 
 //promiseで解決された値とする
const menuList = new Promise(function (resolve, reject) {
   //3秒待機
   setTimeout(() => {
      resolve(data);
>>>>>>> db22468d3be16d14410584481d94846e464b4802
   }, 3000);
});

 //解決された値を受ける
menuList.then(function (data) {
<<<<<<< HEAD
=======
   wrapper.remove(); //loading iconを非表示にする
>>>>>>> db22468d3be16d14410584481d94846e464b4802
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
});
