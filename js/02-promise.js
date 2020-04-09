// const fetchUser = userName => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = Math.random() > 0.3;

//       if (success) {
//         const user = { name: userName, age: 26, posts: 74 };
//         resolve(user);
//       }

//       const error = 'Произошла ошибка :(';
//       reject(error);
//     }, 1000);
//   });
// };

// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);

// function onFetchUserSuccess(user) {
//   console.log(user);
// }

// function onFetchUserError(error) {
//   console.log(`%c ${error}`, 'color: red; font-size: 16px;');
// }

const makePromise = delay => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay);
    }, delay);
  });
};

makePromise(4000).then(console.log);

makePromise(2000).then(console.log);

makePromise(5000).then(console.log);
