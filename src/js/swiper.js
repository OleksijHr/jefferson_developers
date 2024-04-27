// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


//             обгортка повинна включати усі елементи для свайперу
//                                    |
export const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});