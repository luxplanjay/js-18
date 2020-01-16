/*
 * Math. Возведение в степень
 */
// let number = prompt('Введите число');
// number = Number(number);

// let power = prompt('Введите степень');
// power = Number(power);

// console.log(number);
// console.log(power);

// const result = Math.pow(number, power);
// console.log(result);

// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', function() {});

const numberInputRef = document.querySelector('input[name="number"]');
const powerInputRef = document.querySelector('input[name="power"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function() {
  console.log('numberInputRef.value: ', numberInputRef.value);
  console.log('powerInputRef.value: ', powerInputRef.value);

  const number = Number(numberInputRef.value);
  const power = Number(powerInputRef.value);

  const result = Math.pow(number, power);
  console.log(result);
});
