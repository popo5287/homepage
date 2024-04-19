const darkmodeBtn = document.querySelector('.darkmode__btn');

darkmodeBtn.addEventListener('click', () => {
  // 버튼 아이콘 변경
  if (darkmodeBtn.innerHTML === "🌝") {
    darkmodeBtn.innerHTML = "🌚";
    // 테마를 dark-mode로 변경
    document.body.dataset.theme = 'dark-mode';
  } else {
    darkmodeBtn.innerHTML = "🌝";
    // 테마를 light-mode로 변경
    document.body.dataset.theme = 'light-mode';
  }
});


const btnHtml = document.getElementById('btnHtml');
const navWrapper = document.querySelector('.nav__wrapper');
const thumbs = document.querySelector('.thumbs');

btnHtml.addEventListener('click', function() {

    navWrapper.classList.toggle('toggle');
    thumbs.classList.toggle('toggle');

});

