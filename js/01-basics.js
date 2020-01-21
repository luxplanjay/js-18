/*
 * Объявление, индексация, переопределение и длина
 */
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// console.log(friends);
// console.log(friends[2]);

// friends[2] = 'Chelsy';

// console.log(friends);
// console.log(friends[2]);
// console.log(friends.length);

// friends[4] = 'Kongo';

// console.log(friends);
// console.log(friends.length);

/*
 * Итерация по массиву
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(i);
//   console.log(friends[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

/*
 * Логика с break и continue
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
const nameToFind = 'Poly';
let message = 'такого друга нет';

for (const friend of friends) {
  if (nameToFind === friend) {
    message = 'нашли такого друга';
    break;
  }
}

console.log(message);
