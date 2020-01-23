/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Data Protection and protecting your users in light of GDPR
 * How to Find Unique and Memorable Name for Your Product
 * Build Mean Stack Application
 * 11 fruitful resources to improve Javascript knowledge
 */

const slugify = function(string) {
  const words = string.toLowerCase().split(' ');
  const slug = words.join('-');

  return slug;
};

// const slug1 = slugify('Top 10 benefits of React framework');
// console.log(slug1);

// const slug2 = slugify(
//   'Data Protection and protecting your users in light of GDPR',
// );
// console.log(slug2);

// Делаем массив слагов
// const articles = [
//   'Top 10 benefits of React framework',
//   'Data Protection and protecting your users in light of GDPR',
//   'How to Find Unique and Memorable Name for Your Product',
//   'Build Mean Stack Application',
//   '11 fruitful resources to improve Javascript knowledge',
// ];

// const slugs = [];

// for (const article of articles) {
//   const slug = slugify(article);
//   slugs.push(slug);
// }

// console.log(slugs);
