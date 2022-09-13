`use strict`;
let selector;
let increaseTag = 0;
let increaseText = 0;
const searchBar = document.querySelector(`.d-flex`);
const menuBtnContainer = document.querySelector(`.button-container`);
const lunchBtn = document.querySelector(`#lunch`);
const dinnerBtn = document.querySelector(`#dinner`);
const dessertBtn = document.querySelector(`#desserts`);
const cocktailsBtn = document.querySelector(`#cocktails`);
const wineBtn = document.querySelector(`#wine`);
const onLoadBtn = document.querySelector(`#onLoadButton`);
const newsBtn = document.querySelector(`#news-button`);
const applyBtn = document.querySelectorAll(`#apply-button`);
const accordianTag = document.querySelectorAll(`.accordian-tag`);
const accordianText = document.querySelectorAll(`.accordian-text`);
const dropItem = document.querySelectorAll(`.dropdown-item`)[2];

//
//
// remove search bar
searchBar.remove();
accordianTag.forEach(function (el) {
  el.dataset.tag = `${increaseTag}`;
  increaseTag++;
});
accordianText.forEach(function (el) {
  el.dataset.text = `${increaseText}`;
  increaseText++;
});
accordianTag.forEach(function (tag) {
  tag.addEventListener(`click`, function (e) {
    selector = e.target.dataset.tag;

    accordianText.forEach(function (text) {
      if (text.dataset.text === selector) {
        text.classList.toggle(`hidden`);
      }
    });
  });
});

if (newsBtn != null) {
  newsBtn.addEventListener(`click`, function () {
    window.location.href = `news.html`;
  });
}

if (onLoadBtn != null) {
  window.onload = function () {
    onLoadBtn.click();
  };
}

if (menuBtnContainer != null) {
  lunchBtn.addEventListener(`click`, function () {
    window.location.href = `lunch.html`;
  });
  dinnerBtn.addEventListener(`click`, function () {
    window.location.href = `dinner.html`;
  });
  wineBtn.addEventListener(`click`, function () {
    window.location.href = `wine.html`;
  });
  cocktailsBtn.addEventListener(`click`, function () {
    window.location.href = `cocktails.html`;
  });
  dessertBtn.addEventListener(`click`, function () {
    window.location.href = `desserts.html`;
  });
}
if (applyBtn != null) {
  applyBtn.forEach(function (btn) {
    btn.addEventListener(`click`, function (e) {
      window.location.href = `apply.html`;
    });
  });
}

// REPLACING SITEMAP WITH CAREERS
dropItem.textContent = `Careers`;
dropItem.href = `careers.html`;
