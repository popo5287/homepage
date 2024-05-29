document.addEventListener("DOMContentLoaded", function() {
    const darkmodeBtn = document.querySelector('.darkmode__btn');

    darkmodeBtn.addEventListener('click', () => {
        if (document.body.dataset.theme === 'dark-mode') {
            // Light mode로 변경
            darkmodeBtn.querySelector('img').src = 'imgs/icon/sun.png';
            darkmodeBtn.querySelector('img').alt = 'Light Mode Icon';
            document.body.dataset.theme = 'light-mode';
        } else {
            // Dark mode로 변경
            darkmodeBtn.querySelector('img').src = 'imgs/icon/night.png';
            darkmodeBtn.querySelector('img').alt = 'Dark Mode Icon';
            document.body.dataset.theme = 'dark-mode';
        }
    });
});



const btnHtml = document.getElementById('btnHtml');
const navWrapper = document.querySelector('.nav__wrapper');
const thumbs = document.querySelector('.thumbs');

btnHtml.addEventListener('click', function() {

    navWrapper.classList.toggle('toggle');
    thumbs.classList.toggle('toggle');

});

