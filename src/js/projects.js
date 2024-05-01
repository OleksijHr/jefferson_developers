// Імпортуйте Swiper
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
// Ініціалізуйте Swiper на вашому контейнері
const mySwiper = new Swiper('.swiper-container', {
  // Налаштування Swiper
  // Наприклад:
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  loop: false,
  autoHeight: true,
  // Додайте інші налаштування за потреби
});

// Якщо вам потрібно отримати доступ до ініціалізованого Swiper пізніше, ви можете зберегти його в змінну
// наприклад, для використання у подальших діях:
// mySwiper.slideNext();
// mySwiper.slidePrev();
// і т.д.
