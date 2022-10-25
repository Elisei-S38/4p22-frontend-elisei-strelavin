'use strict'

console.log('Привет, Мир!');

// в JS - 8 основных типов данных, 7 примитивов и 1 сложно-составной тип.
const num = 5;  // первый тип - number , +/-(2^53 - 1)
console.log(typeof num);// 'number'

const floatNum = 5.2; // number , +/-(2^53 - 1)
const typeOfFloatNum = typeof floatNum;
console.log(typeOfFloatNum);

const bigNum = BigInt(9007100254740992); // второй тип - bigint, число произвольной длинны. 
console.log(typeof bigNum);

// третий тип
const strDoubleQuote = "String"; // строка в двойных ковычках.
const strSingleQuote = 'String'; // строка в одинарных ковычках.
const name = 'Hello! I\'m Elisey';
const quote = "He said: \"I wanna go home\"";
const strItalicQuote = `Hello, I have ${bigNum} apples`;
// экранирование, способ дла написания в тексте-коде '' и "", без ошибог и нарушения скрипта.
const  strWithApples = 'Hello, I have ' + bigNum + ' apples';
console.log(typeof strWithApples);

// Hello! I'm Elisey
// He said: "I wanna go home"

console.log(strItalicQuote);

console.log(strWithApples);

const isVisible = true; // четвертый тип - boolean
const isHidden = false; // четвёртый тип - boolean
const hasApples = true;
// Данный тип обычгно начинает своё наименование с is или has
console.log(typeof hasApples);

//---------------------------------------------

const someConstant = null; // пятый  тип  null
// let someConstant = null; // пятый  тип  null

// шестой тип
let someVeriable; // значение undefined
// let someVeriable = undefined; // значение undefined - если переменной не было объявлено никакое значение, оно изначально undefined.(не определенно)
console.log(someConstant);
console.log(someVeriable);

console.log(typeof someConstant);
console.log(typeof someVeriable);

// symbol - седьмой тип

