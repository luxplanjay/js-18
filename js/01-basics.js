/* =======================================
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//   'function() {} === function() {}: ',
//   function() {} === function() {},
// );

// const fnA = function() {
//   console.log('hello');
// };
// const fnB = fnA;

// console.log('fnB === fnA: ', fnB === fnA);

/* =======================================
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/* =======================================
 * Как метод объекта. В контексте объекта.
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this: ', this);
//     console.log('this.tag: ', this.tag);
//   },
// };

// user.showTag();

/* =======================================
 * Вызов без контекста
 */
// const foo = function() {
//   console.log('this: ', this);
// };

// foo();

/* =======================================
 * Как метод объекта, но объявлена как внешняя функция. В контексте объекта.
 */
// const showTag = function() {
//   console.log('this: ', this);
//   console.log('this.tag: ', this.tag);
// };

// // showTag();

// const user = {
//   tag: 'Mango',
// };

// user.a = showTag;

// console.log(user);
// user.a();

/* =======================================
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this: ', this);
//     console.log('this.tag: ', this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/* =======================================
 * Контекст в callback-функциях
 */
// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('this: ', this);
//     console.log('this.tag: ', this.tag);
//   },
// };

// const invokeAction = function(action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

/* =======================================
 * :)
 */

// const makeChangeColor = function() {
//   const changeColor = function(color) {
//     console.log('this: ', this);
//     // this.color = color;
//   };

//   changeColor();

//   const sweater = {
//     color: 'teal',
//   };

//   sweater.changeColor = changeColor;

//   sweater.changeColor();

//   return sweater.changeColor;
// };

// const changeColor = makeChangeColor();

// changeColor('blue');

/* =======================================
 * :)
 */
// const makeChangeColor = function() {
//   const changeColor = function(color) {
//     console.log(this);
//     this.color = color;
//   };

//   return changeColor;
// };

// const hat = {
//   color: 'blue',
//   changeColor: makeChangeColor(),
// };

// hat.changeColor('orange');
