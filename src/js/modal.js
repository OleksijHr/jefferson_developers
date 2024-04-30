 document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо посилання на модальне вікно та кнопку, яка його відкриває
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');

    // Відкриття модального вікна при кліку на кнопку
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });

    // Закриття модального вікна по кліку на кнопку закриття
    const closeModalBtn = modal.querySelector('.close');
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    // Закриття модального вікна по кліку на backdrop
    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Закриття модального вікна по натисканню на клавішу Escape
    window.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  });