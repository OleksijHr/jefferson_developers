// імпортувати з api.js
// логіка секції

import * as api from './api';
import './swiper';

// import Swiper JS
import Swiper from 'swiper';

//             обгортка повинна включати усі елементи для свайперу
//                                    |
// export const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 2,
//   slidesPerGroup: 1,

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

const reviewsList = document.querySelector('.menu-reviews-list-ul');

api
  .searchReviews()
  .then(data => {
    console.log(data);
    reviewsList.insertAdjacentHTML('beforeend', createReviews(data));
  })
  .catch(error => {
    console.log(error);
  });

function createReviews(arrReviews) {
  return arrReviews
    .map(({ _id, author, avatar_url, review }) => {
      return `<li class="menu-reviews-item-li menu-item swiper-slide-reviews" id="${_id}">
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
