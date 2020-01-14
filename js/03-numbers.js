// const value = 'qwerty';

// const number = Number(value);

// console.log(number);
/*
 * Парс числа
 */
const blockWidth = '300.5px';
const width = Number.parseFloat(blockWidth);

console.log(width);

/*
 * Math. Возведение в степень
 */
let number = prompt('Введите число');
number = Number(number);

let power = prompt('Введите степень');
power = Number(power);

console.log(number);
console.log(power);

const result = Math.pow(number, power);
console.log(result);
