/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 *
 * Должно получиться top-10-benefits-of-react-framework
 *
 * После чего сделать руками через for с if...else и тернарником
 */

// const title = 'Top 10 benefits of React framework';

// const nomalizedTitle = title.toLowerCase();
// console.log(nomalizedTitle);

// const words = nomalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// Лучшее решение
// const title = 'Top 10 benefits of React framework';
// const words = title.toLowerCase().split(' ');
// const slug = words.join('-');

// console.log(slug);

// Join руками для практики циклов
const title = 'Top 10 benefits of React framework';
const words = title.toLowerCase().split(' ');
let slug = '';

for (let i = 0; i < words.length; i += 1) {
  // if (i !== words.length - 1) {
  //   slug += words[i] + '-';
  // } else {
  //   slug += words[i];
  // }

  const isNotLastValue = i !== words.length - 1;

  slug += isNotLastValue ? words[i] + '-' : words[i];
}

console.log(slug);
