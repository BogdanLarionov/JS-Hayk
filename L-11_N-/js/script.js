// 1. Дан массив
// 1. Сформировать новый массив с продуктами, название которых длиннее 5 символов
const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const long_products = products.filter(function (el) {
  return el.length >= 5;
});
console.log(long_products); // [ 'apple', 'orange', 'pineapple', 'lemon' ]

const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const long_products = products.filter((el) => el.length >= 5);
console.log(long_products); // [ 'apple', 'orange', 'pineapple', 'lemon' ]
// ----------------------------------------------------------------------------
// 2. Сформировать новый массив с продуктами, название которых начинается на букву l
const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const leter = products.filter(function (elem) {
  return elem[0] === "l";
});
console.log(leter); // [ 'lemon', 'lime' ]

const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const l_products = products.filter((el) => el[0] === "l");
console.log(l_products); // [ 'lemon', 'lime' ]
// ----------------------------------------------------------------------------
let string = "hello";
console.log(string.toUpperCase()); // HELLO

// 3. Сформировать новый массив с продуктами, названия продуктов должны быть написаны в верхнем регистре
const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const up_products = products.map(function (el) {
  return el.toUpperCase();
});
console.log(up_products); // [ 'APPLE', 'ORANGE', 'PINEAPPLE', 'LEMON', 'LIME', 'KIWI' ]

const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const up = products.map((elem) => elem.toUpperCase());
console.log(up); // [ 'APPLE', 'ORANGE', 'PINEAPPLE', 'LEMON', 'LIME', 'KIWI' ]

// ----------------------------------------------------------------------------
// 4. Сформировать новый массив с продуктами, названия продуктов должны начинаться с большой буквы

const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const products_us = products.map(function (el) {
  return el[0].toUpperCase();
});
console.log(products_us); // [ 'A', 'O', 'P', 'L', 'L', 'K' ]

const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const first_up = products.map((elem) => elem[0].toUpperCase() + elem.slice(1));
console.log(first_up); // [ 'Apple', 'Orange', 'Pineapple', 'Lemon', 'Lime', 'Kiwi' ]

//   https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// ----------------------------------------------------------------------------

const nums = [1, 2, 3, 4, 5];
const a = nums.shift();
console.log(nums); // [ 2, 3, 4, 5 ]
console.log(a); // 1

let name = "anton";
console.log(name[0]); // a
console.log(name[1]); // n
console.log(name[0].toUpperCase()); // A
console.log(name.slice(1)); // nton
console.log(name[0].toUpperCase() + name.slice(1)); // Anton

// ----------------------------------------------------------------------------

// 4. Сформировать новый массив с продуктами, названия продуктов должны начинаться с большой буквы
const products = ["apple", "orange", "pineapple", "lemon", "lime", "kiwi"];
const products_up = products.map(function (el) {
  return el[0].toUpperCase() + el.slice(1);
});
console.log(products_up); // [ 'Apple', 'Orange', 'Pineapple', 'Lemon', 'Lime', 'Kiwi' ]
// ---------------------
// Дан массив с пользователями
// 5. Сформировать новый массив с совершеннолетними пользователями

const users = [
  {
    id: 1,
    name: "Anton",
    age: 44,
    country: "Germany",
  },
  {
    id: 2,
    name: "Irina",
    age: 32,
    country: "Spain",
  },
  {
    id: 3,
    name: "Olga",
    age: 14,
    country: "Poland",
  },
  {
    id: 4,
    name: "Oleg",
    age: 23,
    country: "France",
  },
];

const adalt = users.filter((elem) => elem.age > 18);
console.log(adalt);

// [
//   { id: 1, name: 'Anton', age: 44, country: 'Germany' },
//   { id: 2, name: 'Irina', age: 32, country: 'Spain' },
//   { id: 4, name: 'Oleg', age: 23, country: 'France' }
// ]

// -----------------------------------------------------------------------------------------------------

// 5. Сформировать новый массив с пользователями, чье имя начинается на букву O (регистр может быть любым)

const users = [
  {
    id: 1,
    name: "Anton",
    age: 44,
    country: "Germany",
  },
  {
    id: 2,
    name: "Irina",
    age: 32,
    country: "Spain",
  },
  {
    id: 3,
    name: "Olga",
    age: 14,
    country: "Poland",
  },
  {
    id: 4,
    name: "oleg",
    age: 23,
    country: "France",
  },
];

const name_O = users.filter((elem) => elem.name[0] === "O");
// const name_O = users.filter(({ name }) => name[0] === "O"); // -  деструкторизация
console.log(name_O); // [ { id: 3, name: 'Olga', age: 14, country: 'Poland' } ]

const name_O = users.filter(function (elem) {
  return elem.name[0] === "o";
});

// -  деструкторизация
const name_O = users.filter(function ({ name }) {
  return name[0] === "o";
});
console.log(name_O); // [ { id: 4, name: 'oleg', age: 23, country: 'France' } ]
// -----------------------------------------------------------------------------------------------------

// 5. Сформировать новый массив с пользователями, чье имя начинается на букву O (регистр может быть любым)

const users = [
  {
    id: 1,
    name: "Anton",
    age: 44,
    country: "Germany",
  },
  {
    id: 2,
    name: "Irina",
    age: 32,
    country: "Spain",
  },
  {
    id: 3,
    name: "Olga",
    age: 14,
    country: "Poland",
  },
  {
    id: 4,
    name: "oleg",
    age: 23,
    country: "France",
  },
];
const o_users = users.filter(function (el) {
  return el.name[0] === "O" || el.name[0] === "o";
});
console.log(o_users);

// [
//   { id: 3, name: "Olga", age: 14, country: "Poland" },
//   { id: 4, name: "oleg", age: 23, country: "France" },
// ];

const o_users1 = users.filter(function (el) {
  return el.name[0].toUpperCase() === "O";
});
console.log(o_users1);

// ---------------------------------------------------------------------------------------------
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes
// 6. Сформировать новый массив с информацией о пользователях в формате: 'ИМЯ, ВОЗРАСТ (СТРАНА)'
// ['Anton, 44 (Germany)', 'Irina, 23 (Spain)', ...]

const users = [
  {
    id: 1,
    name: "Anton",
    age: 44,
    country: "Germany",
  },
  {
    id: 2,
    name: "Irina",
    age: 32,
    country: "Spain",
  },
  {
    id: 3,
    name: "Olga",
    age: 14,
    country: "Poland",
  },
  {
    id: 4,
    name: "oleg",
    age: 23,
    country: "France",
  },
];

const user_form = users.map(function (elem) {
  return `name: ${elem.name}, age: ${elem.age}, county: (${elem.country})`;
});
console.log(user_form);

const user_form = users.map(
  ({ name, age, country }) => `name: ${name}, age:${age}, county:${country}`
);
console.log(user_form);

// Ответ:

// [
//   "name: Anton, age:44, county:Germany",
//   "name: Irina, age:32, county:Spain",
//   "name: Olga, age:14, county:Poland",
//   "name: oleg, age:23, county:France",
// ];

// конкантинация!
const user_form = users.map(function (elem) {
  return elem.name + ", " + elem.age + " (" + elem.country + ")";
});
console.log(user_form);
// ---------------------------------------------------------------------------------------------------------
// 7. Сформировать новый массив с информацией о совершеннолетних пользователях в формате: 'ИМЯ, ВОЗРАСТ (СТРАНА)'
// ['Anton, 44 (Germany)', 'Irina, 23 (Spain)', ...]

const users = [
  {
    id: 1,
    name: "Anton",
    age: 44,
    country: "Germany",
  },
  {
    id: 2,
    name: "Irina",
    age: 32,
    country: "Spain",
  },
  {
    id: 3,
    name: "Olga",
    age: 14,
    country: "Poland",
  },
  {
    id: 4,
    name: "oleg",
    age: 23,
    country: "France",
  },
];
const arr = users
  .filter((person) => person.age > 18)
  .map((person) => `${person.name}, ${person.age} (${person.country})`);

console.log(arr);
// ["Anton, 44 (Germany)", "Irina, 32 (Spain)", "oleg, 23 (France)"];
// ---------------------------------------------------------------------------------------------------------

//  // 7. Сформировать новый массив с информацией о совершеннолетних пользователях в формате: 'ИМЯ, ВОЗРАСТ (СТРАНА)'
// // ['Anton, 44 (Germany)', 'Irina, 23 (Spain)', ...]

const adults_info = users
  .filter(function (el) {
    return el.age >= 18;
  })
  .map(function (el) {
    return `${el.name}, ${el.age} (${el.country})`;
  });
