/* =======================================
 * http://fecore.net.ua/books/m5ph3r-javascript/module-05/prototypes.html
 *
 * Прототип объекта
 * Object.create()
 * [[Prototype]] и __proto__
 * Цепочка прототипов
 */

// const objA = {
//   x: 1,
//   y: 2,
// };

const objB = {
  z: 10,
};

const objA = Object.create(objB);

objA.x = 1;
objA.y = 2;

console.log(objA);

/* =======================================
 * Правило поиска свойства в цепочке прототипов
 */

console.log(objA.qwe);
