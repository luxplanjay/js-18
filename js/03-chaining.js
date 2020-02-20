/*
 * Цепочки вызовов - chaining
 */
const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(function(num) {
  return num > 2;
});
// console.log(greaterThenTwo);

const multByTwo = greaterThenTwo.map(function(num) {
  return num * 3;
});
// console.log(multByTwo);

const sorted = multByTwo.sort(function(a, b) {
  return a - b;
});
// console.log(sorted);

const res = numbers
  .filter(function(num) {
    return num > 2;
  })
  .map(function(num) {
    return num * 3;
  })
  .sort(function(a, b) {
    return a - b;
  });

// console.log(res);

/*
 * Сортируем тех кто онлайн по рангу
 */
const players = [
  { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
  { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
  { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
  { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
];

const onlineAndSorted = players
  .filter(function(player) {
    return player.isOnline;
  })
  .sort(function(prevPlayer, nextPlayer) {
    return prevPlayer.rank - nextPlayer.rank;
  });

// console.table(onlineAndSorted);

/*
 * Chaining в методах обтекта как jquery
 */

const element = {
  class: '',
  hovered: false,
  changeClass(cls) {
    this.class = cls;

    return this;
  },
  toggleHovered() {
    this.hovered = !this.hovered;
    return this;
  },
};

// element.toggleHovered().changeClass('open');

// console.log(element);
