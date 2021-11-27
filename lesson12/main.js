'use strict';

const body = document.getElementById("body");
const wrapper = document.createElement("div");
body.appendChild(wrapper);
const createElBtn = document.getElementById("create-element-btn");
createElBtn.classList.add("btn");
const jsonURL = "https://myjson.dit.upm.es/api/bins/j16z";

const removeBtn = () => createElBtn.remove();
const startLoading = () => {
   const loadingIcon = document.createElement("img");
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
};
const endLoading = () => wrapper.remove();

createElBtn.addEventListener('click', init);

async function init() {
   removeBtn();
   startLoading();
   try {
      const result = await fetchData();
      createListElements(result);
   } catch(e) {
      const div = document.createElement("div");
      lists.appendChild(div);
      div.textContent =` エラーが発生しました：${e}`;
      console.log(e);
   } finally {
      endLoading();
   }
};

async function fetchData() {
   try {
      const response = await fetch(jsonURL);
      const json = await response.json();
      return json.data;
   } catch(error) {
      throw new Error(error);
   }
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

