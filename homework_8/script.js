'use strict'

const button = document.getElementById('equals');
const resultWindow = document.getElementById('resultWindow');

button.addEventListener('click', (event) => { })

function countingFunction() {
  const numb1 = document.getElementById('number1');
  const operator = document.getElementById('action');
  const numb2 = document.getElementById('number2');
  let result;

  if (numb1 === "") {
    resultWindow.innerText = "Первое число не указаано";
    return console.log("Первое число не указаано");
  }
  
  if (numb2 === "") {
    resultWindow.innerText = "Второе число не указаано";
    return console.log("Второе число не указаано");
  }

  if (numb1 === " ") {
    resultWindow.innerText = "Первое число не указаано";
    return console.log("Первое число не указаано");
  }

  if (numb2 === " ") {
    resultWindow.innerText = "Второе число не указаано";
    return console.log("Второе число не указаано");
  }

  if (isNaN(numb1) === true || isNaN(numb2) === true) {
    resultWindow.innerText = "Некорректный вводчисел";
    return console.log("Некорректный вводчисел");
  }

  if (operator === "") {
    resultWindow.innerText = "Не введён знак";
    return console.log("Не введён знак");
  }

  if (operator === " ") {
    resultWindow.innerText = "Не введён знак";
    return console.log("Не введён знак");
  }


  switch (operator) {
    case "": return console.log('Не введён знак'); break;
    case '+': result = Number(numb1) + Number(numb2); break;
    case '-': result = Number(numb1) - Number(numb2); break;
    case '*': result = Number(numb1) * Number(numb2); break;
    case '/': result = Number(numb1) / Number(numb2); break;
    default: return resultWindow.innerText = "Программа не поддерживает такую операцию";
    console.log("Программа не поддерживает такую операцию"); break;
    }

    if (isNaN(result)) {
      resultWindow.innerText = "Некорректный ввод чисел";
      return console.log("Некорректный ввод чисел");
    }

    if (result === -Infinity || result === Infinity) {
      resultWindow.innerText = "Операция некорректна";
      console.log("Операция некорректна");
    } 
    
    else {
      resultWindow.innerText = result;
      console.log(result);
    }
  
}
