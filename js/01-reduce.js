/*
 * Array.prototype.reduce()
 * Поэлементо перебирает оригинальный массив
 * Возвращает что угодно 🤯
 * Заменяет всё на свете, но использовать нужно с умом
 */

// откройте завесу тайны почему reduce медленный и в чем концептуальная разница между reduce и map, кроме многофункционального аcc. аreduce кастомный будет?

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce(function(accumulator, number) {
  return accumulator + number;
}, 0);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25
// console.log(total);

/*
 * Считаем общую зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(function(acc, value) {
  return acc + value;
});
// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(function(time, player) {
  return time + player.timePlayed;
}, 0);

// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(function(total, item) {
  return total + item.price * item.quantity;
}, 0);
// console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce(function(tags, tweet) {
  tags.push(...tweet.tags);

  return tags;
}, []);

// console.log(allTags);

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce(function(acc, tag) {
//   console.log('TAG: ', tag);
//   console.log('ACC: ', acc);

//   if (acc.hasOwnProperty(tag)) {
//     console.log('такое свойство есть, увеличиваем значение');

//     acc[tag] += 1;

//     return acc;
//   }

//   console.log('Такого свойства нет, добавляем на обьект');
//   acc[tag] = 1;

//   return acc;
// }, {});

// Грязная версия, мутирует аргумент который придет в acc
// const tagsStats = allTags.reduce(function(acc, tag) {
//   acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;

//   return acc;
// }, {});

// Чистая версия, каждый раз создает новый обьект
const tagsStats = allTags.reduce(function(acc, tag) {
  return {
    ...acc,
    [tag]: acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1,
  };
}, {});

// console.log(tagsStats);

/*
 * Reduce своими руками
 */
// Array.prototype.reduce = function(callback, initialValue = this[0]) {
//   let accumulator = initialValue;

//   for (let i = 0; i < this.length; i += 1) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };
