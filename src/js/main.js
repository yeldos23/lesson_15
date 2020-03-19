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

  var top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > top_show) $('.scroll-up ').fadeIn();
    else $('.scroll-up ').fadeOut();
  });
  $('.scroll-up ').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });

});



