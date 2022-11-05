'use strict'
// методы МАССИВОВ
// reduce

// Set


const artNumbers = [
  {
    x: 5,
    y: 10
  },
  {
    x: 15,
    y: 20
  },
  {
    x: 39,
    y: 27
  }
];

// (x0 + y0) * (x1 + y1) * (x2 + y2)

const result = artNumbers.reduce((acc, item, index, array) => {
  acc *= (item.x + item.y);

  return acc;
}, 1)

console.log(result);

console.log('===================================================');

// reduce, применение для удаления элементов
// так посчитать сколько раз повторяется

const arr = ['банан', 'яблоко', 'яблоко'];

// const result1 = arr.reduce((acc, item) => {
//   acc[item] = '';

//   return acc;
// }, {});

const result1 = Object.keys(arr.reduce((acc, item) => {
  acc[item] = ''; // удаление повторяегося элемента

  return acc;
}, {}));

console.log(result1);

console.log('===================================================');

// данный способ используется очень редко
const result2 = arr.reduce((acc, item) => {
  acc[item] = acc[item] ? acc[item] += 1 : 1;

  return acc;
}, {});

console.log(result2);

console.log('===================================================');

// Set - это почти тоже самое что и массив. не может содержать повторяющихся значений, Но объекты не сравниваются на равенство, как простые строки, не смотря на одинаковые ключи

const set = new Set();

set.add('яблоко'); //данное значение удалено так как совпадает со следующим
set.add('яблоко');
set.add('банан');
set.add('ананас');

set.add({ key: 'яблоко '});
set.add({ key: 'яблоко '});
set.add({ key: 'банан '});

console.log(set);

// set.clear(); // можно очистить полностью весь set

set.delete({ key: 'яблоко '}); // удалить какой-то конкретный элемент, указав его значение, но в даном случае он не удалится

set.delete('ананас');


console.log(set);
console.log(set.size);