/*
 * Array.prototype.sort()
 * Сортирует и ИЗМЕНЯЕТ оригинальный массив
 */

const numbers = [1, 9, 6, 2, 3];
// numbers.sort(function(prev, next) {
//   return prev - next;
// });
// console.log(numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log(letters);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 */
// const copy = numbers.slice();
const copy = [...numbers].sort();

// console.log(numbers);
// console.log(copy);

/*
 * Кастомная сложных типов
 */
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const sortedByTopPlayers = [...players].sort(function(prevPlayer, nextPlayer) {
  // по возрастанию значения свойства
  // return prevPlayer.timePlayed - nextPlayer.timePlayed;

  // по убыванию значения свойства
  return nextPlayer.timePlayed - prevPlayer.timePlayed;
});

// console.table(sortedByTopPlayers);

const sortedByWorstPlayers = [...players].sort(function(
  prevPlayer,
  nextPlayer,
) {
  // по возрастанию значения свойства
  return prevPlayer.timePlayed - nextPlayer.timePlayed;
});

// console.table(sortedByWorstPlayers);
