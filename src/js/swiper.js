
import Swiper from 'swiper'; 
import 'swiper/css'; 
import { Navigation } from 'swiper/modules'; 

export const swiperAboutMe = new Swiper('.aboutme-container-skills.swiper', {
  direction: 'horizontal',
  loop: true,
  modules: [Navigation],
      slidesPerView: 2,
  spaceBetween: 30,
      keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

export const swiperProjects = new Swiper('.projects-swiper-container.swiper', {
  direction: 'horizontal',
  loop: true,
  modules: [Navigation],
      slidesPerView: 2,
  spaceBetween: 30,
      keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});