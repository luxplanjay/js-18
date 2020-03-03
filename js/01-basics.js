const titleRef = document.querySelector('.page-title');
// console.dir(titleRef);
titleRef.textContent = 'Привет, добро пожаловать!';

// ==============================================
const activeLinkRef = document.querySelector('.nav__link--active');
console.dir(activeLinkRef);
activeLinkRef.href = '/blog';
activeLinkRef.style.color = 'palevioletred';

activeLinkRef.classList.remove('nav__link--primary');

// ==============================================
const linksRef = document.querySelectorAll('.nav__link');
// console.log(linksRef);

const imageRef = document.querySelector('.hero-image');
// console.dir(imageRef);

// console.log(imageRef.getAttribute('src'));
// console.log(imageRef.getAttribute('alt'));

imageRef.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imageRef.alt = 'Это моя фотка!';

// imageRef.setAttribute(
//   'src',
//   'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480',
// );

// imageRef.setAttribute('alt', 'Это моя фотка!');
