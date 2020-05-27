let tabs = document.querySelectorAll('.tabs-item')

for (tab of tabs) {
    tab.onclick = function () {
    tab.classList.toggle('active');
    }
}