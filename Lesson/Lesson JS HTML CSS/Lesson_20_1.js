'use strict'

// ФУНКЦИЯ
// служит для того что бы выполнять какуюто часть кода несколько раз, но не как в цикле подрят, а когда необходимо выполнять некоторые действия. зачастуюя это действия которые выполняются больше одного раза в разных частях программы, в связи сразными событиями в коде, браузере, у пользователя.

//Название фукции должно отрожать то что она делает

//как можно объявлять функции

// 1) Function Declaration (объявление функции)
function sayHello() {
  console.log('Hello World');
}

// 2) Function Expression (предложение функции)
const sayHello2 = function () {
  console.log('Hello World!');
}
// в данной фукции мы объявляем константу, и нет смысла объявлять как-то по другому функцию ( но можно обЪявить Переменной ).
// сама функция является выражением и будет являться результатом.

// 3) Function Expression (lambda - стрелочная функция)
const sayHello3 = () => {
  console.log('hello world');
}

// 4) IIFE - Immediately Invoked Function Expression
// перевод -  немедленное вызванное функциональное выражение
// ему не присваивается никакого имении и оно выполняется сразу после того как его написали.
(function() {
  console.log('Hello from IIFE');
})();

sayHello();
sayHello2();
sayHello3(); //  это вызов функции, без нее она не отобразится в консоли

//-------------------------------------------------------------

// 1) Function Declaration (объявление функции)

function sayHelloToUser(firstName = '', lastName = '') {
  console.log(`Привет, ${firstName} ${lastName}`);
}

sayHelloToUser('Иван');
sayHelloToUser('Elon', 'Musk');

// ------------------------------------------

function sayUserName(userName = 'Гость') {
  console.log(`Привет, ${userName}`);
}

sayUserName();
sayUserName('Илон');

// -----------------------------------------------

(function(name) {
  console.log('Hello from IIFE', name);
})('Андрей');

// -----------------------------------------

function sayUserName1(userName = 'Гость') {
  const someVariable = 39;
  console.log(`Привет, ${userName}`);
  console.log(someVariable);
}

// console.log(someVariable); пример**

sayUserName1();
sayUserName1('Антонио');


// значение по умолчанию можно поставить через ровно и пустая строка - ковычки (пример: function sayHelloToUser(firstName, lastName = ''){})
// если убрать значение firstName или lastName без указания её по умолчанию, она будет undefined(неопределенный)
// переменнные к примеру userName доступны только в пределах функции в которой мы её используем, и за еепределами через console.log(userName); вывести её не получится.  как в примере**

let someVariable1 = '';

function sayUserName2(userName = 'Гость') {
  someVariable1 = 39;
  console.log(`Привет, ${userName}`);

  function inneerFunction() {
    console.log(someVariable1);
  }

  inneerFunction();
}

console.log(someVariable1); 

sayUserName2();
sayUserName2('Глеб');

// -------------------------------

let someVariable2 = '';

function sayUserName3(userName = 'Гость') {
  someVariable2 = 39;
  console.log(`Привет, ${userName}`);

  function inneerFunction1() {
    const someInnerFunctionVariablt = '';
    console.log(someVariable2);
  }

  inneerFunction1();
}

console.log(someVariable2); 

sayUserName3();
sayUserName3('Арминий');
// const someInnerFunctionVariablt = ''; не будет лоступна снаружи только внутри function

// ===================================

// var someVariable = 'Hello';

// function sayHello() {
//   var someVariable = 'HELLO';
//   console.log(someVariable);
// }

// sayHello();

if (true) {
  var someVariable = 'Hello';
}

console.log(someVariable);