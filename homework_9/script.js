'use strict'

  function makeFibonacciFunction() {
    let a = 0;
    let b = 1;
    let c = a + b;

    return function fibonacciFunction() {
      a = b;
      b = c;
      c = a + b;

      return a;
    };
    };

const fibonacci0 = makeFibonacciFunction();

console.log(fibonacci0()); // 1
console.log(fibonacci0()); // 1
console.log(fibonacci0()); // 2
console.log(fibonacci0()); // 3
console.log(fibonacci0()); // 5