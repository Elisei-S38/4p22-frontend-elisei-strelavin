'use strict'

// console.log(2 + 1);

// console.log('Hello, world!');
// console.log('Hello, world!2');

// var someVariable = 'Hello, World!'; var  не используется так как устарел. Использовался для констант и переменных
// let someVariable = 'Hello World';
// let переменная
// const someConstant ='Hello World';
// const переменная, но постоянная 

// console.log(someVariable);

// const a = 5;
// const b = 6;
// console.log((a + b) / a);

// let c = 7;
// c = 8;
// console.log(c)

// console.log('1' + 1);

const circle = document.querySelector('.circle');
let isMoving = false;

document.addEventListener('mousemove', (event) => {
    // console.log(event);
    if (!isMoving) {
    return;
    }
    circle.style.left = `${event.clientX}px`;
    circle.style.top = `${event.clientY}px`;
});

circle.addEventListener('click', () => {
  isMoving = !isMoving;
});