'use strict'

// Замыкание - Closures
// способность функции запоминать переменные из контекста где она была создана

let funcs;

// let i;

for (let i = 0; i < 10; i++) {
// for (i = 0; i < 10; i++) {
  if (i === 5) {
    funcs = function () {
      console.log(i);
    }
  }
}

// console.log(i);
funcs();
// --------------------------------------

const button = document.getElementById('button');

const someVariable = 'Привет Мир!';
const someVariable1 = 'Привет Всем!';

button.addEventListener('click', function() {
  console.log(someVariable);
  console.log(someVariable1);
}); 

// ---------------------------------------

function foo() {
  let i = 10;

  return function () {
    console.log(i);
  }
}
(foo())();
// или вызываем другим способом
const func = foo();
func();

// ------------------

let funct;

if (true) {
  let i = 10;

  funct = function() {
    console.log(i);
  }
}

funct();