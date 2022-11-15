'use strict'

// Классы JS - это то  что описывает структуру объекта и позволяет создовать его конретные воплощения.
// constructor

// const person1 = {
//   firstName: 'John',
//   lastName: 'Smith',
//   age: 50,
//   sayHI: () => {
//     console.log('Hello!');
//   }
// };

// const person = new Person();

// console.log(person);

// // const person2 = {...person};
// // person2.firstName = 'Alexandr';
// // person2.lastName = 'Luthor';
// // person2.age = 27;

// // console.log(person2);

// const person2 = {
//   firstName: 'Alexandr',
//   lastName: 'Luthor',
//   age: 27,
//   sayHI: () => {
//     console.log('Hello!');
//   }
// };

// console.log(person2);

// const person3 = {
//   firstName: 'Lionel',
//   lastName: 'Luthor',
//   age: 65,
//   sayHI: () => {
//     console.log('Hello!');
//   }
// };

// console.log(person3);

// person.sayHI();

//------------------------------------------------

class Person {
  static PI = 3.14;
  _firstName = '';
  _lastName = '';
  _age = '';
  money = '';

  static toString(person) {
    return `${Person.PI} ${person._lastName} ${person._firstName}`;
  }

  constructor(firstName = '', lastName = '', age = '') {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set age(age) {
    this._age = +age;
  }

  get age() {
    return this._age ;
  }

  topUpAccount(count = 0) {
    this.money += count;
  }

  sayHi() {
    console.log('hello');
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

// const person = new Person('Alexander', 'Luthor', 27);
// const person2 = new Person('Lionel', 'Luthor', 65);

// // person.age = '50';

// person.topUpAccount(`${13654} y.e.`);

// // person.writeFullName();
// // person2.writeFullName();

// console.log(Person.PI);
// console.log(Person.toString(person));

// console.log(person.age);

class Employee extends Person{
  _taxNumber = '';

  constructor(firstName, lastName, age, taxNumber) {
    super(firstName, lastName, age);
    this._taxNumber = taxNumber;
  }

  getFullName () {
    return `${super.getFullName()} ${this._taxNumber}`;
  }
}

const employee = new Employee('Alexandr', 'Luthor', 27, '1234567890');

employee.topUpAccount(18765);

console.log(employee);

console.log(employee.getFullName());