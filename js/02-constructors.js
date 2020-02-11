/* =======================================
 * http://fecore.net.ua/books/m5ph3r-javascript/module-05/oop.html
 *
 * Основы ООП: класс, объект, интерфейс
 */

/* =======================================
 * http://fecore.net.ua/books/m5ph3r-javascript/module-05/constructors.html
 *
 * Функции-конструкторы
 * Свойство Function.prototype
 */

const Manager = function(name, sales) {
  this.name = name;
  this.sales = sales;
};

Manager.prototype.sell = function() {
  this.sales += 1;
};

Manager.prototype.changeName = function(name) {
  this.name = name;
};

console.dir(Manager);

const mango = new Manager('Mango', 5);
console.log(mango);
mango.sell();
console.log(mango);

console.log(
  'mango.__proto__ === Manager.prototype: ',
  mango.__proto__ === Manager.prototype,
);

const poly = new Manager('Poly', 10);
console.log(poly);
poly.changeName('Pollllly');
console.log(poly);
