document.addEventListener('DOMContentLoaded', function() {
  var modalTriggers = document.querySelectorAll('[data-toggle="modal"]');

  modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();
      var target = this.getAttribute('data-target');
      var modal = document.querySelector(target);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  var modalCloseButtons = document.querySelectorAll('[data-dismiss="modal"]');

  modalCloseButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      var modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  window.addEventListener('click', function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  // 이미지 클릭 시 모달 열기
  var openModalImg = document.querySelector('.thumbs__item[data-toggle="modal"]');
  var modal = document.getElementById('modalContent');
  var modalBody = document.getElementById('modalBody');
  var modalClose = document.querySelector('#modalContent .close');

  if (openModalImg && modal && modalBody && modalClose) {
    openModalImg.addEventListener('click', function() {
      modal.style.display = 'block';
      // 모달 내용 가져오기
      fetch('link/2404_event.html')
        .then(response => {
          if (!response.ok) {
            throw new Error('네트워크 오류: ' + response.status);
          }
          return response.text();
        })
        .then(data => {
          modalBody.innerHTML = data;
        })
        .catch(error => {
          console.error('모달 내용을 가져오는 동안 오류가 발생했습니다.', error);
        });
    });

    // 모달 닫기 버튼 클릭 시 모달 닫기
    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    // 모달 외부 클릭 시 모달 닫기
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  } else {
    console.error('요소들을 찾을 수 없습니다.');
  }
});
