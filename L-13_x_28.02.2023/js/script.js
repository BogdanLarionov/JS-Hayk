// // используя map формировать массив в котором все
// // числа меньше 10 должны быть увеличены на 10

// // результат
// // [12, 14, 32, 15, 14, 12, 65]

// const number = [12, 4, 32, 5, 4, 2, 65];
// const result = number.map(function (item) {
//   if (item < 10) {
//     item += 10;
//   }
//   return item;
// });
// console.log(result);
// // -------------------------------------------------------------
// // используя метод filter сформировать массив из четных чисел

// // cпособ_1
// // длинная запись, так лучше не писать!
// const number = [12, 4, 32, 5, 4, 2, 65];
// const result = number.filter(function (item) {
//   if (item % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(result); // [ 12, 4, 32, 4, 2 ]

// // cпособ_2
// const number = [12, 4, 32, 5, 4, 2, 65];
// const result = number.filter(function (item) {
//   return item % 2 === 0;
// });
// console.log(result); // [ 12, 4, 32, 4, 2 ]
// // -------------------------------------------------------------
// // используя reduce найти сумму всех четных чисел

// // cпособ_1
// const numbers = [12, 4, 32, 5, 4, 2, 65];
// const result = numbers.reduce((acc, item) => {
//   if (item % 2 === 0) {
//     acc += item;
//   }
//   return item;
// }, 0);
// console.log(result); // 54

// // cпособ_2
// const number = [12, 4, 32, 5, 4, 2, 65];
// const sumOfEvens = number.reduce((acc, cur) => {
//   if (cur % 2 === 0) {
//     // проверяем, является ли текущее число четным
//     return acc + cur; // если да, то добавляем его к общей сумме
//   } else {
//     return acc; // если нет, то просто возвращаем текущую сумму
//   }
// }, 0);
// console.log(sumOfEvens); // выведет 54 (т.к. сумма четных чисел 12 + 4 + 32 + 4 + 2 = 54)

// // cпособ_3
// const numbers = [12, 4, 32, 5, 4, 2, 65];
// const result = numbers.reduce(function (acc, item) {
//   return acc + (item % 2 === 0 ? item : 0);
// }, 0);
// console.log(result); // 54
// // -------------------------------------------------------------
// // используя методы массивов сформировать массив из наименований товаров
// // ['велосипед', 'ролики', 'самокат', 'лыжи', 'сноуборд']

// // cпособ_1
// const products = [
//   { id: 1, title: "велосипед", price: 5000, discount: 12 },
//   { id: 2, title: "ролики", price: 1000, discount: 0 },
//   { id: 3, title: "самокат", price: 900, discount: 5 },
//   { id: 4, title: "лыжи", price: 1200, discount: 0 },
//   { id: 5, title: "сноуборд", price: 1500, discount: 10 },
// ];
// const result = products.map(function ({ title }) {
//   return title;
// });
// console.log(result); // [ 'велосипед', 'ролики', 'самокат', 'лыжи', 'сноуборд' ]

// // cпособ_2
// const products = [
//   { id: 1, title: "велосипед", price: 5000, discount: 12 },
//   { id: 2, title: "ролики", price: 1000, discount: 0 },
//   { id: 3, title: "самокат", price: 900, discount: 5 },
//   { id: 4, title: "лыжи", price: 1200, discount: 0 },
//   { id: 5, title: "сноуборд", price: 1500, discount: 10 },
// ];
// const result = products.map(({ title }) => {
//   return title;
// });
// console.log(result); // [ 'велосипед', 'ролики', 'самокат', 'лыжи', 'сноуборд' ]

// // -------------------------------------------------------------------------------------------
// // доработать метод map таким образом, чтобы в итоговом массиве были наименования товаров
// // и цена с учетом скидки

// // cпособ_1
// const products = [
//   { id: 1, title: "велосипед", price: 5000, discount: 12 },
//   { id: 2, title: "ролики", price: 1000, discount: 0 },
//   { id: 3, title: "самокат", price: 900, discount: 5 },
//   { id: 4, title: "лыжи", price: 1200, discount: 0 },
//   { id: 5, title: "сноуборд", price: 1500, discount: 10 },
// ];
// const result = products.map(function (item) {
//   return {
//     title: item.title,
//     price: item.price - (item.price * item.discount) / 100,
//   };
// });
// console.log(result);

// // cпособ_2
// const products = [
//   { id: 1, title: "велосипед", price: 5000, discount: 12 },
//   { id: 2, title: "ролики", price: 1000, discount: 0 },
//   { id: 3, title: "самокат", price: 900, discount: 5 },
//   { id: 4, title: "лыжи", price: 1200, discount: 0 },
//   { id: 5, title: "сноуборд", price: 1500, discount: 10 },
// ];

// // cпособ_3
// const products = [
//   { id: 1, title: "велосипед", price: 5000, discount: 12 },
//   { id: 2, title: "ролики", price: 1000, discount: 0 },
//   { id: 3, title: "самокат", price: 900, discount: 5 },
//   { id: 4, title: "лыжи", price: 1200, discount: 0 },
//   { id: 5, title: "сноуборд", price: 1500, discount: 10 },
// ];
// const result = products.map(function ({ title, price, discount }) {
//   return {
//     title,
//     price: (price * discount) / 100,
//   };
// });
// console.log(result);

// // Ответ
// // [
// //   { title: "велосипед", price: 600 },
// //   { title: "ролики", price: 0 },
// //   { title: "самокат", price: 45 },
// //   { title: "лыжи", price: 0 },
// //   { title: "сноуборд", price: 150 },
// // ];
// // -------------------------------------------------------------------------------------------
// // доработать метод map таким образом, чтобы в итоговом массиве были даннные про продукты, которые
// // дешевле 1200 (без скидки)

// // способ_1
// const products = [
//   { id: 1, title: "велосипед", price: 5000, discount: 12 },
//   { id: 2, title: "ролики", price: 1000, discount: 0 },
//   { id: 3, title: "самокат", price: 900, discount: 5 },
//   { id: 4, title: "лыжи", price: 1200, discount: 0 },
//   { id: 5, title: "сноуборд", price: 1500, discount: 10 },
// ];
// const result = products
//   .filter(function ({ price }) {
//     return price < 1200;
//   })
//   .map(function ({ title, price, discount }) {
//     return { title, price: price - (price * discount) / 100 };
//   });
// console.log(result); // [ { title: 'ролики', price: 1000 }, { title: 'самокат', price: 855 } ]

// // filter  всегда возвращает true or false!

// // способ_2
// const products = [
//   { id: 1, title: "велосипед", price: 5000, discount: 12 },
//   { id: 2, title: "ролики", price: 1000, discount: 0 },
//   { id: 3, title: "самокат", price: 900, discount: 5 },
//   { id: 4, title: "лыжи", price: 1200, discount: 0 },
//   { id: 5, title: "сноуборд", price: 1500, discount: 10 },
// ];
// const result = products
//   .filter(({ price }) => price < 1200)
//   .map(({ title, price, discount }) => ({
//     title,
//     price: price - (price * discount) / 100,
//   }));

// // console.log(result); // [ { title: 'ролики', price: 1000 }, { title: 'самокат', price: 855 } ]
// // -------------------------------------------------------------------------------------------
