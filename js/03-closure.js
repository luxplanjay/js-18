// /*
//  * Создаем повара с именем и без
//  */

// /*
//  * Global env
//  * Record: {}
//  * Parent: null
//  */
// // Environment: Global env
// const foo = function() {
//   /*
//    * Foo env
//    * Record: {}
//    * Parent: Global env
//    */
//   const x = 5;
//   /*
//    * Foo env
//    * Record: {x: 5}
//    * Parent: Global env
//    */

//   //  Environment: Foo env
//   return function() {
//     /* Anon env
//      * Record: {}
//      * Parent: Foo env
//      * */
//     console.log(x);
//   };
// };
// /*
//  * Global env
//  * Record: {foo: f}
//  * Parent: null
//  */

// const outerFn = foo();
// /*
//  * Global env
//  * Record: {foo: f, outerFn: f}
//  * Parent: null
//  */

// outerFn();

const makeDish = function(sheffName, dish) {
  console.log(`${sheffName} готовит ${dish}`);
};

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// const makeSheff = function(name) {
//   return function(dish) {
//     console.log(`${name} готовит ${dish}`);
//   };
// };

// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');

// mango('котлеты');
// poly('чай');

// console.dir(mango);

// ==============
// const fnA = function(a) {
//   return function fnB(b) {
//     return function fnC(c) {
//       console.log(a, b, c);
//     };
//   };
// };

// const res = fnA(5)(10);

// res(15);
// console.dir(res);
