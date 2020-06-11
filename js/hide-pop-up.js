let smallMap = document.querySelector('.small-map');
let largeMap = document.querySelector('.large-map');
let closeMap = document.querySelector('.pop-close.map');


smallMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    largeMap.classList.toggle('hide');
});


closeMap.addEventListener('click', function (evt) {
    evt.preventDefault();
    largeMap.classList.toggle('hide');
});


window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (!largeMap.classList.contains('hide')) {
        evt.preventDefault();
        largeMap.classList.add('hide');
      }
    }
  });


let feedbackForm = document.querySelector('.feedback-form');
let sendMail = document.querySelector('.mail');
let closeMail = document.querySelector('.pop-close.no-mail');
let userName = document.querySelector('#pop-user-name');
let userEmail = document.querySelector('#pop-user-email');
let message = document.querySelector('#pop-user-message');
let form = document.querySelector('.write-us');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
    storageName = localStorage.getItem('user');
    storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}


sendMail.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackForm.classList.toggle('hide');
    if (storageName && storageEmail) {
        userName.value = storageName;
        userEmail.value = storageEmail;
        message.focus();
    } else {
        userName.focus();
    }
});


form.addEventListener('submit', function (evt) {
    if (!userName.value || !userEmail.value || !message.value) {
        evt.preventDefault();
        feedbackForm.classList.remove('pop-error');
        feedbackForm.offsetWidth = feedbackForm.offsetWidth;
        feedbackForm.classList.add('pop-error');
    } else {
        if (isStorageSupport) {
        localStorage.setItem('user', userName.value);
        localStorage.setItem('email', userEmail.value);
        }
    }
});


closeMail.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedbackForm.classList.toggle('hide');
    feedbackForm.classList.remove('pop-error');
});


window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (!feedbackForm.classList.contains('hide')) {
        evt.preventDefault();
        feedbackForm.classList.add('hide');
        feedbackForm.classList.remove('pop-error');
      }
    }
  });