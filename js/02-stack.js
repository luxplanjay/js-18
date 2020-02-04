/*
  Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

const x = 10;
/*
  Global env
    Record: {x: 10}
    Parent: null
*/

/*
  Записывается в момент объявления функции
  [[Environment]] = Global env
*/
const foo = function(z) {
  /*
    Foo env - создается в момент вызова функции
      Record: {z: 30}
      Parent: Global env
  */

  const x = 100;
  /*
    Foo env - создается в момент вызова функции
      Record: {z: 30, x: 100}
      Parent: Global env
  */

  return x + y + z;
};
/*
  Global env
    Record: {x: 10, foo: <function>}
    Parent: null
*/

const y = 20;
/*
  Global env
    Record: {x: 10, y:20, foo: <function>}
    Parent: null
*/

console.log(foo(30)); // 150
