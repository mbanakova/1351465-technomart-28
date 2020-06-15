var leftArrow = document.querySelector('.arrow-left');
var rightArrow = document.querySelector('.arrow-right');
var hammerdrill = document.getElementById('btn-1');
var drill = document.getElementById('btn-2');


leftArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    hammerdrill.checked = true;
    leftArrow.disabled = true;
    rightArrow.disabled = false;
});


rightArrow.addEventListener('click', function (evt) {
    evt.preventDefault();
    drill.checked = true;
    rightArrow.disabled = true;
    leftArrow.disabled = false;
});