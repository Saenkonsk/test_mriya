let menuMobile = document.querySelector('.menu-section_mobile');
let menuDesktop = document.querySelector('.menu-section_desktop');
let menu = document.querySelectorAll('.menu-section');
let menuOpen = document.querySelector('.header__menu-button_open');
let menuClose = document.querySelectorAll('.header__menu-button_close');

menuOpen.addEventListener('click', function () {
  if (menuMobile.classList.contains('visually-hidden') && document.documentElement.clientWidth < 1440) {
    menuMobile.classList.remove('visually-hidden');
  }
  if (menuDesktop.classList.contains('visually-hidden') && document.documentElement.clientWidth >= 1440) {
    menuDesktop.classList.remove('visually-hidden');
  }
});

for (let n = 0; n < menuClose.length; n++) {
  menuClose[n].addEventListener('click', function () {
    for (let k = 0; k < menu.length; k++) {
      menu[k].classList.add('visually-hidden');
    }
  });
}

let accordion  = document.querySelectorAll(".menu-section__link");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    if (document.documentElement.clientWidth < 1440) {
      let submenu = this.nextElementSibling;
      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
      }
    };
  });
};

let menuSlider = new Swiper('.menu-slider', {
  speed: 1000,
  loop: true,
  autoplay: {
    delay: 3000,
    waitForTransition: false,
    disableOnInteraction: false,
  },
  flipEffect: {
    rotate: 30,
    slideShadows: false,
  },
  pagination: {
    el: '.menu-slider__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + '<svg class="fp-arc-loader" width="24" height="24" viewBox="0 0 24 24">' +
        '<circle class="path" cx="12" cy="12" r="11.5" fill="none" transform="rotate(-90 12 12)" stroke="#D9C287"' +
        'stroke-opacity="1" stroke-width="1.5px"></circle>' +
        '<circle class="path_center" cx="12" cy="12" r="8" fill="#FFF"></circle>' +
        '</svg></li>';
    }
  }
})

let services = ['Спецпредложения', 'Афиша', 'Категории отдыха'];
let mySwiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: '.services-headers',
    clickable: true,
    renderBullet: function (index, className) {
      return '<li class="' + className + '">' + (services[index]) + '</li>';
    },
  },
  navigation: {
    nextEl: '.services__control_next',
    prevEl: '.services__control_prev',
  }
});
