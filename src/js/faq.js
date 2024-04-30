import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion-container');

new Accordion(container, {
  onOpen: function (currentElement) {
    const faqBtn = document.querySelector('.ac-trigger');

    console.log(currentElement);
  },
});

// faqs.forEach(faq => {
//   const accordion = new Accordion(faq, {
//     duration: 400,
//     showMultiple: true,

//
//   });

//   faq.addEventListener('click', () => {
//     faq.classList.toggle('is-active');
//   });
// });
