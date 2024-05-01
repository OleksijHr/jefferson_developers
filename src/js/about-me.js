import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.css';

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.aboutme-skills-circle');
  const swiperWrapper = document.querySelector('.aboutme-wrapper');
  slides.forEach((slide, index) => {
    const clone = slide.cloneNode(true);
    swiperWrapper.appendChild(clone);
  });

  const swiper = new Swiper('.aboutme-skills-swiper', {
    speed: 400,
    spaceBetween: 0,
    loop: true,
    setWrapperSize: true,
    breakpoints: {
      // Налаштування для десктопу
      1440: {
        slidesPerView: 6,
      },
      // Налаштування для планшету
      768: {
        slidesPerView: 3,
      },
      // Налаштування для мобільних пристроїв
      320: {
        slidesPerView: 2,
      },
    },
    on: {
      init: function () {
        document.querySelector('.aboutme-skills-circle').style.backgroundColor =
          '#ed3b44';
      },
      slideChange: function () {
        const previousSlide = this.slides[this.previousIndex];
        const activeSlide = this.slides[this.activeIndex];
        previousSlide.style.background = '';
        activeSlide.style.backgroundColor = '#ed3b44';
      },
    },
  });

  const btnNext = document.querySelector('.aboutme-skills-btn');
  btnNext.addEventListener('click', () => {
    swiper.slideNext();
  });
});
