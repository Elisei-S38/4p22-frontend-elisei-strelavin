'use strict'
// Массив: методы
const arr = [];
const arr2 = ['яблоко', 'банан', 'персик'];

const objectList = [
  {
    firstName: 'Petr===',
    lastName: 'Cech---',
    birthDate: '20.05.1986'
  },
  {
    firstName: 'Branislav===',
    lastName: 'Ivanovic---'
  },
  {
    firstName: 'John===',
    lastName: 'Terry---'
  },
  {
    firstName: 'Ricardo===',
    lastName: 'Carvalho---'
  },
  {
    firstName: 'Ashley===',
    lastName: 'Cole---'
  },
  {
    firstName: 'Mishael===',
    lastName: 'Essien---'
  }
];

//1. push - с его помощью мы добовляем элемент в конец массива
objectList.push({
  firstName: 'Frank',
  lastName: 'Lampard'
});

arr2.push('Ананас');

console.log(objectList);
console.log(arr2);

console.log('==============================================');

//2. pop - удаляет элемент с конца массива
// objectList.pop() // для удаления последнего эелемента
const lastFIO = objectList.pop() //для вывода удалённого элемента
console.log(lastFIO);

// arr2.pop();
const lastElem = arr2.pop();
console.log(lastElem);

console.log(objectList);
console.log(arr2);

console.log('==============================================');

// unshift - добовляетс элемент в начало массива
arr2.unshift('Апельсин')
console.log(arr2);

objectList.unshift ({
  firstName: 'Karl',
  lastName: 'Goober'
});
console.log(objectList);

console.log('==============================================');

// shift - удаляет из начала массива
// arr2.shift();
const firstElem = arr2.shift();
console.log(firstElem);
console.log(arr2);

const firstEle = objectList.shift();
console.log(firstEle);
console.log(objectList);

console.log('==============================================');

// indexOf - индекс элемента
const index = arr2.indexOf('банан');
console.log(index);

console.log('==============================================');

// findIndex - найти индекс элемента
const index2 = objectList.findIndex((item) => {
  return item.firstName === 'John===';
});
console.log(index2); // если не найдёт совпадений, то напишет -1

console.log('==============================================');

// find - поиск объекта в массиве 
const elem = objectList.find((item) => {
  return item.lastName === 'Terry---';
});

console.log(elem); // если не найдет - это будет undefiend

console.log('==============================================');

//  splice - удаление arr2.splice(2, 1) первое число это индекс начала удаляемого элемента, а второе колличество удаляемых элементов(меняет массив)
// arr2.splice(1, 2);
// console.log(arr2);

objectList.splice(2, 2);
console.log(objectList);

console.log('==============================================');

//  slice - тоже удаляет (не меняет массив) arr2.slice(2, 3) удаляя 2 включительно, 3 не включительно

// =========не очень понял как работает=======

const arr3 = arr2.slice(1, 2);
console.log(arr3);

const delet = objectList.slice(1, 4); 
console.log(delet);

console.log('==============================================');