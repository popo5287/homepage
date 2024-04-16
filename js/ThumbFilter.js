document.addEventListener("DOMContentLoaded", function () {
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
    document.getElementById("all").addEventListener("click", function (event) {
        event.preventDefault();
        filterCategory("all");
    });
  
    document.getElementById("ui").addEventListener("click", function (event) {
        event.preventDefault();
        filterCategory("ui");
    });
  
    document.getElementById("brand").addEventListener("click", function (event) {
        event.preventDefault();
        filterCategory("brand");
    });
  
    document.getElementById("promotion").addEventListener("click", function (event) {
        event.preventDefault();
        filterCategory("promotion");
    });
  
    document.getElementById("event").addEventListener("click", function (event) {
        event.preventDefault();
        filterCategory("event");
    });
  });
  