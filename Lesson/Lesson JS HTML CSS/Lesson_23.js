'use strict'
// МАССИВЫ
// фильтр - filter()
// .filter((item, index, array) => {}) - в навзвании параметров важен порядок, а название может быть любым(своим). В данном случае: первый параметр - это объект, второй параметр - это индекс, третий параметр - это массив

const chelseaSquad = [
  {
    firstName: 'Kepa',
    lastName: 'Arrizabalaga'
  },
  {
    firstName: 'Reece',
    lastName: 'James'
  },
  {
    firstName: 'Cesar',
    lastName: 'Azpilicueta'
  }
];

// const filteredArray = chelseaSquad.filter((item, index, array) => {});

// в случае ниже последние два нам не нужны
const filteredArray = chelseaSquad.filter((item) => {
  return item.lastName[0] === 'A';
});
// мы берем текущий объект(item), берём его свойство(lastName), поскольку lastName это у нас строчка, берём нулевой элемент строки и приравниваем его к простой строчке с одним символом анг. 'A'

console.log(filteredArray);

console.log('============================================');

function deleteFormArray(array = [], index = 0) {
  return array.filter((item, innerIndex) => {
    return index !== innerIndex;
  })
}

// Особенность стрелочной фукции(сокращённый вариант)
// function deleteFormArray(array = [], index = 0) {
//   return array.filter((item, innerIndex) => index !== innerIndex);
// }

const chelseaSquad1 = [
  {
    firstName: 'Kepa',
    lastName: 'Arrizabalaga'
  },
  {
    firstName: 'Reece',
    lastName: 'James'
  },
  {
    firstName: 'Cesar',
    lastName: 'Azpilicueta'
  }
];
console.log(chelseaSquad1);

const changedArray1 = deleteFormArray(chelseaSquad1, 1);

console.log(changedArray1);

console.log('============================================');


// MAP - перписывает внутренности массива
// .map((item, index, array)) так же имеет три параметра
// преписывает внутренности и возвращает новый массив, который мы сохраняем, в данном случае в (const changedArray2)
// мы так же пробегаемся по каждому элементу, но мы можем его поменять. То что будет возвращено это функцией будет поставлено вместо этого item.  Можем добавить поле для этого объекта, удалить ненужное поле или изменить его название 

const chelseaSquad2 = [
  {
    firstName: 'Kepa',
    lastName: 'Arrizabalaga'
  },
  {
    firstName: 'Reece',
    lastName: 'James'
  },
  {
    firstName: 'Cesar',
    lastName: 'Azpilicueta'
  }
];
console.log(chelseaSquad2);

// здесь мы производим замену firstName на name и lastName на sureName 
// const changedArray2 = chelseaSquad2.map((item) => {
//   return {
//     name: item.firstName,
//     sureName: item.lastName
//   };
// });

// другой вариан 
//  тут мы убрали firstName и lastName
// const changedArray2 = chelseaSquad2.map((item) => {
//   return `${item.firstName} ${item.lastName}`;
// });


const changedArray2 = chelseaSquad2.map((item, index) => {
  return {
    ...item, // копируем всё через spread
    // item: firstName, //  или прописываем всё отдельно
    // item:lastName,
    id: index
  }
});

console.log(changedArray2);

console.log('============================================');

// reduce - с помощью него мы также пробегаем по всем элементам массива. набираем данные и собираем их в accumulator и этот accumulator возвращается в данном случае в const reducedArray
// отличается набор параметров
// первый параметр accumulator
// второй параметр item
// третий параметр index
// четвертый пераметр array

const chelseaSquad3 = [
  {
    firstName: 'Kepa',
    lastName: 'Arrizabalaga'
  },
  {
    firstName: 'Reece',
    lastName: 'James'
  },
  {
    firstName: 'Cesar',
    lastName: 'Azpilicueta'
  }
];
console.log(chelseaSquad3);

// первым аргументом reduce, мы обязательно должины вернуть(return) accumulator, после того как мы с ним что-то сделали, перед тем как его вернуть в него нужно что-то добавить
const reducedArray = chelseaSquad3.reduce((accumulator, item, index) => {
  accumulator += `${item.firstName} ${item.lastName}, `;
  return accumulator;
}, '' );
// после функции, после неё вторым аргуменьом reduce принимает изначальное значение accumulator, что бы мы могли с ним работать. Это может быть:
// 0 - если мы хотим получить (число)
// {} - если мы хотим получить (объект)
// [] - если мы хотим получить (массив)
// '' - это может быть (строка) пустая, если мы хотим набрать какую-то строку 
console.log(reducedArray);
// -------------------------------------------------------

const chelseaSquad4 = [
  {
    firstName: 'Kepa',
    lastName: 'Arrizabalaga'
  },
  {
    firstName: 'Reece',
    lastName: 'James'
  },
  {
    firstName: 'Cesar',
    lastName: 'Azpilicueta'
  }
];
console.log(chelseaSquad3);

const reducedArray2 = chelseaSquad4.reduce((accumulator, item, index, array) => {
  let resString = `${item.firstName} ${item.lastName}`;

  if (index !== array.length - 1) {
    resString += ', ';
  }

  accumulator += resString;

  return accumulator;
}, '' );


console.log(reducedArray2);