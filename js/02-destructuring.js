// // const hotel = {
// //   name: 'Resort Hotel',
// //   stars: 5,
// //   capacity: 100,
// // };

// // const { name = '', stars = 1, capacity = 0 } = hotel;

// // console.log(stars);

// // console.log('Name: ', name);
// // console.log('Stars: ', stars);
// // console.log('Capacity: ', capacity);

// const showHotelInfo = function({ name, stars, capacity = 0 }) {
//   // const { name, stars, capacity } = hotelStats;

//   console.log('Name: ', name);
//   console.log('Stars: ', stars);
//   console.log('Capacity: ', capacity);
// };

// // showHotelInfo(hotel);

// // const hotel = {
// //   name: 'Resort Hotel',
// //   stars: 5,
// //   capacity: 100,
// // };

// // const { name: hotelName = 'qwe', stars, capacity } = hotel;
// // console.log(hotelName);

// /*
//  * Глубокая деструктуризация
//  */
// const profile = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
//   example: {
//     a: {
//       x: 1,
//       y: 2,
//     },
//   },
// };

// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
//   example: {
//     a: { x, y },
//   },
// } = profile;
// // const { followers, views, likes } = stats;

// console.log(name, tag, location, avatar, followers, views, likes);

// console.log(x, y);

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// console.log(blue);

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, location, ...restProps } = profile;

console.log(name, tag, location);
console.log(restProps);
console.log(profile);

// const a = { ...{ x: 1 }, ...{ y: 3 } };
