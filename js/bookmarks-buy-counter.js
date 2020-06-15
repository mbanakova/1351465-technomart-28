var bookmarks = document.querySelectorAll('.bookmark');
var bookmarkNumber = document.querySelector('.bookmark-clicks');
var bookmarkCounter = 0;
var bookmarkTop = document.querySelector('.bookmarks');


for (var bookmark of bookmarks) {
    bookmark.onclick = function () {
    bookmarkCounter++;
    bookmarkNumber.textContent = bookmarkCounter;
    bookmarkTop.style.backgroundColor = '#ee3643';
}
}

var buys = document.querySelectorAll('.buy');
var buyNumber = document.querySelector('.buy-clicks');
var buyCounter = 0;
var cartTop = document.querySelector('.cart');

var cartPop = document.querySelector('.in-cart');
var closeCart = document.querySelector('.pop-close.pop-cart');
var keepShopping = document.querySelector('.keep-shopping');


for (var buy of buys) {
    buy.onclick = function () {
    buyCounter++;
    buyNumber.textContent = buyCounter;
    cartTop.style.backgroundColor = '#ee3643';
    cartPop.classList.remove('hide');
}
}

closeCart.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPop.classList.toggle('hide');
});

keepShopping.addEventListener('click', function (evt) {
    evt.preventDefault();
    cartPop.classList.toggle('hide');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (!cartPop.classList.contains('hide')) {
        evt.preventDefault();
        cartPop.classList.add('hide');
      }
    }
  });