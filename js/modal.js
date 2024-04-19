document.addEventListener('DOMContentLoaded', function() {
  var modalTriggers = document.querySelectorAll('[data-toggle="modal"]');

  modalTriggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      event.preventDefault();
      var target = this.getAttribute('data-target');
      var modal = document.querySelector(target);
      if (modal) {
        modal.style.display = 'block';
        loadModalContent(modal); // Pass modal element to load modal content
      }
    });
  });

  // Function to load modal content dynamically
  function loadModalContent(modal) {
    var modalBody = modal.querySelector('.modal-body');
    if (modalBody) {
      var modalId = modal.getAttribute('id'); // Get modal ID
      var index = modalId.replace('modalContent', ''); // Extract index from modal ID
      var type = getTypeFromModalId(modalId); // Extract type from modal ID
      fetch(`../link/${type}_${index}.html`) // Construct link format using type and index
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
    }
  }

  // Function to extract type from modal ID
  function getTypeFromModalId(modalId) {
    var type = modalId.split('_')[0];
    return type.replace('modalContent', '');
  }

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
});
