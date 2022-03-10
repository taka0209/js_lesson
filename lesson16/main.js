"use strict";
const body = document.getElementById("body");
const categoryTab = document.getElementById("js-categoryTab");
const jsonURL = "http://myjson.dit.upm.es/api/bins/bmhb";//default表示のデータを入れたjson
// const jsonURL = "https://myjson.dit.upm.es/api/bins/gdod";　データが空のjson
//jsonの中身
const testData = { 
   "data": 
   [
      {
         "category": "News",
         "img": "./img/news-image.png",
         "defaultDisplay": "true",
         "articles": 
         [
            {
               "title": "News category Headline1",
               "postTime": "2022-11-11T11:11:11",
               "href": "#",
               "comments": 
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "News category Headline2",
               "postTime": "2022-11-11T11:10:11",
               "href": "#",
               "comments": 
               [
                  // {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "News category Headline3",
               "postTime": "2022-11-11T11:09:11",
               "href": "#",
               "comments": 
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  // {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  // {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "News category Headline4",
               "postTime": "2022-11-11T11:08:11",
               "href": "#",
               "comments": 
               [
                  // {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  // {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  // {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            }
         ]
      },
      {
         "category": "Economy",
         "img": "./img/economy-image.png",
         "defaultDisplay": "false",
         "articles": 
         [
            {
               "title": "Economy category Headline1",
               "postTime": "2022-11-11T11:11:11",
               "href": "#",
               "comments": 
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "Economy category Headline2",
               "postTime": "2022-11-11T11:10:11",
               "href": "#",
               "comments":
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "Economy category Headline3",
               "postTime": "2022-11-11T11:09:11",
               "href": "#",
               "comments": 
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "Economy category Headline4",
               "postTime": "2022-11-11T11:08:11",
               "href": "#",
               "comments": 
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            }
         ]
      },
      {
         "category": "Sports",
         "img": "./img/sports-image.png",
         "defaultDisplay": "false",
         "articles": 
         [
            {
               "title": "Sports category Headline1",
               "postTime": "2022-11-11T11:11:11",
               "href": "#",
               "comments": 
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "Sports category Headline2",
               "postTime": "2022-11-11T11:10:11",
               "href": "#",
               "comments":
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "Sports category Headline3",
               "postTime": "2022-11-11T11:09:11",
               "href": "#",
               "comments": 
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            },
            {
               "title": "Sports category Headline4",
               "postTime": "2022-11-11T11:08:11",
               "href": "#",
               "comments": 
               [
                  {"id" : "1", "name": "taro", "postTime": "2022-11-11T11:12:11", "text": "What's a Big news!!"},
                  {"id" : "2", "name": "hanako", "postTime": "2022-11-11T11:13:11", "text": "I was surprised!"},
                  {"id" : "3", "name": "jiro", "postTime": "2022-11-11T11:14:11", "text": "..."}
               ]
            }
         ]
      }
   ]
}
console.log(testData.data);

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

async function createTabContents() {
   startLoading();
   let responseData;
   try {
      // responseData = await fetchData(jsonURL); //myjsonサイトが不具合が起きているのでベタがきデータを使用
      responseData = testData.data;
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
      const commentsLength = articles[i].comments.length;
      commentsLength > 0 && tabItems.appendChild(createCommentsIcon(articles[i]));
   }
   return articlesTitlesFragment;
}

const createCommentsIcon = (articlesData) => {
      const commentsIcon = createElementWithClassName("span", "lists__comments");
      const commentsIconImage = createElementWithClassName("img", "comments__image");
      const commentsNumber = createElementWithClassName("span", "comments__number");
      const commentsLength = articlesData.comments.length;
      commentsIconImage.src = "./img/comments-icon.svg";
      commentsNumber.textContent = commentsLength;
      commentsIcon.appendChild(commentsIconImage);
      commentsIcon.appendChild(commentsNumber);
      return commentsIcon
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
   createTabContents();
   //以下は、現段階では未実装
   // 記事にはnewという新着かどうかのラベルがつく(どこの記事にそれが入るかは適当でいいです)

