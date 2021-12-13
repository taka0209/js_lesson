"use strict";
const wrapper = document.getElementById("wrapper");
const lists = document.getElementById("lists");
const createElBtn = document.getElementById("create-element-btn");
createElBtn.classList.add("btn");
const modal = document.getElementById("modal");
const displayModal = document.getElementById("display-modal");
const jsonURL = "https://myjson.dit.upm.es/api/bins/j16z";
const removeModal = () => {
  modal.remove();
  wrapper.classList.remove("bg_gray");
};

const loadingIcon = document.createElement("img");
const startLoading = () => {
   loadingIcon.id = "loadingIcon";
   loadingIcon.src = "img/loading-circle.gif";
   wrapper.appendChild(loadingIcon);
};

const endLoading = () => loadingIcon.remove();

displayModal.addEventListener("click", function () {
   modal.style.display = "block";
   wrapper.classList.add("bg_gray");
   displayModal.remove();
});

createElBtn.addEventListener("click", () => {
   const inputNumber = document.getElementById("number");
   if (!inputNumber.value === false) {
      console.log(inputNumber.value);
      init();
   } else {
      alert("数字が未入力です。");
   }
});

async function init() {
   createElBtn.remove();
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
      displayModal.remove();
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
   lists.appendChild(fragment);
};
