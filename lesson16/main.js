"use strict";
const body = document.getElementById("body");
const categoryTab = document.getElementById("js-categoryTab");
const jsonURL = "http://myjson.dit.upm.es/api/bins/bmhb";//default表示のデータを入れたjson
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
      convertStrToBool(values[i].defaultDisplay) && categoryTabItem.classList.add("is-active");
      const categoryTabText = createElementWithClassName("a", "category-tab__text");
      categoryTabText.textContent = values[i].category
      fragment.appendChild(categoryTabItem).appendChild(categoryTabText);
   }
   categoryTab.appendChild(fragment);
   //初期表示のタブの選択はデータとして持っているがまだ理解できていないので、現段階ではNewsのタブとしてある
   // const newsTabItem = document.getElementById("js-categoryTabItem0");
   // newsTabItem.classList.add("is-active");
   return fragment;
}
//string から booleanに型変換
function convertStrToBool(str) {
   if(typeof str != 'string') {
      return Boolean(str)
   }
   try {
      const obj = JSON.parse(str.toLowerCase());
      return obj === true;
   } catch(e) {
      return str != '';
   }
} 

const renderTabContainer = (values) => {
   const tabFragment = document.createDocumentFragment();
   const tabContainer = createElementWithClassName("div", "tab-container");
   tabContainer.id = "js-tabContainer";
   for (let i = 0; i < values.length; i++) {
      const tabContents = createElementWithClassName("div", "tab-contents");
      tabContents.id = `js-tabContents${i}`;
      const tabLists = createElementWithClassName("ul", "tab-contents__lists");
      const tabImage = createElementWithClassName("img", "tab-contents__image");
      tabImage.src = values[i].img;
      tabContents.appendChild(tabLists).appendChild(createArticlesTitles(values[i]));
      tabFragment.appendChild(tabContainer).appendChild(tabContents).appendChild(tabImage);
   }
   body.insertBefore(tabFragment, categoryTab.nextElementSibling);
   //TODO:どのカテゴリタブを初期表示時に選んでいるかはデータとして持っている
   //一旦、Newカテゴリーを初期表示としている
   const newsContents = document.getElementById("js-tabContents0");
   newsContents.classList.add("is-show");
}

const createArticlesTitles = ({articles}) => {
   const articlesTitlesFragment = document.createDocumentFragment();
   for (let i = 0; i < articles.length; i++) {
      const tabItems = createElementWithClassName("li", "lists__item");
      const tabItemsHref = createElementWithClassName("a", "lists__item__text");
      tabItemsHref.textContent = articles[i].title;
      tabItemsHref.href = articles[i].href;
      articlesTitlesFragment.appendChild(tabItems).appendChild(tabItemsHref);
   }
   return articlesTitlesFragment;
}

   categoryTab.addEventListener("click", (e) => {
      const activeTab = document.querySelector(".is-active");
      const showContents = document.querySelector(".is-show");
      activeTab.classList.remove("is-active");
      e.target.classList.add("is-active");
      const arrayCategoryTab = [...document.querySelectorAll(".category-tab__item")]
      const index = arrayCategoryTab.indexOf(e.target);
      showContents.classList.remove("is-show");
      const tabContents = document.getElementsByClassName("tab-contents");
      tabContents[index].classList.add("is-show");
   });
   //以下は、現段階では未実装
   // 記事にはnewという新着かどうかのラベルがつく(どこの記事にそれが入るかは適当でいいです)
   // 記事にはそれぞれコメントがあり、0件なら表示しない、1以上ならアイコンと共に数字が表示される
// どのカテゴリタブを初期表示時に選んでいるかはデータとして持っている
