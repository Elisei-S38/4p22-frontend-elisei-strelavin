'use strict'

// преобразование типов

// существует 3 основных типа
// строковый
// логический
// числовой

//------------------------------------------

// СТРОКОВОЙ тип преоброзование

const num = 5;
const bool = true;
// const bool = false;

const strFromNum = String(num);
// const strFromNum = '' + num;
console.log(typeof strFromNum);

const strFromBool = String(bool);
console.log(strFromBool);

// в данных примепах показано, что любое строку можно перевести к строковый тип

//-----------------------------------------------

// ЧИСЛОВОЙ Тип

const str = '5.5';
// const str = '5.5wasd';
// const bool = true;  // с этим значением будет 1
// const bool = false;   // с данным значением будет 0

const numberFromStr = Number(str);  //можно так или так
// const numberFromStr = +str;
console.log(numberFromStr);
console.log(typeof numberFromStr);

const numberFromBool = Number(bool);    //можно так или так
// const numberFromBool = +bool;
console.log(numberFromBool);

//----------------------------------------

// Булевский тип преоброзования

const str1 = 'lkmlkm';
const num2 = 5;

const boolFromStr = Boolean(str1);
console.log(boolFromStr);

const boolFromNum = Boolean(num2);
console.log(boolFromNum);

// любое преоброзование BOOLEAN даст true, кроме-> 
// -> falsey - значений
// 0, null, undefined, ''-пустая строка, NaN