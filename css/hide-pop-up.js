let smallMap = document.querySelector('.small-map');
let largeMap = document.querySelector('.large-map');
let close = document.querySelector('.pop-close');

smallMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    largeMap.classList.remove('hide');
  });


close.addEventListener('click', function (evt) {
    evt.preventDefault();
    largeMap.classList.remove('appear');
  });