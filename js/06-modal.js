/*
 * Открыть и закрыть по кнопке
 * Закрыть по клику в бекдроп
 * Закрыть по ESC
 */

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]',
);
const backdropRef = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);
backdropRef.addEventListener('click', onBackDropClick);

function onOpenModal() {
  window.addEventListener('keydown', onPressEscape);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape);
  document.body.classList.remove('show-modal');
}

function onBackDropClick(event) {
  // console.log('event.target: ', event.target);
  // console.log('event.currentTarget: ', event.currentTarget);

  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function onPressEscape(event) {
  if (event.code === 'Escape') {
    console.log('Надо закрыть, нажали ESC');
    onCloseModal();
  }
}
