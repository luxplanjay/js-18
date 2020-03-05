/*
 * События. Создание и удаление слушателей
 * Ссылочная идентичность колбеков
 * Объект события
 */

const targetBtnRef = document.querySelector('.js-target-btn');
const addListenerBtnRef = document.querySelector('.js-add-listener');
const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// targetBtnRef.addEventListener('click', event => {
//   console.dir(event.target);
// });

const doStuffOnClick = () => {
  console.log('Click!!!');
};

addListenerBtnRef.addEventListener('click', () => {
  targetBtnRef.addEventListener('click', doStuffOnClick);
});

removeListenerBtnRef.addEventListener('click', () => {
  targetBtnRef.removeEventListener('click', doStuffOnClick);
});
