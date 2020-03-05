/*
 * Типы событий: keypress, keydown, keyup
 * Ограничения keypress
 * Свойства обьекта события клавиатуры
 */

const outputRef = document.querySelector('.js-output');
const clearBtnRef = document.querySelector('.js-clear');

window.addEventListener('keypress', onKeypress);

clearBtnRef.addEventListener('click', onClearOutput);

function onKeypress(event) {
  // console.log('event.key: ', event.key);
  // console.log('event.code: ', event.code);

  outputRef.textContent += event.key;
}

function onClearOutput() {
  outputRef.textContent = '';
}
