// кнопка в форме поиска
const searchForm = document.querySelector('.search-form');

searchForm.elements[0].addEventListener('focus', function () {
  searchForm.elements[1].classList.remove('hidden');
  searchForm.elements[1].addEventListener('blur', function () {
    searchForm.elements[1].classList.add('hidden');
  });
});

searchForm.addEventListener('mouseleave', function () {
  searchForm.elements[0].value = "";
  searchForm.elements[0].blur();
  searchForm.elements[1].classList.add('hidden');
});

searchForm.addEventListener('click', function () {
  searchForm.elements[0].focus();
});


// кнопка Каталог товаров
const catalogBtn = document.querySelector('.site-navigation__catalog');
const hiddenMenu = document.querySelector('.header-popup-container');

catalogBtn.addEventListener('focus', function () {
  hiddenMenu.classList.remove('hidden-container');
});

catalogBtn.addEventListener('mouseenter', function () {
  hiddenMenu.classList.remove('hidden-container');
  hiddenMenu.addEventListener('mouseleave', function () {
    this.classList.add('hidden-container');
  });
});

//переключение слайдов
const sliders = document.querySelectorAll('.promo-slide');
const slideButtons = document.querySelectorAll('.slider-navigation__button');

slideButtons.forEach(function (element) {
  element.addEventListener('click', function () {
    let dataSlide = element.getAttribute('data-slide');
    sliders.forEach(function (element) {
      if (dataSlide === element.getAttribute('data-slide')) {
        element.classList.remove('slide');
      } else {
        element.classList.add('slide');
      }
    });
  });
});

//кнопки для блока сервисов, перелкючение слайдов сервисов
const serviceSliders = document.querySelectorAll('.service-slide');
const serviceButtons = document.querySelectorAll('.button.service-button');

serviceButtons.forEach(function (element) {
  element.addEventListener('click', function () {
    let dataSlide = element.getAttribute('data-slide');
    serviceSliders.forEach(function (element) {
      if (dataSlide === element.getAttribute('data-slide')) {
        element.classList.remove('slide-hidden');
      } else {
        element.classList.add('slide-hidden');
      }
    });
    serviceButtons.forEach(function (element) {
      element.classList.remove('active');
    });
    element.classList.add('active');
  });
});
