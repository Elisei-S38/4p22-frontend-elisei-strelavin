'use strict'

// МЕТОДЫ
// setTimeout - выполняет callback после паузы (1 раз)
// setInterval - выполняет callback через промежуток времени 

// необходимы что бы делать какие-то задачи с паузой или через какой-то промежуток времени

// setTimeout(() => {
//   console.log('Hello World! Timeout');
// }, 1000); //здесь указывается время вызова или вывода в милисекундах 1000 милсек= 1 сек. 

// setInterval(() => {
//   // console.log('Hello World! Interval');
// }, 1000);

//-------------------------------------------

function makeTimeoutFunction() {
  let i = 0;

  return () => {
    i++;
    console.log(`Вызвано ${i} раз`);
  };
};


const timeoutFunction = makeTimeoutFunction();
const interval = setInterval(timeoutFunction, 1000);
// что бы остановить setInterval нужно дать ему идентификатор(const interval), останавливать мы будем через clearInterval
// если написатьб просто clearInterval(interval); то setInterval не сработает ниразу. для этого нам понадобиться setTimeout, что бы запустить её через некоторое время

// setTimeout(() => {
//   clearInterval(interval);
// }, 3000);

// мотод через фун 
function stopInterval() {
  clearInterval(interval);
};

setInterval(stopInterval, 3000);