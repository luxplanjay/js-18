/**
 * - Показываем и скрываем добавляя/удаляя класс
 * - Скрываем через определенное время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const refs = {
  notification: document.querySelector('.js-notification'),
};

let timeoutId = null;

refs.notification.addEventListener('click', notificationClickHandler);

showNotification();

function notificationClickHandler() {
  clearTimeout(timeoutId);
  hideNotification();
}

function showNotification() {
  refs.notification.classList.add('is-visible');

  timeoutId = setTimeout(() => {
    console.log(
      'Сейчас буду вызывать hideNotification в колбеке от setTimeout',
    );
    hideNotification();
  }, 3000);
}

function hideNotification() {
  refs.notification.classList.remove('is-visible');
}
