import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const container = document.querySelector('.accordion-container');

new Accordion(container, {});

// export const accordion = new Accordion('.faq-list', {
//   duration: 400,
//   showMultiple: true,
//   onOpen: function (currentElement) {
//     console.log(currentElement);
//   },
// });
