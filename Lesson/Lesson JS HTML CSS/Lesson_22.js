'use strict'
// .assign
// spread
// JSON - JavaScript Object Natation (способ копирования)

const person =  {
  firstName: 'Andre',
  lastName: 'Borre'
}

const person2 = person;

console.log(person2 === person);
// в данном случае будет === true
// --------------------------------------------

const person3 =  {
  firstName: 'Andre',
  lastName: 'Borre'
}

const person4 = person;

console.log(person4 === person3);
// в данном случае будет === false
// лучше не присваивать значения одной ссылки другой, воизбежание проблем
//---------------------------------------------

const person5 =  {
  firstName: 'Andre',
  lastName: 'Borre'
}

const employee = {
  lastName: 'GalilEmployee',
  id: 2143413,
  personalInfo: {
    passportNumber: 1231234251,
    telNumber: 89123455223,
    taxNumber: '123123123123123',
  }
}

// const person6 = Object.assign({}, person5);
// .assign выполняет копирование, ({}, person5), {} - пустой обект в который копируется всё содержимое person5
const person6 = Object.assign({}, person5, employee); //вариант 1

// spread - метод копирования объекта, его полей и их значений
const person7 = { ...person5, ...employee, personalInfo: { ...employee.personalInfo } }; //вариант 2 копирования

person7.personalInfo.passportNumber = 0;

// console.log(person6 === person5);

// person6.firstName = 'Andronyn';
// person6.lastName = 'Broone';

console.log(person5.firstName);

console.log(person6.firstName);
console.log(person6);

console.log(person7);
// -------------------------------------------------

// JSON - JavaScript Object Natation (способ копирования)
const stringJson = JSON.stringify(employee);
console.log(stringJson)

const employee2 = JSON.parse(stringJson);
console.log(employee2);

employee2.personalInfo.passportNumber = 0;

console.log(employee.personalInfo.passportNumber);
console.log(employee2.personalInfo.passportNumber);