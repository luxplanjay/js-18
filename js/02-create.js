// const titleRef = document.createElement('h1');

// titleRef.textContent = 'Динамически созданный заголовок! Вау!';
// titleRef.classList.add('site-title');
// titleRef.id = 'title';
// console.log(titleRef);

const product = {
  name: 'Сервоприводы',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 2000,
  available: true,
};

const containerRef = document.createElement('div');
containerRef.classList.add('product-card');

const titleRef = document.createElement('h2');
titleRef.textContent = product.name;
titleRef.classList.add('product-card__name');
// console.log(titleRef);

const descrRef = document.createElement('p');
descrRef.textContent = product.description;
// console.log(descrRef);

const priceRef = document.createElement('p');
priceRef.textContent = `Цена: ${product.price} кредитов`;
// console.log(priceRef);

// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);
containerRef.append(titleRef, descrRef, priceRef);
console.log(containerRef);

const cardRootRef = document.querySelector('#root');

// cardRootRef.appendChild(containerRef);

// ===================
// const nav = document.querySelector('.nav');

// console.log(nav.firstElementChild);

// const listItemRef = document.createElement('li');
// listItemRef.textContent = 'New Item';

// nav.insertBefore(listItemRef, nav.firstElementChild);
