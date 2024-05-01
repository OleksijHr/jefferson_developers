// import Swiper
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
//inicialization of Swiper на вашому контейнері
const mySwiper = new Swiper('.swiper-container', {
  // settings Swiper

  modules: [Navigation],

  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: false,
  autoHeight: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


