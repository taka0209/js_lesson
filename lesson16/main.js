"use strict";
const categoryTab = document.getElementById("js-categoryTab");

const jsonURL = "http://myjson.dit.upm.es/api/bins/du3p";
// const jsonURL = "https://myjson.dit.upm.es/api/bins/gdod";　データが空のjson
async function fetchData(url) {
   const response = await fetch(url);
   const json = await response.json();
   return json.data;
}

const createElementWithClassName = (element, name) => {
   const createElement = document.createElement(element);
   createElement.classList.add(name);
   return createElement;
};

const displayMessage = (message) => {
   const div = document.createElement("div");
   body.appendChild(div);
   div.textContent = message;
}

const startLoading = () => {
   const loadingIcon = document.createElement("img");
   loadingIcon.id = "loadingIcon";
   loadingIcon.src = "img/loading-circle.gif";
   body.appendChild(loadingIcon);
};

const endLoading = () => {
   const loadingIcon = document.getElementById("loadingIcon");
   loadingIcon.remove();
}

createTabContents();
async function createTabContents() {
   startLoading();
   let responseData;
   try {
      responseData = await fetchData(jsonURL);
      console.log(responseData);
      if(responseData.length === 0) {
         displayMessage("データはまだありません");
         return;
         } 
   } catch (error) {
      displayMessage(error);
      console.log(error);
   } finally {
      endLoading();
   }
   createCategoryTab(responseData);
   renderTabContainer(responseData);
}

const createCategoryTab = (values) => {
   const fragment = document.createDocumentFragment();
   for (let i = 0; i < values.length; i++) {
      const categoryTabItem = createElementWithClassName("li", "category-tab__item")
      categoryTabItem.id = `js-categoryTabItem${i}`;
      const categoryTabText = createElementWithClassName("a", "category-tab__text");
      categoryTabText.id = `js-categoryTabText${i}`
      categoryTabText.textContent = values[i].category
      fragment.appendChild(categoryTabItem).appendChild(categoryTabText);
   }
   categoryTab.appendChild(fragment);
   //初期表示のタブの選択はデータとして持っているがまだ理解できていないので、現段階ではNewsのタブとしてある
   const newsTabItem = document.getElementById("js-categoryTabItem0");
   newsTabItem.classList.add("is-active");
}

const renderTabContainer = (values) => {
   const tabFragment = document.createDocumentFragment();
   const tabContainer = createElementWithClassName("div", "tab-container");
   tabContainer.id = "js-tabContainer";
   const articlesData = values.map((value) => value.articles);
   for (let i = 0; i < values.length; i++) {
      const tabContents = createElementWithClassName("div", "tab-contents");
      tabContents.id = `js-tabContents${i}`;
      const articlesTitles = articlesData[i].map((value) => value.title);
      const articlesHref = articlesData[i].map((value) => value.href);
      const tabLists = createElementWithClassName("ul", "tab-contents__lists");
      tabLists.id = `js-tabLists${i}`;
      const tabImage = createElementWithClassName("img", "tab-contents__image");
      tabImage.id = `js-tabImage${i}`;
      tabImage.src = values[i].img;
      console.log(values);
      console.log(articlesTitles);
      tabContents.appendChild(tabImage);
      for (let j = 0; j < articlesTitles.length; j++) {
         const tabItems = createElementWithClassName("li", "lists__item");
         const tabItemsHref = createElementWithClassName("a", "lists__item__text");
         tabItemsHref.href = articlesHref[j];
         tabItemsHref.textContent = articlesTitles[j];
         tabFragment.appendChild(tabContainer).appendChild(tabContents).appendChild(tabLists).appendChild(tabItems).appendChild(tabItemsHref);
      }
   }
   body.appendChild(tabFragment);
   //TODO:どのカテゴリタブを初期表示時に選んでいるかはデータとして持っている
   //一旦、Newカテゴリーを初期表示としている
   const newsContents = document.getElementById("js-tabContents0");
   newsContents.classList.add("is-show");
}

categoryTab.addEventListener("click", (e) => {
   const activeTab = document.getElementsByClassName("is-active")[0];
   const showContents = document.getElementsByClassName("is-show")[0];
   activeTab.classList.remove("is-active");
   e.target.classList.add("is-active");
   const categoryTabItem = document.getElementsByClassName("category-tab__item");
   const arrayCategoryTab = Array.prototype.slice.call(categoryTabItem);
   console.log(arrayCategoryTab);
   const isActive = document.getElementsByClassName("is-active")[0];
   const index = arrayCategoryTab.indexOf(isActive);
   console.log(index);
   showContents.classList.remove("is-show");
   const tabContents = document.getElementsByClassName("tab-contents");
   tabContents[index].classList.add("is-show");
});

//以下は、現段階では未実装
// 記事にはnewという新着かどうかのラベルがつく(どこの記事にそれが入るかは適当でいいです)
// 記事にはそれぞれコメントがあり、0件なら表示しない、1以上ならアイコンと共に数字が表示される
// どのカテゴリタブを初期表示時に選んでいるかはデータとして持っている
