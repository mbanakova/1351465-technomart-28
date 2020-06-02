let smallMap = document.querySelector('.small-map');
let largeMap = document.querySelector('.large-map');
let closeMap = document.querySelector('.pop-close.map');


smallMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    largeMap.classList.remove('hide');
});


closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    largeMap.classList.remove('appear');
    largeMap.classList.add('hide');
});


let feedbackForm = document.querySelector('.feedback-form');
let sendMail = document.querySelector('.mail');
let closeMail = document.querySelector('.pop-close.no-mail');


sendMail.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackForm.classList.remove('hide');
});


closeMail.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackForm.classList.remove('appear');
    feedbackForm.classList.add('hide');
});