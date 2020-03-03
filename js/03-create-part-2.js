import products from './products.js';

console.table(products);

const createProductCard = product => {
  const containerRef = document.createElement('div');
  containerRef.classList.add('product-card');

  const titleRef = document.createElement('h2');
  titleRef.textContent = product.name;

  const inStockClass = product.available
    ? 'product-card__name--available'
    : 'product-card__name--not-available';

  titleRef.classList.add('product-card__name', inStockClass);

  const descrRef = document.createElement('p');
  descrRef.textContent = product.description;

  const priceRef = document.createElement('p');
  priceRef.textContent = `Цена: ${product.price} кредитов`;

  containerRef.append(titleRef, descrRef, priceRef);

  return containerRef;
};

const productCards = products.map(product => createProductCard(product));
console.log(productCards);

const productsListRef = document.querySelector('.js-products');
console.log(productsListRef);

productsListRef.append(...productCards);
