   'use-strict';

   //pop-up

   const btnModal = document.querySelector('[data-modal]'),
       btnCloseModal = document.querySelector('[date-close]'),
       bodyModal = document.querySelector('.modal');



   function openModal() {
       bodyModal.classList.toggle('show');
       document.body.style.overflow = 'hidden'; // убираем вертикальную прокрутку
       bodyModal.classList.add('fade');

   }


   btnModal.addEventListener('click', openModal);


   function closeModal() {
       bodyModal.classList.toggle('show');
       document.body.style.overflow = '';
   }

   btnCloseModal.addEventListener('click', closeModal);


   bodyModal.addEventListener('click', (e) => { // закрывает pop-up если нажать не на нее
       if (e.target === bodyModal) {
           closeModal();
       }
   });


   document.addEventListener('keydown', (e) => {
       if (e.code === 'Escape' && bodyModal.classList.contains('show')) {
           closeModal();
       }
   });