'use strict'

// Возвращаемое значение функции

function sayHello () {
  console.log('Hello WORLD!')
}

function getSum(a, b) {
  // return a + b; первый вариант

  const result = a + b; // второй вариант
  return result;
  console.log(result); //после return код не работает, так как является выходом из функции
}

// const random = Math.random; до изменений
const sum = getSum(4, 5);
const sum2 = getSum(4, 5) + getSum(5, 6);
console.log(sum);
console.log(sum2);

function getSum(a, b) {
  // if (!a || !b) {
  //   return 0;    //без этой части кода результат будет NaN
  // }

  return a + b;
}

const sum3 = getSum(4, 5) + getSum(5, 6) + getSum();
console.log(sum3);