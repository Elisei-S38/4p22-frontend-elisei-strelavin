'use strict'

const button = document.getElementById('equals');
const resultBox = document.getElementById('resultWindow');

button.addEventListener('click', (event) => {
  event.preventDefault()

  const numb1 = document.getElementById('number1').value;
  const operator = document.getElementById('action').value;
  const numb2 = document.getElementById('number2').value;
  let result;

  if (numb1 === '') {
    resultBox.innerText = 'Первое число не указаано'
    return console.log('Первое число не указаано');
  };

  if (numb1 === ' ') {
    resultBox.innerText = 'Первое число не указаано';
    return console.log('Первое число не указаано');
  };

  if (numb2 === '') {
    resultBox.innerText = 'Второе число не указаано';
    return console.log('Второе число не указаано');
  };

  if (numb2 === ' ') {
    resultBox.innerText = 'Второе число не указаано';
    return  console.log('Второе число не указаано');
  };

  if (operator === '') {
    resultBox.innerText = 'Не введён знак';
    return console.log('Не введён знак');
  };

  if (operator === ' ') {
    resultBox.innerText = 'Не введён знак';
    return console.log('Не введён знак');
  };

  if (isNaN(numb1) === true || isNaN(numb2) === true) {
    resultBox.innerText = 'Некорректный ввод чисел';
    return console.log('Некорректный ввод чисел');
  };

  switch (operator) {
    case '': {
      console.log('Не введён знак');
    } break;
    case '+': {
      result = Number(numb1) + Number(numb2);
    } break;
    case '-': {
      result = Number(numb1) - Number(numb2);
    } break;
    case '*': {
      result = Number(numb1) * Number(numb2);
    } break;
    case '/': {
      result = Number(numb1) / Number(numb2);
    } break;
    default: { 
      resultBox.innerText = 'Программа не поддерживает такую операцию';
      return console.log('Программа не поддерживает такую операцию');
  }};

  // ===================================================
  if ((numb1 === '0') / (numb2 === '0')) {
    resultBox.innerText = 'Операция некорректна';
    return console.log('Операция некорректна');
  };
  // ===================================================

  if (isNaN(result)) {
    resultBox.innerText = 'Некорректный ввод чисел';
    return console.log('Некорректный ввод чисел');
  };

  if (result === Infinity || result === -Infinity) {
    resultBox.innerText = 'Операция некорректна';
    console.log('Операция некорректна');
  } else {
  resultBox.innerText = result;
  console.log(result);
}});