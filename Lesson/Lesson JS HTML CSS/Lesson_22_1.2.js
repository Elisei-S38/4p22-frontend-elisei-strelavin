'use strict'

const person = {
  firstName: 'Hooba',
  lastName: 'Booba'
}

console.log(Object.keys(person)); //  keys достаёт ключи

console.log(Object.values(person)); // values достаёт значения

console.log(Object.entries(person)); // entries всё целиком, ключи и значения

console.log('========================================');

Object.entries(person).forEach((entry) => {
  console.log(`Ключ: ${entry[0]}, Значение: ${entry[1]}`)
}); 

console.log('========================================');

Object.entries(person).forEach(([ key, value ]) => {
  console.log(`Ключ: ${key}, Значение: ${value}`)
}); 

// [ key, value ] имена придуманные