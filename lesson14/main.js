"use strict";
const wrapper = document.getElementById("js-wrapper");
const ul = document.getElementById("js-ul");
const modalBtn = document.getElementById("js-modalBtn");
modalBtn.classList.add("btn");
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

modalBtn.addEventListener("click", () => {
   const inputNumber = document.getElementById("js-number");
   if (!inputNumber.value === false) {
      console.log(inputNumber.value);
      init();
   } else {
      alert("数字が未入力です。");
   }
});

async function init() {
   modalBtn.remove();
   removeModal();
   startLoading();
   try {
      const result = await fetchData();
      createListElements(result);
   } catch (e) {
      const div = document.createElement("div");
      lists.appendChild(div);
      div.textContent = ` エラーが発生しました：${e}`;
      console.log(e);
   } finally {
      endLoading();
      openModalBtn.remove();
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
      const text = document.createTextNode(data[i].text);
      anchor.href = `/${data[i].a}.html`;
      image.alt = data[i].alt;
      image.src = data[i].img;
      anchor.appendChild(text);
      anchor.appendChild(image);
      li.appendChild(anchor);
      fragment.appendChild(li);
   }
   ul.appendChild(fragment);
};
