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
   console.log(`ID:${inputNumber.value}`);
   console.log(`ユーザー名:${inputText.value}`);
   removeModal();
   createListView();
});

async function fetchData(url) {
   const response = await fetch(url);
   const json = await response.json();
   return json.data;
}

const displayMessage = (message) => {
   const div = document.createElement("div");
   ul.appendChild(div);
   div.textContent = message;
}

async function createListView() {
   startLoading();
   let responseData;
   try {
      responseData = await fetchData(jsonURL);
      if (responseData.length === 0) {
         displayMessage("データはまだありません");
         return;
      }
   } catch (error) {
      displayMessage(error);
      console.log(error);
   } finally {
      endLoading();
   }
   createListElements(responseData);
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
