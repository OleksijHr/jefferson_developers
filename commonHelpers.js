import{S as u,A as a}from"./assets/vendor-52a7ade3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const c={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};c.openMenuBtn.addEventListener("click",l);c.closeMenuBtn.addEventListener("click",l);function l(){c.menu.classList.toggle("is-open")}const d="https://portfolio-js.b.goit.study/api",p={get:"reviews",post:"requests"};function f(){return fetch(`${d}/${p.get}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}new u(".swiper",{direction:"vertical",loop:!0,slidesPerView:1,slidesPerGroup:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const m=document.querySelector(".menu-reviews-list-ul");f().then(t=>{console.log(t),m.insertAdjacentHTML("beforeend",w(t))}).catch(t=>{console.log(t)});function w(t){return t.map(({_id:o,author:n,avatar_url:i,review:e})=>`<li class="menu-reviews-item-li menu-item swiper-slide-reviews" id="${o}">
         <img
           class="icon-reviews-img"
           src="${i}"
           width="48"
           height="48"
           alt="${n}'s avatar"
         />
         <div class="container-reviews-title-text">
           <h3 class="reviews-title-h3">${n}</h3>
           <p class="reviews-text">${e}</p>
         </div>
      </li>`).join("")}new a(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(t){console.log(t)}});
//# sourceMappingURL=commonHelpers.js.map
