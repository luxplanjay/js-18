// const promise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.3;

//   setTimeout(() => {
//     if (success) {
//       resolve('Успех');
//     }

//     reject('Ошибка');
//   }, 1000);
// });

// promise
//   .then(result => {
//     console.log(`%c${result}`, 'color:green; font-size: 20px');
//   })
//   .catch(error => {
//     console.log(`%c${error}`, 'color:red; font-size: 20px');
//   });

// чейнинг

// const promise = new Promise(resolve => {
//   resolve(5);
// });

// promise
//   .then(x => {
//     console.log('x: ', x);

//     return x * 2;
//   })
//   .then(y => {
//     console.log('y: ', y);

//     return y + 50;
//   })
//   .then(z => {
//     console.log('z: ', z);
//   })
//   .catch(error => console.log(error));
