// const add = function(a, b) {
//   return a + b;
// };

/*
 * Синтаксис стрелочной функции
 * - с параметрами
 * - с одним параметром
 * - без параметров
 */

// const add = (a, b) => {
//   return a + b;
// };

// console.log(add(2, 3));

// const logMessage = message => {
//   console.log(message);
// };

// logMessage('Привет');

// const greet = () => {
//   console.log('Привет');
// };

// greet();
/*
 * Явный и неявный возврат
 */

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// console.log(add(2, 3));

/*
 * Псевдомассив arguments
 */

const add = (...args) => {
  console.log(args);
};

add(2, 3, 4, 5, 6, 7);
