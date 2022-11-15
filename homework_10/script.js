'use strict'

console.log('-----------');
console.log('Пункт №1:');
console.log('-----------');

fetch('https://reqres.in/api/users?per_page=12')
  .then((response) => {
    return response.json()})
  .then((result) => {
    const userList = result.data;

    console.log(userList);

console.log('-----------');
console.log('Пункт №2:');
console.log('-----------');

for (let i = 0; i < userList.length; i += 1) {
  console.log(userList[i].last_name);
};

// userList.forEach((item) => {
//   console.log(item.last_name);
// });

console.log('-----------');
console.log('Пункт №3:');
console.log('-----------');

const filterLastName = userList.filter((item) => {
  return item.last_name[0] === 'F';
});

console.log(filterLastName);

console.log('-----------');
console.log('Пункт №4:');
console.log('-----------');

const reducedArray = userList.reduce((accumulator, item, index, array) => {
  let resString = `${item.first_name} ${item.last_name}`;

  if (index !== array.length - 1) {
    resString += ', ';
  } else {
    resString += '.';
  }

  accumulator += resString;

  return accumulator;
}, '');

console.log(`Наша база содержит данные следующих
пользователей: ${reducedArray}`);

console.log('-----------');
console.log('Пункт №5:');
console.log('-----------');

const listKeys = Object.keys(userList[0]);
// console.log(listKeys.join('\n'));

listKeys.forEach((item) => {
  console.log(item);
});

}).catch((error) => {
  console.log('Ошибка!!!' + error);
});