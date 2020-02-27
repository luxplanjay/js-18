import users from './users.js';

console.log(users);

// https://github.com/goitacademy/javascript-homework/blob/master/homework-06/users.js

const getUsersWithFriend = (users, friendName) => {
  return users.filter(({ friends }) => friends.includes(friendName));
};
