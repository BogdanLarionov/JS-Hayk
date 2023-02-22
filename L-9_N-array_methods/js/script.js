// Простые методы массивов:
// - мутируют исходный массив
// - не принимают колбэк-функцию

const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]

numbers.push(7); // добавляет в конец массива переданное значение
numbers.unshift(0); // добавляет в начало массива переданное значение
numbers.pop(); // удаляет последний элемент из массива
numbers.shift(); // удаляет первый элемент из массива

console.log(numbers);

// Сложные методы:
// - принимают колбэк в качестве аргумента
// - не мутируют исходный массив (кроме sort())

// forEach() - ничего не возвращает (undefined), применяет указанную функцию к каждому элементу массива один раз
// --------------------

// Сформировать новый массив, в который попадут числа больше 0

// через анонимную дикларотивная функцию
const number1 = [23, 11, -9, 57, -3, 64];

const positive_numbers1 = [];
number1.forEach(function (elem) {
  if (elem > 0) {
    positive_numbers1.push(elem);
  }
});
console.log(number1); // [ 23, 11, -9, 57, -3, 64 ]
console.log(positive_numbers1); // [ 23, 11, 57, 64 ]

// через стрелочную функцию
const number2 = [23, 11, -9, 57, -3, 64];

const positive_numbers = [];
number2.forEach((elem) => {
  if (elem > 0) {
    positive_numbers.push(elem);
  }
});
console.log(number2); // [ 23, 11, -9, 57, -3, 64 ]
console.log(positive_numbers); // [ 23, 11, 57, 64 ]

// --------------------

// map() - возвращает новый массив, применяет указанную функцию к каждому элементу массива один раз и возвращает новый массив с измененными элементами. Длина исходного массива = длине нового массива
//  map() - всегда возвращает массив, твкойже длены какой изначальный массив

// Сформировать новый массив, в который попадут числа больше 0
const number2 = [23, 11, -9, 57, -3, 64];

const positive_numbers = number2.map(function (elem) {
  if (elem > 0) {
    return elem;
  }
});
console.log(positive_numbers); // [ 23, 11, undefined, 57, undefined, 64 ]

//  Стрелочная функция
// const filtere_numbers = number2.filter((elem) => elem > 0);
// console.log(filtere_numbers); // [ 23, 11, 57, 64 ]

const filtere_numbers = number2.filter(function (elem) {
  elem > 0;
});
console.log(filtere_numbers); // [ 23, 11, 57, 64 ]

// -----------------------------------------------------------------

const number2 = [23, 11, -9, 57, -3, 64];

const positive_numbers = number2.map(function (elem) {
  if (elem > 0) {
    return elem;
  }
});

const filtere_numbers = number2.filter(function (elem) {
  return elem > 0 && elem < 20;
});

console.log(positive_numbers); // [ 23, 11, undefined, 57, undefined, 64 ]
console.log(filtere_numbers); // [ 11 ]
// -----------------------------------------------------------------

// filter() - возвращает новый массив, в который попадут только те элементы из исходного массива, которые соответствуют переданному условию
// в filter() встроенный условный оператор if(), так что не пишется внутри !

const number2 = [23, 11, -9, 57, -3, 64];

const positive_numbers = number2.filter(function (elem) {
  if (elem > 0) {
    return elem;
  }
});
console.log(positive_numbers); // [ 23, 11, 57, 64 ]

// -----------------------------------------------------
// Сформировать новый массив, в который попадут все числа массива nimbers2 умноженные на 3
const number2 = [23, 11, -9, 57, -3, 64];

const trippled_numbers = number2.map(function (elem) {
  return elem * 3;
});

console.log(trippled_numbers); // [ 69, 33, -27, 171, -9, 192 ]

// -----------------------------------------------------

// Сформировать новый массив из имен пользователей
const users = [
  { id: 1, name: "Anton", age: 27 },
  { id: 2, name: "Irina", age: 17 },
  { id: 3, name: "Oleg", age: 55 },
];

const users_name = users.map((elem) => elem.name);

console.log(users_name); // [ 'Anton', 'Irina', 'Oleg' ]
// -----------------------------------------------------

const users = [
  { id: 1, name: "Anton", age: 27 },
  { id: 2, name: "Irina", age: 17 },
  { id: 3, name: "Oleg", age: 55 },
];

const users_name = users.map((elem) => {
  const new_user = {
    name: elem.name,
    age: elem.age,
  };
  return new_user;
});
console.log(users_name);
// Ответ:
// [
//   { name: 'Anton', age: 27 },
//   { name: 'Irina', age: 17 },
//   { name: 'Oleg', age: 55 }
// ]
// Ответ:
const users = [
  { id: 1, name: "Anton", age: 27 },
  { id: 2, name: "Irina", age: 17 },
  { id: 3, name: "Oleg", age: 55 },
];

const users_name = users.map(({ name, age }) => {
  const new_user = { name, age };
  return new_user;
});

console.log(users_name);
// -----------------------------------------------------
