const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
};

// Перевірка роботи функції
const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];

console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [об'єкт Sharlene Bush, об'єкт Sheree Anthony]

console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [об'єкт Elma Head, об'єкт Sheree Anthony]

console.log(getUsersWithFriend(allUsers, 'Adrian Cross'));
// []
