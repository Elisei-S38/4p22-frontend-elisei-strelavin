'use strict'

// Promise - ипользуется для получения данных сервера(в рамках нашего курса)
//создаётся для обработки каких-то синхронных вычислений и мы можем ждать когда эти вычисления, каким-то образом закончаться 

// внутри обязательно надо создать функцию callBack которая будет вызываться при создании Promise
//  (resolve, reject) это два параметра котрые попадают в эту функцию(название не важно)
// первый параметр resolve - это функция, которая завершает выполнение Promise успешно
// второй параметр reject - это функция, которая завершает выполнение Promise отменой
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(39);
    // reject('error');
  }, 1000);
});

// .then фукция которая выполняется когда Promise завершился успешно
// .catch фукция которая выполняется когда Promise завершился не успешно
// .finally фукция которая выполняется в любом случае. Иногда требуется чтобы сбросить к примеру анимацию с кнопки
promise.then((result) => {
  console.log('Промис завершился успешно!', result);
}).catch((e) => {
  console.log('Промис завершился неудачно!!!', e);
}).finally(() => {
  setTimeout(() => {
    console.log('Промис завершился.');
  }, 1200);
});

// =======================================================
console.log('==============================')

// async // определяет (а?)синхронные функции, которые будут выполняться и  возвращаtь текущий созданный Промис
// await // с помощью await можно ждать выполнения этой фукции. создаётся только внутри это асинхронной функции.

async function asyncFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve('Promise result');
      resolve('result');
      // reject('error');
    }, 1000);
  });
  
  promise.then((result) => {
      console.log('Промис завершился успешно!', result);
  }).catch((e) => {
      console.log('Промис завершился неудачно!!!', e);
  }).finally(() => {
      setTimeout(() => {
        console.log('Промис завершился.');
    }, 1200);
  });



  // try {
  //   const result = await promise;
  //   console.log(result);
  // } catch (e) {
  //   result = e;
  // } finally {
  //   setTimeout(() => {
  //   console.log('finally');
  //   }, 500);
  // };

//----------------------------------------

  // let result = null;
  // try {
  //   result = await promise;
  // } catch (e) {
  //   result = e;
  // };

  // console.log(result);
};

asyncFunction();