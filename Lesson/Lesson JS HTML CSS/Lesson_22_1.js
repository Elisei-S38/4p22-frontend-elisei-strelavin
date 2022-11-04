'use strict'

// Массив
// это набор значений(с одинаковым типом), но технически JS не запрещает хранить в нём всё что угодно(но для работы с массивами это может вызвать ряд проблем, с вызовом необходимой элемента) так что в маччиве должна храниться информация одного типа, одинакого

const arr = [];
const arr2 = ['яблоко', 'банан', 'персик'];

const objectList = [
  {
    firstName: 'Petr',
    lastName: 'Cech',
    birthDate: '20.05.1986'
  },
  {
    firstName: 'Branislav',
    lastName: 'Ivanovic'
  },
  {
    firstName: 'John',
    lastName: 'Terry'
  },
  {
    firstName: 'Ricardo',
    lastName: 'Carvalho'
  }
]

const element = objectList[3];
const element2 = objectList[objectList.length - 1];

const length = objectList.length;
console.log(length);

console.log(element.firstName);
console.log(element2);
// --------------------------------------------------
console.log('==============================================');

const objectList2 = [
  {
    firstName: 'Petr=========',
    lastName: 'Cech----------',
    birthDate: '20.05.1986'
  },
  {
    firstName: 'Branislav=======',
    lastName: 'Ivanovic-------'
  },
  {
    firstName: 'John========',
    lastName: 'Terry-------'
  },
  {
    firstName: 'Ricardo=======',
    lastName: 'Carvalho----------'
  },
  {
    firstName: 'Ashley======',
    lastName: 'Cole------'
  },
  {
    firstName: 'Mishael=======',
    lastName: 'Essien---------'
  }
];

for (let i = 0; i < objectList2.length; i++) {
  console.log(objectList2[i].firstName);
};
// -----------------------------------
console.log('==============================================');

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
  sum += numberList[i];
};

console.log(sum);
// -----------------------------------
console.log('==============================================');

for (let i = 0; i < objectList2.length; i++) { // вариант 1
  console.log(objectList2[i].firstName);
};

console.log('==============================================');

for (let i = 0; i < objectList2.length; i++) { // вариант 1
  console.log('Итерация цикла======', i); 
  console.log(`${i + 1}. ${objectList2[i].firstName}`)

  if (i >= 3) {
    break;
  }
};

console.log('==============================================');

// варианты того как можно вытащить необходимый элемент из массыва

objectList2.forEach((item) => { //вариант 2
  console.log(item.firstName);
});

console.log('==============================================');

objectList2.forEach((item) => { //вариант 2
  console.log(item.lastName);
});

console.log('==============================================');

// objectList2.forEach((elem, index, array) => {
//   console.log('Итерация цикла', index); 
//   console.log(`${index + 1}. ${elem.firstName}`);

//   if (index >= 3) {  // для вывода только 4 первых элементов
//     console.log(array);
//     return;
//     }
// }); // =========данный способ вывода цикла не рабочий========

console.log('==============================================');

objectList2.forEach((elem, index, objectList2) => { 
  // console.log(objectList2);
  console.log(`${index + 1}. ${elem.firstName}`);
});
// ----------------------------------------------

