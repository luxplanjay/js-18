const titleRef = document.querySelector('.js-title');

titleRef.textContent = 'Работа с DOM это ерунда 🐷';

titleRef.addEventListener('click', function() {
  console.log('Хватит меня кликать :)');
});
