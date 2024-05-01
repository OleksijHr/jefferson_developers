const body = document.body;
const modal = document.getElementById('myModal');
const form = document.querySelector('.footer_form'); 
const submitBtn = document.querySelector('.btm-submit');

submitBtn.addEventListener('click', function () {

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        
       
        modal.style.display = 'block';
        hideScroll();
        form.reset();
    });

   
    const closeModalBtn = modal.querySelector('.close');
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        openScroll()
    });

    
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            openScroll()
        }
    });

   
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
            openScroll()
        }
    });
});

function hideScroll() {
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
    body.style.paddingRight = '15px';

    modal.style.height = '100vh';
    modal.style.overflowY = 'hidden';

}

function openScroll() {
    body.style.height = 'auto';
    body.style.overflowY = 'auto';
    body.style.paddingRight = 'none';

    modal.style.height = 'auto';
    modal.style.overflowY = 'auto';
}