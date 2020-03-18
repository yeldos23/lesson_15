/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };
  const closeModal = () => {
    modal.classList.remove('modal--visible')
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('click', function(e) {
    if (e.target == modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    closeModal();
  });

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');


  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    }
  );

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    }
  );
  $(document).on('keydown', function (event) {
    if (event.code == 'Escape') {
      modal.removeClass('modal--visible');
      }
    }
  );
  $(document).on('click', '.modal', function () {
      modal.removeClass('modal--visible'); 
      }
  );



});



