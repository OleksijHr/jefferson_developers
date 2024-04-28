import{S as c,A as l}from"./assets/vendor-52a7ade3.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const u="https://portfolio-js.b.goit.study/api",a={get:"reviews",post:"requests"};function d(){return fetch(`${u}/${a.get}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}new c(".swiper",{direction:"vertical",loop:!0,slidesPerView:1,slidesPerGroup:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const f=document.querySelector(".menu-reviews-list-ul");d().then(t=>{console.log(t),f.insertAdjacentHTML("beforeend",p(t))}).catch(t=>{console.log(t)});function p(t){return t.map(({_id:i,author:o,avatar_url:s,review:e})=>`<li class="menu-reviews-item-li menu-item" id="${i}">
         <img
           class="icon-reviews-img"
           src="${s}"
           width="48"
           height="48"
           alt="${o}'s avatar"
         />
         <div class="container-reviews-title-text">
           <h3 class="reviews-title-h3">${o}</h3>
           <p class="reviews-text">${e}</p>
         </div>
      </li>`).join("")}new l(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map
