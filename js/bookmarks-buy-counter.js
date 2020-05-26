let bookmarks = document.querySelectorAll('.bookmark');
let bookmarkNumber = document.querySelector('.bookmark-clicks');
let bookmarkCounter = 0;


for (bookmark of bookmarks) {
    bookmark.onclick = function () {
    bookmarkCounter++;
    bookmarkNumber.textContent = bookmarkCounter;
}
}

let buys = document.querySelectorAll('.buy');
let buyNumber = document.querySelector('.buy-clicks');
let buyCounter = 0;
let cart = document.querySelector('.cart');


for (buy of buys) {
    buy.onclick = function () {
    buyCounter++;
    buyNumber.textContent = buyCounter;
    cart.style.backgroundColor = '#ee3643';
}
}


