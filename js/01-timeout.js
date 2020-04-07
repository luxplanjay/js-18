/*
 * Метод setTimeout()
 */

const log = () => {
  console.log('Лог при вызове callback-функции через 3 секунды');
};

/*
 * Асинхронность кода
 */

// console.log('До вызова setTimeout');

// setTimeout(log, 0);

// console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout()
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;

console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
