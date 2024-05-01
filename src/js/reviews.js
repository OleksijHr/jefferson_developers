// імпортувати з api.js
// логіка секції

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import * as api from './api';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsList = document.querySelector('.menu-reviews-list-ul');

await api
  .searchReviews()
  .then(data => {
    reviewsList.insertAdjacentHTML('beforeend', createReviews(data));

    const swiper = new Swiper('.swiper-reviews-wrap', {
      direction: 'horizontal',
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        // when window width is >= 320px
        375: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        1440: {
          slidesPerView: 4,
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
  .catch(error => {
    console.log('error', error);
  });

function createReviews(arrReviews) {
  return arrReviews
    .map(({ _id, author, avatar_url, review }) => {
      return `<li class="menu-reviews-item-li menu-item swiper-slide" id="${_id}">  
         <img 
           class="icon-reviews-img" 
           src="${avatar_url}" 
           width="48" 
           height="48" 
           alt="${author}'s avatar" 
         /> 
         <div class="container-reviews-title-text"> 
           <h3 class="reviews-title-h3">${author}</h3> 
           <p class="reviews-text">${review}</p> 
         </div> 
      </li>`;
    })
    .join('');
}
