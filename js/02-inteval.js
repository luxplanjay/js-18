/*
 * Метод setInterval()
 */

const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);

// setInterval(logger, 2000, 2000);

/*
 * Очистка интервала с clearInterval()
 */

// console.log('До');

let subscriptionCounter = 0;
let hasSubscribed = false;

const intervalId = setInterval(() => {
  if (subscriptionCounter === 3 || hasSubscribed) {
    console.log('Останавливаем интервал');
    clearInterval(intervalId);
    return;
  }

  console.log('Подпишись на рассылку!');
  // hasSubscribed = true;
  subscriptionCounter += 1;
}, 1000);

// console.log('После');
