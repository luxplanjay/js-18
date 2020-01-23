/*
 * Функция logItems для перебора массива
 */
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// const numbers = [1, 2, 3, 4, 5];

// const logItems = function(items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems(friends);
// logItems(numbers);
// logItems(['qwe', 1, 2, 'wtewt']);

/*
 * Функция findFriend для поиска друзей
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const nameToFind1 = 'Poly';

// const findFriend = function(allFriends, name) {
//   console.log('allFriends: ', allFriends);
//   console.log('name: ', name);

//   for (const friend of allFriends) {
//     if (name === friend) {
//       return 'Нашли такого друга';
//     }
//   }

//   return 'Не нашли';
// };

// const r1 = findFriend(friends, 'Poly');
// console.log(r1);

// const r2 = findFriend(friends, 'Chelsy');
// console.log(r2);

const findFriend = function(allFriends, name) {
  const isInFriends = allFriends.includes(name);

  // if (isInFriends) {
  //   return 'Нашли такого друга';
  // } else {
  //   return 'Не нашли';
  // }

  return isInFriends ? 'Нашли такого друга' : 'Не нашли';
};

const r1 = findFriend(friends, 'Poly');
console.log(r1);

const r2 = findFriend(friends, 'Chelsy');
console.log(r2);
