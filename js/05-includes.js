/*
 * Проверяем наличие работника на месте
 * Сначала через for, потом includes
 */

const staff = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
const query = 'Ajax';
// let result = 'сотрудника нет';

// for (const employee of staff) {
//   console.log(employee);

//   if (query === employee) {
//     result = 'Сотрудник на работе!';
//     break;
//   }
// }

// console.log(result);

const result = staff.includes(query)
  ? 'Сотрудник на работе!'
  : 'сотрудника нет';

console.log(result);
