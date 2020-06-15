let leftArrow = document.querySelector('.arrow-left');
let rightArrow = document.querySelector('.arrow-right');
let hammerdrill = document.getElementById('btn-1');
let drill = document.getElementById('btn-2');


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