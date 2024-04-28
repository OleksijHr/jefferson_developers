document.addEventListener('DOMContentLoaded', function () {
  const mobMenuOpenBtn = document.querySelector('.mob-menu-open');
  const mobMenu = document.querySelector('.header-mobile-menu');
  const mobMenuCloseBtn = mobMenu.querySelector('.header-mobile-menu-close');
  const mobMenuLinks = mobMenu.querySelectorAll('.nav-link');

  // Відкриття мобільного меню
  mobMenuOpenBtn.addEventListener('click', function () {
    mobMenu.classList.add('open');
  });

  // Закриття мобільного меню
  function closeMobMenu() {
    mobMenu.classList.remove('open');
  }

  mobMenuCloseBtn.addEventListener('click', closeMobMenu);

  // Обробка click на посиланнях в мобільному меню
  mobMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobMenu);
  });
});
