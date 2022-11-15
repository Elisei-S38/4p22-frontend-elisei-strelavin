'use strict'

// const container = document.getElementById('container_id');

// container.style.width = '100px';
// container.style.height = '100px';
// container.style.backgroundColor = 'red';

// container.classList.add('some-class'); // добовляет класс
// container.classList.remove('some-class'); // удаляет класс
// container.classList.toggle('some-class'); //lдобовляет если нет, удаляет если есть 

//-------------------------------------------

const container = document.querySelector('.container');
// const container = document.querySelectorAll('.container');

// console.log({container});

// container.forEach((item) => {
//   console.log(item);
// });

// Какие события бывают в addEventListener:
// click
// mousedown - событие нажатия мыши(в зажатом состоянии)

container.addEventListener('click', (event) => {
  console.log('click')
  event.preventDefault();
});

container.addEventListener('mousedown', (event) => {
  console.log('mousedown')
});

container.addEventListener('mouseup', (event) => {
  console.log('mouseup')
});

//------------------------------------------

const input2 = document.querySelector('input[name=email_2]');

input2.addEventListener('keydown', (event) => {
  event.preventDefault();
  event.stopPropagation();
})

//==========================================
console.log('===================================')

const input = document.querySelector('input[name=email]');

console.log(input);

// input.addEventListener('input', () => {
//   console.log(input.value);
// })

input.addEventListener('input', (event) => {
  console.log(event.target.value);

  // регулярные выражения
  // const regEx = /\d/g; //d - в инпуте не работают цифры
  const regEx = /\D/g; //D - в инпуте не работают буквы

  event.target.value = event.target.value.replace(regEx, '')
});

//==========================================
console.log('===================================')

const box1 = document.querySelector('.box_1');
const box2 = document.querySelector('.box_2');
const box3 = document.querySelector('.box_3');

document.addEventListener('click', () => {
  console.log('document');
  // event.stopPropagation();
});

box1.addEventListener('click', (event)=> {
  console.log('box_1');
  // event.stopPropagation();
});

box2.addEventListener('click', (event)=> {
  console.log('box_2');
  // event.stopPropagation();
});

box3.addEventListener('click', (event)=> {
  console.log('box_3');
  // event.stopPropagation();
});

//----------------=-=-==-=-=-=-====-=-=-------------------

document.addEventListener('click', () => {
  console.log('document (capture)');
  // event.stopPropagation();
}, { capture: true });

box1.addEventListener('click', (event)=> {
  console.log('box_1 (capture)');
  // event.stopPropagation();
}, { capture: true });

box2.addEventListener('click', (event)=> {
  console.log('box_2 (capture)');
  // event.stopPropagation();
}, { capture: true });

box3.addEventListener('click', (event)=> {
  console.log('box_3 (capture)');
  // event.stopPropagation();
}, { capture: true });

