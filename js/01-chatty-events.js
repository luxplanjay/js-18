/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 */

/*
 * Mousemove
 */
const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCallbackCounter = 0;

const throttledMousemoveCallback = _.throttle(event => {
  mouseMoveCallbackCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов callback-функции 💩: ${mouseMoveCallbackCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}, 100);

window.addEventListener('mousemove', throttledMousemoveCallback);

/*
 * Input
 */
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCallbackCounter = 0;

const debouncedInputCallback = _.debounce(event => {
  inputCallbackCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов callback-функции 💩: ${inputCallbackCounter},
    Значение: ${event.target.value}
  `;
}, 300);

inputRef.addEventListener('input', debouncedInputCallback);
