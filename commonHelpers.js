import{S as u,A as d}from"./assets/vendor-52a7ade3.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const c={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};c.openMenuBtn.addEventListener("click",l);c.closeMenuBtn.addEventListener("click",l);function l(){c.menu.classList.toggle("is-open")}document.getElementById("dropdownBtn").addEventListener("click",function(){var e=document.getElementById("dropdownContent");e.style.display==="block"?e.style.display="none":e.style.display="block"});const a="https://portfolio-js.b.goit.study/api",p={get:"reviews",post:"requests"};function f(){return fetch(`${a}/${p.get}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}new u(".swiper",{direction:"vertical",loop:!0,slidesPerView:1,slidesPerGroup:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const m=document.querySelector(".menu-reviews-list-ul");f().then(e=>{console.log(e),m.insertAdjacentHTML("beforeend",w(e))}).catch(e=>{console.log(e)});function w(e){return e.map(({_id:o,author:r,avatar_url:i,review:t})=>`<li class="menu-reviews-item-li menu-item swiper-slide-reviews" id="${o}">
         <img
           class="icon-reviews-img"
           src="${i}"
           width="48"
           height="48"
           alt="${r}'s avatar"
         />
         <div class="container-reviews-title-text">
           <h3 class="reviews-title-h3">${r}</h3>
           <p class="reviews-text">${t}</p>
         </div>
      </li>`).join("")}new d(".accordion-container",{duration:400,showMultiple:!0,onOpen:function(e){console.log(e)}});
//# sourceMappingURL=commonHelpers.js.map
