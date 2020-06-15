var smallMap = document.querySelector('.small-map');
var largeMap = document.querySelector('.large-map');
var closeMap = document.querySelector('.pop-close.map');


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


var feedbackForm = document.querySelector('.feedback-form');
var sendMail = document.querySelector('.mail');
var closeMail = document.querySelector('.pop-close.no-mail');
var userName = document.querySelector('#pop-user-name');
var userEmail = document.querySelector('#pop-user-email');
var message = document.querySelector('#pop-user-message');
var form = document.querySelector('.write-us');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

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