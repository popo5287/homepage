document.addEventListener("DOMContentLoaded", function () {
    // GIF 전환 기능 추가
    const navItems = document.querySelectorAll('.nav__item');

    navItems.forEach(item => {
        const staticGif = item.querySelector('.staticGif');
        const animatedGif = item.querySelector('.animatedGif');

        if (staticGif && animatedGif) {
            item.addEventListener('mouseover', function() {
                staticGif.classList.add('hidden');
                animatedGif.classList.remove('hidden');
            });

            item.addEventListener('mouseout', function() {
                staticGif.classList.remove('hidden');
                animatedGif.classList.add('hidden');
            });
        }
    });

    // 카테고리 필터링 함수
    function filterCategory(category) {
        const items = document.querySelectorAll(".thumbs__item");
        items.forEach(item => {
            const titleElement = item.querySelector(".thumbs__text--title");
            if (category === "all") {
                item.style.display = "block";
            } else if (category === "ui" && titleElement.textContent.toLowerCase() === "ui design") {
                item.style.display = "block";
            } else if (category === "brand" && titleElement.textContent.toLowerCase() === "브랜드") {
                item.style.display = "block";
            } else if (category === "promotion" && titleElement.textContent.toLowerCase() === "프로모션") {
                item.style.display = "block";
            } else if (category === "event" && titleElement.textContent.toLowerCase() === "이벤트") {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    // 각 버튼에 대한 이벤트 처리
    navItems.forEach(item => {
        const category = item.getAttribute("data-category");
        item.addEventListener("click", function (event) {
            event.preventDefault();
            filterCategory(category);
        });
    });
});
