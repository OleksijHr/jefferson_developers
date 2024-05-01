import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainerFaq = document.querySelector('.accordion-container.faq-list');
const accordionContainerAboutMe = document.querySelector('.accordion-container.about-me-about-list');

export const accordionFaq = new Accordion(accordionContainerFaq, {});


export const accordionAboutMe = new Accordion(accordionContainerAboutMe, {});