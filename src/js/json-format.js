const book = {
  name: 'Охота на фазана',
  author: 'Марта Кэтра',
  genre: 'детектив',
  pageCount: 724,
  publisher: 'ООО Астрель',
};

console.log(book);
console.log(typeof book);

const string = JSON.stringify(book);

console.log(string);
console.log(typeof string);

const parsed = JSON.parse(string);

console.log(parsed);
console.log(typeof parsed);
