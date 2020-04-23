/*
 * Асинхронные функции возвращают промис
 */

// const getFruit = async (name) => {
//   const fruits = {
//     apple: "🍎",
//     peach: "🍑",
//     grapes: "🍇",
//   };

//   return fruits[name];
// };

// getFruit("apple").then((fruit) => console.log(fruit));
/*
 * Избегаем promise hell и чейнинг с ошибкой паралельного выполнения
 */

const makePromiseSmothie = () => {
  return getFruit("apple").then((apple) => {
    return getFruit("peach").then((peach) => {
      return [apple, peach];
    });
  });
};

// makePromiseSmothie().then((smothie) => console.log(smothie));

// const makeAsyncSmothie = async () => {
//   const apple = await getFruit("apple");
//   const peach = await getFruit("peach");

//   return [apple, peach];
// };

// makeAsyncSmothie().then((smothie) => console.log(smothie));

/*
 * Исправляем ошибку паралельного исполнения
 */

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(""), ms));
};

const getFruit = async (name) => {
  const fruits = {
    apple: "🍎",
    peach: "🍑",
    grapes: "🍇",
  };

  await delay(1000);

  return fruits[name];
};

// const makeAsyncSmothie = async () => {
//   console.time("время на резолв промисов");

//   const apple = getFruit("apple");
//   const peach = getFruit("peach");
//   const grapes = getFruit("grapes");

//   const smothie = await Promise.all([apple, peach, grapes]);

//   console.timeEnd("время на резолв промисов");

//   return smothie;
// };

// makeAsyncSmothie().then((smothie) => console.log(smothie));

/*
 * Обработка ошибок
 */

const makeAsyncSmothie = async () => {
  try {
    const apple = getFruit("apple");
    const peach = getFruit("peach");

    const smothie = await Promise.all([apple, peach]);

    throw "Поломалось 💩";

    return smothie;
  } catch (error) {
    console.log("Error " + error);
    throw error;
  }
};

makeAsyncSmothie()
  .then((smothie) => console.log(smothie))
  .catch((error) => console.log(error));
