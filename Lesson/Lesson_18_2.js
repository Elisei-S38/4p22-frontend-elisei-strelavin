'use strict'

// ВЫРАЖЕНИЕ
// операторы - сиволы операциии '+/-', '* or /'
// операнды - числа с которыми производится операция
// 5(операнд) +(оператор) 10(опреранд) 
//типы операторов унарные и бинарные 
// *, /, -, + - там где требуется два операнда - это бинарные 
// +sum - унарный оператор - это где есть оператор и операнд

//  Математика 
const result = 5 + 10 * 5 / 10 - 7;
console.log(result);

// const division = 15 % 4; // данным способом можно вычеслить убрав остаток 
const division = 15 % 4 * result; // данным способом можно вычеслить убрав остаток 
console.log(division);

const pow = 5 ** 2; //возведение в степень
console.log(pow);

// const pow1 = 4 ** 3; 
// console.log(pow1);

const res = 5 - '12345';
console.log(res)


const divisionByZero = BigInt(9.0071993e+15);
// const divisionByZero = 1 + 9.0071993e+15;
// const divisionByZero = 1 / 9.0071993e+15;
console.log(divisionByZero);

// Сокращённая Арифметика

let n = 1;
// n = n + 2;
// n = n * 3;
// n *= 3; // n = n * 3;
// n += 3; // n = n + 3;
// n /= 3; // n = n / 3;
// n -= 3; // n = n - 3;
// console.log(n);

// n++; // Инкримент (постфикс)
// n++;
// n--; // декримент (постфикс)

// --n;// декримент (префикс)
// ++n;// декримент (префикс)
// console.log(n);

const resq = n++;
// const resw = ++n;

console.log(resq);
// console.log(resw);

// const smth = Math. 