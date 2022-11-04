'use strict'

// ОБЪЕКТЫ
// это составной тип

const person = {
  firstName: 'Andrew',
  lastName: 'Garfield',
  body: {
    age: 51,
    height: 185
  }
}

const person2 = {
  firstName: 'Andrew',
  lastName: 'Garfield',
  body: {
    age: 51,
    height: 185
  }
}

console.log(person.body.age);

// const person2 = person;
console.log(person2 === person);
// здесь сравниваются ссылки person2 = person, ссылки одинаковые, объект один и тот же в памяти, они будут равны. Какого-то реального сравнения ссылок здесть не происходит, он не проверяет все поля, у нас может быть куча полей и куча вложенностей, здесь псравниваются просто ссылки

// ------------------------------------------------

const person3 = {
  firstName: 'Anton',
  lastName: 'Hook',
  body: {
    age: 51,
    height: 185
  }
}

const person4 = person3;

person4.firstName = 'Antonio';

console.log(person3.firstName);

// Опциональная Цепочка===============================================

const person5 = {
  firstName: 'Anton',
  lastName: 'Hook',
  // body: {
  //   age: 51,
  //   height: 185
  // }
}

// if (person5.body) {
// console.log(person5.body.age);
// }
// через if (person5.body){} (если в person5 есть body, то он выведить нам через console.log(person5.body.age) возраст, если нет то в таком случае не будет ошибки) 

// опционпльная цепочка
console.log(person5?.body?.age);