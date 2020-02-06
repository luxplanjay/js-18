const showTag = function(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
  console.log('this: ', this);
  console.log('this.tag: ', this.tag);
};

// const mango = {
//   tag: 'Mango',
// };

// const poly = {
//   tag: 'Poly',
// };

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 5, 10, 15);

// showTag.apply(mango, [1, 2, 3]);
// showTag.apply(poly, [5, 10, 15]);

// const showMangoTag = showTag.bind(mango);
// const showPolyTag = showTag.bind(poly);
// showMangoTag(1, 2, 3);
// showPolyTag(5, 10, 15);

// =============

// const mango = {
//   tag: 'Mango',
//   showTag() {
//     console.log(this);
//   },
// };

// const poly = {
//   tag: 'Poly',
// };

// mango.showTag.call(poly);

// const showPolyTag = mango.showTag.bind(poly);

// showPolyTag();
