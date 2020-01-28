import cart from './03-cart.js';

document.querySelector('.js-show-cart').addEventListener('click', () => {
  console.table(cart.getItems());
});

document
  .querySelector('button[data-product="🍎"]')
  .addEventListener('click', cart.add.bind(cart, { name: '🍎', price: 50 }));
