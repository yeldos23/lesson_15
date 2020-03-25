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

  // ### ОТКРЫТЬ МОДАЛЬНОЕ ОКНО ###
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    }
  );
  // ### ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО ###
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    }
  );
  // ### ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО КЛАВИШЕЙ ESC ###
  $(document).on('keydown', function (event) {
    if (event.code == 'Escape') {
      modal.removeClass('modal--visible');
      }
    }
  );
  /*
  // ### ЗАКРЫТЬ МОДАЛЬНОЕ ОКНО КЛИКОМ ВНЕ ОКНА ###
  $(document).on('click', '.modal', function () {
      modal.removeClass('modal--visible'); 
      }
  ); */

  // ### КНОПКА НАВЕРХ ###
  var top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > top_show) $('.button__scroll-up ').fadeIn();
    else $('.button__scroll-up ').fadeOut();
  });
  $('.button__scroll-up ').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });

  // ### СЛАЙДЕР ###
  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20 );
  bullets.css('left', prev.width() + 20 );
  
  // ### АНИМАЦИИ ###
  new WOW().init();
  // ### ВАЛИДАЦИЯ ФОРМЫ ###
  $('.modal__form').validate({
    errorElement: "div", // чтобы сделать error элемент div, а не label 
    errorClass: "invalid", // чтобы сделать error элемент классом invalid
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },

      userPhone: {
        required: true,
        minlength: 17
      },
      
      userEmail: {
        required: true,
        email: true
      }
    },
    
    // Сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2-х букв",
        maxlength: "Имя не длинее 15-и букв"
      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Не меньше 10-и цифр"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email: name@domain.com"
      }
    }
  });

  $('.control__form').validate({
    errorElement: "div", // чтобы сделать error элемент div, а не label 
    errorClass: "invalid", // чтобы сделать error элемент классом invalid
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },

      userPhone: {
        required: true,
        minlength: 17
      },

      userEmail: {
        required: true,
        email: true
      }
    },

    // Сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2-х букв",
        maxlength: "Имя не длинее 15-и букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Не меньше 10-и цифр"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email: name@domain.com"
      }
    }
  });

  $('.footer__form').validate({
    errorElement: "div", // чтобы сделать error элемент div, а не label 
    errorClass: "invalid", // чтобы сделать error элемент классом invalid
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },

      userPhone: {
        required: true,
        minlength: 17
      },

      userEmail: {
        required: true,
        email: true
      }
    },

    // Сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2-х букв",
        maxlength: "Имя не длинее 15-и букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Не меньше 10-и цифр"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email: name@domain.com"
      }
    }
  });
  // ### JQUERY МАСКИ ###
  // Маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', { placeholder: "+7 (___) ___-__-__"});

  // Создаем Yandex Карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [47.244729, 39.723187],
      zoom: 17
    }, {
      searchControlProvider: 'yandex#search'
    }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Вход со двора'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/location.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

    myMap.geoObjects
      .add(myPlacemark)
  });

});



