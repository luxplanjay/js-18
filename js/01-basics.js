/*
 * Литерал объекта, свойства, ключи (имя) и значения
 */

// const hotel = {
//   name: 'Sunset resort',
//   stars: 5,
//   capacity: 200,
// };

/*
 * Доступ к свойству по obj.key и obj['key']
 */

// console.log(hotel);

// console.log(hotel.stars);

// const key = 'stars';
// console.log(hotel['key']);

// hotel.stars = 3;
// hotel.guests = [];
// console.log(hotel);

/*
 * Ссылочный тип {} === {}
 */

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

/*
 * Массивы и функции = объекты
 */

const arr = ['a', 'b', 'c'];

// console.log(arr);

// arr.hello = ':)';

// console.log(arr);

// const fn = function() {};

// fn.hello = 'xD';

// console.log(fn.hello);

/*
 * Методы объекта и this при обращении к свойствам в методах
 */

// const hotel = {
//   name: 'Sunset resort',
//   stars: 5,
//   capacity: 200,
//   updateName(newName) {
//     console.log('this: ', this);

//     this.someMethod();

//     this.name = newName;
//   },
//   someMethod() {
//     console.log('Hello from someMethod');
//   },
// };

// console.log(hotel);

// hotel.updateName('Lagoon');

// console.log(hotel);

// На дно :)
// const objA = {
//   x: 1,
//   objB: {
//     y: 5,
//   },
// };

// console.log(objA.objB.y);

/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

// let totalFeedback = 0;

// for (const key in feedback) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('Total: ', totalFeedback);

// Object.keys()
// const keys = Object.keys(feedback);
// console.log(keys.length);

// let totalFeedback = 0;

// for (const key of keys) {
//   console.log(key);
//   console.log(feedback[key]);

//   totalFeedback += feedback[key];
// }

// console.log('Total: ', totalFeedback);

// Object.values()
// const values = Object.values(feedback);
// console.log(values);

// let totalFeedback = 0;

// for (const value of values) {
//   console.log(value);

//   totalFeedback += value;
// }

// console.log('Total: ', totalFeedback);
