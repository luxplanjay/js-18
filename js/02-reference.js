// Ссылочный тип

// let a = 5;
// let b = a;

// console.log('a', a);
// console.log('b', b);

// a = 10;

// console.log('a', a);
// console.log('b', b);

const a = [1, 2, 3];
const b = a;
console.log('a', a);
console.log('b', b);

a[0] = 10;

console.log('a', a);
console.log('b', b);

b[1] = 20;

console.log('a', a);
console.log('b', b);

console.log('a === b', a === b);

const c = [1, 2, 3];
const d = [1, 2, 3];

console.log('c === d', c === d);
