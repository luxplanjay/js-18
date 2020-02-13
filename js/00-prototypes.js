/*
 * Собственные свойства и for...in
 * Метод hasOwnProperty()
 */

const objA = {
  q: 5,
  z: 6,
};

const objB = Object.create(objA);

objB.x = 1;
objB.y = 2;

for (const key in objB) {
  if (objB.hasOwnProperty(key)) {
    console.log(key);
  }
}
