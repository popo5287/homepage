
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.thumbs__item a'); // 모든 링크 선택
    const isMobile = window.innerWidth <= 768; // 모바일로 간주할 화면 폭

    links.forEach(link => {
      if (isMobile) {
        // 모바일 환경이라면 data-href-mobile의 값으로 href 변경
        link.href = link.dataset.hrefMobile;
      }
    });
  });

