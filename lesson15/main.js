"use strict";
const wrapper = document.getElementById("js-wrapper");
const ul = document.getElementById("js-ul");
const submitBtn = document.getElementById("js-submitBtn");
const modal = document.getElementById("js-modal");
const openModalBtn = document.getElementById("js-openModalBtn");
const jsonURL = "https://myjson.dit.upm.es/api/bins/j16z";
const removeModal = () => {
   modal.remove();
   wrapper.classList.remove("bg_gray");
};

const startLoading = () => {
   const loadingIcon = document.createElement("img");
   loadingIcon.id = "loadingIcon";
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
};

const endLoading = () => {
   const loadingIcon = document.getElementById("loadingIcon");
   loadingIcon.remove();
}

openModalBtn.addEventListener("click", function () {
   modal.style.display = "block";
   wrapper.classList.add("bg_gray");
   openModalBtn.remove();
});

const isEmptyString = (value) => value === "";

submitBtn.addEventListener("click", () => {
   const inputNumber = document.getElementById("js-number");
   const inputText = document.getElementById("js-text");
   if (isEmptyString(inputNumber.value) || isEmptyString(inputText.value)) { //inputNumber.valueとinputText.valueのデータ型がStringのため
      alert("未入力です。");
      return;
   }
   console.log('ID:' + inputNumber.value);
   console.log('ユーザー名:' + inputText.value);
   init();
});

async function init() {
   removeModal();
   startLoading();
   try {
      const result = await fetchData();
      if (result.length === 0) {
      throw new Error("データが空です");
      }
      createListElements(result);
   } catch (e) {
      const div = document.createElement("div");
      ul.appendChild(div);
      div.textContent = ` エラーが発生しました：${e}`;
      console.log(e);
   } finally {
      endLoading();
   }
}

async function fetchData() {
   try {
      const response = await fetch(jsonURL);
      const json = await response.json();
      return json.data;
   } catch (error) {
      throw new Error(error);
   }
}

const createListElements = (data) => {
   const fragment = document.createDocumentFragment();
   for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");
      const anchor = document.createElement("a");
      const image = document.createElement("img");
      anchor.href = `/${data[i].a}.html`;
      anchor.textContent = data[i].text;
      image.alt = data[i].alt;
      image.src = data[i].img;
      fragment.appendChild(li).appendChild(anchor).appendChild(image);
   }
   ul.appendChild(fragment);
};
