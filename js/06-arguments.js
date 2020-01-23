/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function() {
//   console.log([]);
//   console.log(arguments);
// };

// fn(1, 2, 3, 4, 5, 6, 7);

/*
 * Функция сложения произвольного количества элементов
 */

// const add = function() {
//   const args = Array.from(arguments);
//   console.log(arguments);
//   console.log(args);

//   for (let i = 0; i < args.length; i += 1) {
//     console.log(args[i]);
//   }
// };

// const add = function(...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));

// console.log(add(1, 2, 4, 5, 6));

/*
 * Функция прикрепления тега к строке
 */
// const posts = ['post-1', 'post-2', 'post-3', 'post-4'];
// const tag = '#jqueryrules';

// const postsWithTag = [];

// for (const post of posts) {
//   postsWithTag.push(`${post}${tag}`);
// }

// console.log(postsWithTag);

// const addTag = function(tag, ...args) {
//   const postsWithTag = [];

//   for (const arg of args) {
//     postsWithTag.push(`${arg}${tag}`);
//   }

//   return postsWithTag;
// };

// console.log(addTag('#jqueryrules', 'post-1', 'post-2'));
// console.log(addTag('#react', 'post-1', 'post-2', 'post-3'));
// console.log(addTag('#redux', 'post-1', 'post-2', 'post-3', 'post-4'));
