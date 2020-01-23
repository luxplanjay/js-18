/*
 * Функция findSmallestNumber поиска самого маленького элемента массива
 */

const findSmallestNumber = function(items) {
  let smallestNumber = items[0];

  for (let i = 1; i < items.length; i += 1) {
    // console.log('items[i]: ', items[i]);
    // console.log('smallestNumber: ', smallestNumber);

    if (items[i] < smallestNumber) {
      smallestNumber = items[i];
    }
  }

  return smallestNumber;
};

console.log(findSmallestNumber([67, -3, 45, 3, 78, 90, 2]));

console.log(findSmallestNumber([67, 79, 45, 3, 2]));
