let bookmarks = document.querySelectorAll('.bookmark');
let bookmarkNumber = document.querySelector('.bookmark-clicks');
let bookmarkCounter = 0;
let bookmarkTop = document.querySelector('.bookmarks');


for (bookmark of bookmarks) {
    bookmark.onclick = function () {
    bookmarkCounter++;
    bookmarkNumber.textContent = bookmarkCounter;
    bookmarkTop.style.backgroundColor = '#ee3643';
}
}

let buys = document.querySelectorAll('.buy');
let buyNumber = document.querySelector('.buy-clicks');
let buyCounter = 0;
let cartTop = document.querySelector('.cart');


for (buy of buys) {
    buy.onclick = function () {
    buyCounter++;
    buyNumber.textContent = buyCounter;
    cartTop.style.backgroundColor = '#ee3643';
}
}


