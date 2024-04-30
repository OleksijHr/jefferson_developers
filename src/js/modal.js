document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const form = document.querySelector('.footer_form'); 

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        //  код для відправки POST-запиту на сервер

       
        modal.style.display = 'block';
        form.reset();
    });

   
    const closeModalBtn = modal.querySelector('.close');
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

   
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});
