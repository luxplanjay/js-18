const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Array.prototype.every()
 * Поэлементо перебирает оригинальный массив
 * Возвращает true если все элементы массива удовлетворяют условию
 */
const isAllOnline = players.every(function(player) {
  return player.online;
});
// console.log('isAllOnline: ', isAllOnline);

const averagedInPlayTime = players.every(function(player) {
  return player.timePlayed > 100;
});

// console.log('averagedInPlayTime: ', averagedInPlayTime);

/*
 * Array.prototype.some()
 * Поэлементо перебирает оригинальный массив
 * Возвращает true если хотя бы один элемент массива удовлетворяет условию
 */
const isAnyOnline = players.some(function(player) {
  return player.online;
});
// console.log('isAnyOnline: ', isAnyOnline);

const anyHardcorePlayers = players.some(function(player) {
  return player.timePlayed > 400;
});
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);
