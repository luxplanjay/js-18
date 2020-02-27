const options = {
  yellow: true,
  blue: false,
  teal: false,
  orange: true,
  rosered: true,
  violet: false,
};

// Шаг 1
// const entries = Object.entries(options);
// console.table(entries);

// const selectedOptions = entries.filter(entry => entry[1]);
// console.table(selectedOptions);

// const colors = selectedOptions.map(option => option[0]);
// console.log(colors);

// Шаг 2
// const colors = Object.entries(options)
//   .filter(entry => entry[1])
//   .map(option => option[0]);

// console.log(colors);

// Шаг 3
// const colors = Object.entries(options)
//   .filter(([, selected]) => selected)
//   .map(([color]) => color);

// console.log(colors);

// Hw 3.3

const findBestEmployee = function(employees) {
  const keys = Object.keys(employees);

  // for (const key of keys) {
  //   console.log(key);
  //   console.log(employees[key]);
  // }

  // console.log('keys: ', keys);
  // console.log('keys[0]: ', keys[0]);
  // console.log(employees[keys[0]]);

  const entries = Object.entries(employees);
  // console.log(entries);

  for (const [name, value] of entries) {
    console.log(name);
    console.log(value);
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux
