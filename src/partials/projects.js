import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

document.addEventListener('DOMContentLoaded', function () {
  // Ініціалізація Swiper
  const mySwiper = new Swiper('.swiper-slide', {
    // Параметри Swiper
    slidesPerView: 1, // Кількість слайдів, що відображаються одночасно
    spaceBetween: 20, // Відступ між слайдами
    loop: true, // Зациклення слайдів
    navigation: {
      nextEl: '.swiper-button-next', // Кнопка "Вперед"
      prevEl: '.swiper-button-prev', // Кнопка "Назад"
    },
    pagination: {
      el: '.swiper-pagination', // Пагінація
      clickable: true, // Можливість клікати на крапки для перемикання слайдів
    },
  });
});
