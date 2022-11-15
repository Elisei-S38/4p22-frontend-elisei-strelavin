'use strict'

const body = document.querySelector('body');

console.log(body);

const div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.background = 'red';
div.id = 'some-div';

body.appendChild(div);

setTimeout(() => {
  div.style.background = 'navy';
}, 1000);

const div2 = document.getElementById('some-div');

const someElement = document.createElement('span');
someElement.textContent = 'Hello, World!';

div2.appendChild(someElement);

console.log(div2);