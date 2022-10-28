'usr strict'

// const str = 'строка'.toUpperCase();
// const str2 = 'СтрОкА'.toLowerCase();

// console.log(str);
// console.log(str2);
// console.log('строка'.toUpperCase()); //.toUpperCase() всё большими буквами 
// console.log('СтрОкА'.toLowerCase()); //.toLowerCase() всё маленькими буквами

// console.log('Строка'.includes('Стр'));
// console.log('Строка'.includes('рок'));


// console.log('Строка'.startsWith('Стр'));
// console.log('Строка'.startsWith('рок'));

// console.log('Строка'.endsWith('ока'));
// console.log('Строка'.endsWith('рок'));
// console.log('Строка'.endsWith('строка'));


// const str = 'строка';
// const strUpper = str.toUpperCase();
// console.log(str.toUpperCase());
// console.log(str);
// console.log(strUpper);


// console.log('А роза упала на лапу Азора'.replace('А', 'а'));
// console.log('А роза упала на лапу Азора'.replaceAll('А', 'а'));


// const str = '           строка с пробелами по краям             ';
// console.log(str.trim()); 
// .trim() эта фугкция уберает пробелы сначала и сконца строки

// const str = 'Привет!';
// console.log(str[0]);
// console.log(str[6]);
// console.log(str.length);
// console.log(str.substring(2, 4));
 // выводит символы включительно с 2 по 3 (4 не включителен)
// console.log(str.substring(2, 6));



const startsWith = ('' + ('  Строка   '.trim().toLowerCase().startsWith('стр'))).toUpperCase();
// const str = `Строка начинается с "стр": ${startsWith}`;   //устаревший вариант, который не поддерживается
const str = 'Строка начинается с "стр":' .concat(startsWith);

console.log(startsWith);
console.log(str);