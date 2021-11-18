'use strict';

const body = document.getElementById("body");
const wrapper = document.createElement("div");
body.appendChild(wrapper);
const startLoading = () => {
   const loadingIcon = document.createElement("img");
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
};
const endLoading = () => wrapper.remove();
const jsonURL = "https://jsondata.okiba.me/v1/json/KKl45211103113313";

async function fetchData() {
   try {
      const response = await fetch(jsonURL);
      const json = await response.json();
      return json.data;
   } catch(error) {
      throw new Error(`データの取得に失敗しました：${error}`);
   } finally {
      console.log('処理が終了しました。');
   }
}

async function init() {
   startLoading();
   try {
      const result = await fetchData();
      createListElements(result);
   } catch(e) {
      console.log('データが取得できませんでした');
      console.error(e);
   }
   endLoading();
};

const createListElements = (data) => {
   const fragment = document.createDocumentFragment();
   const lists = document.getElementById("lists");
   for (let i = 0; i < data.length; i++){
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      const image = document.createElement("img");
      const text = document.createTextNode(data[i].text);
      anchor.href = `/${data[i].a}.html`;
      image.alt = data[i].alt;
      image.src = data[i].img;
      anchor.appendChild(text);
      anchor.appendChild(image);
      li.appendChild(anchor);
      fragment.appendChild(li);
   }
   lists.appendChild(fragment);
};

init();
