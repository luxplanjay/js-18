/*
 * Повторяем функции-конструкторы. Пишем класс Hero
 * Статические свойства и методы
 */

const Hero = function(name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.description = 'This is a Hero base class';

Hero.showStats = function(hero) {
  console.log('Logging stats from Hero.showStats: ', hero);
};

console.dir(Hero);

Hero.prototype.changeName = function(name) {
  this.name = name;
};

const mango = new Hero('Mango', 1000);

console.log(mango);
