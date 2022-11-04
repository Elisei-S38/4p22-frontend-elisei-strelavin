'use strict'

const num = 21;
// const num2 = 10;

// if (УСЛОВИЕ) {}  // (УСЛОВИЕ) всегда преобразовывается к Булевскому типу, это буле значение, даже если там просто есть строка

// if (num >= 5) {
//   console.log('Число больше или равно 5');
// }

// if (num >= 5 && num2 >= 10) {
//   console.log('Число больше или равно 5 и 10');
// }


// const num = 1;
// if (num >= 5) {
//   console.log('Число больше или равно 5');
// } else {
//   console.log('ИНАЧЕ');
// }


if (num <= 5) {
  console.log('Число больше или равно 5');
} else if (num <= 10) {
  console.log('Число больше или равно 10'); // данный метод не очень хороши и желательно обходится без него
} else if (num <= 20) {
  console.lig('Число больше или равно 20')
}


const age = 17;
const firstName = 'Pawel';
const lastName = 'Macivoda';

if (age > 18 && age < 40) {
  console.log('Ваш возраст от 18 до 40');
}

if ((firstName === 'Pawel' || firstName === 'Pavel') && age > 18) {  // "&&" имеет больший приоритет выполнения чем "||"
  console.log('Условие выполнилось');
}

//---------------------------------------------------------------

const someVariable = 'Значение 0';
// const someVariable = 'Значение 1';
// const someVariable = 'Значение 2';
// const someVariable = 'Значение 3';

switch (someVariable) {
  case 'Значение 1': console.log('1'); break;
  case 'Значение 2': console.log('2'); break;
  case 'Значение 3': console.log('3'); break;
  default: console.log('default');
}

switch (someVariable) {
  case 'Значение 1': {
    console.log('1');
  } break;

  case 'Значение 2': {
    console.log('2');
  } break;

  case 'Значение 3': {
    console.log('3');
  } break;

  default: console.log('default');
}

if (someVariable === 'Значение 1') {
  console.log('1');
} else if (someVariable === 'Значение 2') {
  console.log('2');
} else if (someVariable === 'Значение 3') {
  console.log('3');
} else {
  console.log('default');
}

//-------------------------------------------

const loginInput = document.getElementById('login');
const passwordInput = document.getElementById('password');
const button = document.getElementById('submit');

loginInput.addEventListener('input', (event) => {
  console.log(event.target.value);
})

passwordInput.addEventListener('input', (event) => {
  console.log(event.target.value);
})

button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(loginInput.value);
  console.log(passwordInput.value);

  if (loginInput.value === passwordInput.value) {
    console.log('значения совподают');
  } else {
    console.log('значения не совподают');
  }
})

console.log(loginInput.textContent);
console.log(loginInput.value);