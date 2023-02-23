// https://pythontutor.com/visualize.html#mode=edit

// 1) написать цикл, который выводит числа от 0 до 10

// i - итератор

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// --------------------------------------

// работа с циклом и с обработкой масива

// написать цикл, который выводит только положительные числа

const arr = [12, 5, -43, 1, 54, -32, 23];

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] >= 0) {
    console.log(arr[i]); // 12; 5; 1; 54; 23;
  }
}

// способ 2
const arr = [12, 5, -43, 1, 54, -32, 23];
const result = arr.filter((item) => item > 0).sort((a, b) => a - b);
console.log(result); // [ 1, 5, 12, 23, 54 ]

// ---------------------------------

// callback function

function func() {
  console.log("Hello");
}
func(); // Hello

// ---------------------------------

function func() {
  console.log("Hello");
}

let a = func;

a(); // Hello

// ---------------------------------

function func() {
  console.log("Hello");
}

function handler(callback) {
  for (let i = 0; i < 10; i++) {
    callback();
  }
}

handler(func); // ответ 10 Hello

// ---------------------------------

function func() {
  console.log("Hello");
}
setInterval(func, 100); // выводит каждые 100 милисикунд Hello

// ---------------------------------

// создайте функцию, которая получает в качестве первого аргумента массив
// а в качестве второго функцию, которую нужно вызвать с каждым элементом массива

const arr = [12, 5, -43, 1, 54, -32, 23];

function handler(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
handler(arr, console.log); // 12, 5, -43, 1, 54, -32, 23

// ---------------------------------
const arr = [12, 5, -43, 1, 54, -32, 23];

function handler(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
function power(arg) {
  console.log(arg ** 2); // ** возведение в степень (умножить)
}
handler(arr, power); // 144; 25; 1849; 1; 2916; 1024; 529;
// ---------------------------------

function mult(a, b) {
  console.log(a * b);
}

mult(2, 3); // 6

// ---------------------------------

const arr = [12, 5, -43, 1, 54, -32, 23];

function handler(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

arr.forEach(console.log);

// forEach - передает больше аргументов функции
// у forEach встроенный цикл for

// 12  0 (7) [12, 5, -43, 1, 54, -32, 23]
// 5   1 (7) [12, 5, -43, 1, 54, -32, 23]
// -43 2 (7) [12, 5, -43, 1, 54, -32, 23]
// 1   3 (7) [12, 5, -43, 1, 54, -32, 23]
// 54  4 (7) [12, 5, -43, 1, 54, -32, 23]
// -32 5 (7) [12, 5, -43, 1, 54, -32, 23]
// 23  6 (7) [12, 5, -43, 1, 54, -32, 23]

// ---------------------------------

// используя метод forEach вывести в консоль только положительные числа

// Function Declaration;

const arr = [12, 5, -43, 1, 54, -32, 23];

function handler(arg) {
  if (arg >= 0) {
    console.log(arg);
  }
}

arr.forEach(handler); // 12, 5, 1, 54, 23

// ---------------------------------

// function Expression

const arr = [12, 5, -43, 1, 54, -32, 23];

const handler = function (arg) {
  if (arg >= 0) {
    console.log(arg);
  }
};

arr.forEach(handler); // 12, 5, 1, 54, 23

// ---------------------------------

// безимянная функция

const arr = [12, 5, -43, 1, 54, -32, 23];
arr.forEach(function (arg) {
  if (arg >= 0) {
    console.log(arg);
  }
});
12, 5, 1, 54, 23;

// ---------------------------------

// массив.forEach(function(элемент, индекс, массив) {
// 	код, который выполнится для всех элементов
// })
// ---------------------------------

// вывести в консоль все числа из массива
// если число отрицательное, нужно вывести положительный эквивалент этого числа (-5 -> 5)

const arr = [-12, 5, -43, -1, 54, -32, -23];
arr.forEach(function (arg) {
  if (arg < 0) {
    console.log(-arg);
  } else {
    console.log(arg);
  }
}); // 12, 5, 43, 1, 54, 32, 23

// Mетод2

const arr = [-12, 5, -43, -1, 54, -32, -23];
arr.forEach(function (arg) {
  if (arg < 0) {
    console.log(arg * -1);
  } else {
    console.log(arg);
  }
}); // 12, 5, 43, 1, 54, 32, 23

// ---------------------------------

// Objects

// Используя обычный цикл вывести только ноименования товара

const products = [
  { id: 1, title: "велосипед", price: 1200 },
  { id: 2, title: "ролики", price: 300 },
  { id: 3, title: "самокат", price: 450 },
  { id: 4, title: "лыжи", price: 1100 },
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i].title); // велосипед; ролики; самокат; лыжи;
  console.log(products[i].id); // 1, 2, 3, 4
  console.log(products[i].price); // 1200, 300, 450, 1100
}

// ---------------------------------

// Реализовать тот же процесс  через forEach

const products = [
  { id: 1, title: "велосипед", price: 1200 },
  { id: 2, title: "ролики", price: 300 },
  { id: 3, title: "самокат", price: 450 },
  { id: 4, title: "лыжи", price: 1100 },
];

products.forEach(function (item) {
  console.log(item.id); // 1, 2, 3, 4
  console.log(item.title); // велосипед; ролики; самокат; лыжи;
  console.log(item.price); // 1200, 300, 450, 1100
});

// ---------------------------------

// Bывести наименование товаров, которые дороже 1000 используя forEach

const products = [
  { id: 1, title: "велосипед", price: 1200 },
  { id: 2, title: "ролики", price: 300 },
  { id: 3, title: "самокат", price: 450 },
  { id: 4, title: "лыжи", price: 1100 },
];

products.forEach(function (item) {
  if (item.price > 1000) {
    console.log(item.title);
  }
}); // велосипед; лыжи;

// ---------------------------------
// forEach() - выволняет просто действие которое мы указали а map() формирует новый мосив из того что вернет наша функция!
// Метод map()

const products = [
  { id: 1, title: "велосипед", price: 1200 },
  { id: 2, title: "ролики", price: 300 },
  { id: 3, title: "самокат", price: 450 },
  { id: 4, title: "лыжи", price: 1100 },
];

products.map(function (item) {
  if (item.price > 1000) {
    console.log(item.title);
  }
}); // велосипед; лыжи;

// ---------------------------------

const products = [
  { id: 1, title: "велосипед", price: 1200 },
  { id: 2, title: "ролики", price: 300 },
  { id: 3, title: "самокат", price: 450 },
  { id: 4, title: "лыжи", price: 1100 },
];

const result = products.map(function (item) {
  return item.title;
}); // ["велосипед", "ролики", "самокат", "лыжи"];

console.log(result);
// ---------------------------------

// Использовать map() на основе массива с товарами сформировать массив из объектов которые состоят из свойств title, price

const products = [
  { id: 1, title: "велосипед", price: 1200 },
  { id: 2, title: "ролики", price: 300 },
  { id: 3, title: "самокат", price: 450 },
  { id: 4, title: "лыжи", price: 1100 },
];

const result = products.map(function (item) {
  return {
    title: item.title,
    price: item.price,
  };
});

console.log(result);

// Ответ:
// [
//   { title: "велосипед", price: 1200 },
//   { title: "ролики", price: 300 },
//   { title: "самокат", price: 450 },
//   { title: "лыжи", price: 1100 },
// ];

// ---------------------------------
// длинная запись
const obj = {
  a: 12,
  b: 43,
  c: 76,
};

const a = obj.a;
const b = obj.b;
const c = obj.c;

console.log(obj); // { a: 12, b: 43, c: 76 }

// ---------------------------------
// через деструктуризацию короче запись
const obj = {
  a: 12,
  b: 43,
  c: 76,
};

const { a, b, c } = obj;

console.log(obj); // { a: 12, b: 43, c: 76 }

// ---------------------------------

const obj = {
  a: 12,
  b: 43,
  c: 76,
};
function func({ a, b, c }) {
  console.log(a + b + c);
}

func(obj); // 131

// ---------------------------------
// Добавить процес деструктуризации
// // длинная запись

const products = [
  { id: 1, title: "велосипед", price: 1200 },
  { id: 2, title: "ролики", price: 300 },
  { id: 3, title: "самокат", price: 450 },
  { id: 4, title: "лыжи", price: 1100 },
];

const result = products.map(function ({ title, price }) {
  return { title: title, price: price };
});

console.log(result);

// Ответ:
// [
//   { title: "велосипед", price: 1200 },
//   { title: "ролики", price: 300 },
//   { title: "самокат", price: 450 },
//   { title: "лыжи", price: 1100 },
// ];
// ---------------------------------

// // длинная запись
const a = 12;
const b = 22;
const obj = { a: a, b: b };
console.log(obj); //  { a: 12, b: 22 }

// короткая запись
const a = 12;
const b = 22;
const obj = { a, b };
console.log(obj); //  { a: 12, b: 22 }

// ---------------------------------

// использовать сокращенный синтаксис для формирования объекта
// // короткая запись

const products = [
  { id: 1, title: "велосипед", price: 1200 },
  { id: 2, title: "ролики", price: 300 },
  { id: 3, title: "самокат", price: 450 },
  { id: 4, title: "лыжи", price: 1100 },
];

const result = products.map(function ({ title, price }) {
  // const obj = { a, b };

  return { title, price };
});

console.log(result);

// Ответ:
// [
//   { title: "велосипед", price: 1200 },
//   { title: "ролики", price: 300 },
//   { title: "самокат", price: 450 },
//   { title: "лыжи", price: 1100 },
// ];
// ---------------------------------

// filter find reduce
