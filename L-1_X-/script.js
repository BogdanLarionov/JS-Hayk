// 1. Написать программу, которая получает через prompt два числа и выводит их сумму

const value_1 = +prompt("Укажите значение"); // prompt возвращает всегда строку
const value_2 = +prompt("Укажите значение"); // преобразовали строку в число

console.log(value_1 + value_2);

// 2.  Вывести результат операций +, -, *, /
// Пример 12, 2

// 12 + 2 = 14
// 12 - 2 = 10
// 12 * 2 = 24
// 12 / 2 = 6

// Метод-1

const value1 = 12;
const value2 = 2;
console.log(value1 + value2); // 14
console.log(value1 - value2); // 10
console.log(value1 * value2); // 24
console.log(value1 / value2); // 6

// Метод-2
const value1 = 12;
const value2 = 2;
console.log(`${value1} + ${value2} = ${value1 + value2}`); // 14
console.log(`${value1} - ${value2} = ${value1 - value2}`); // 10
console.log(`${value1} / ${value2} = ${value1 / value2}`); // 6
console.log(`${value1} * ${value2} = ${value1 * value2}`); // 24

const value_1 = -12;
const value_2 = 2;
if (value_2 !== 0) {
  console.log(`${value_1} / ${value_2} = ${value_1 / value_2}`);
}

// Метод-3

const value = "12";
const v0lue = 12;
const valu = 12;
const val = 12;
const va = 12;

console.log(+value + 2); // 14 // без плуса будет конкантинация строк 122 а так 14
console.log(v0lue + 2); // 14
console.log(valu - 2); // 10
console.log(val * 2); // 24
console.log(va / 2); // 6

// Используя условный оператор выполняйте деление только в случае, если value_2 не равен 0

const value_1 = +prompt("Укажите значение"); // prompt возвращает всегда строку
const value_2 = +prompt("Укажите значение"); // преобразовали строку в число

console.log(`${value_1} + ${value_2} = ${value_1 + value_2}`);
console.log(`${value_1} - ${value_2} = ${value_1 - value_2}`);
console.log(`${value_1} * ${value_2} = ${value_1 * value_2}`);

if (value_2 !== 0) {
  console.log(`${value_1} / ${value_2} = ${value_1 / value_2}`);
}

// https://learn.javascript.ru/comparison
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Equality_comparisons_and_sameness

// Есди пользователь пытается поделить на 0 выведите фразу "Делить на 0 нельзя"

// const value_1 = +prompt("Укажите значение"); // prompt возвращает всегда строку
// const value_2 = +prompt("Укажите значение"); // преобразовали строку в число

// if (value_2 !== 0) {
//   console.log(`${value_1} / ${value_2} = ${value_1 / value_2}`);
// } else {
//   console.log("Делить на 0 нельзя");
// }

// Написать программу, которая получает два числа и выводит следующий результат

// Пример;
// value_1 = 12;
// value_2 = 2;
// ("12 больше 2");
// ("15 больше 12");
// ("2 они равны 2");

const val_1 = prompt("Укажите значение");
const val_2 = prompt("Укажите значение");

if (val_1 > val_2) {
  console.log(`${val_1} болше ${val_2}`);
} else if (val_1 < val_2) {
  console.log(`${val_2} меньше ${val_1}`);
} else {
  console.log(`${val_2} они равны ${val_1}`);
}
// условный оператор
// ----------------------
// цикл

// Вывести цифры от 0 до 9

for (let i = 0; i <= 9; i++) {
  // i - итератор
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

for (let i = 0; i < 10; i++) {
  // i - итератор
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
}

const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(i);
}
console.log(...arr); // 0 1 2 3 4 5 6 7 8 9

// Вывести цифры от 9 до 0

for (let i = 9; i >= 0; i--) {
  console.log(i);
}
//9,8,7,6,5,4,3,2,1,0
// --------------------
// var VS let

// 1. ES6 - 2015 (let const)
// 2. Не можем объявлять let переменную несколько раз

// let a = 12;
// console.log(a);

// let a = 24;
// console.log(a);

// 3. Oблость видемости

// блочная область видемости
if (true) {
  var a = 12;
}
console.log(a);

// функциональная облость видемости
function func() {
  var a = 12;
}
func();
console.log(a);

// let a;
// if (true) {
//   a = 12;
// } else {
//   b = 15;
// }

// 4. Всплытие
//  обьявление переменной и всплытие
console.log(a);
var a = 12;

console.log(a);
let a = 12;
// -------------------

r = 12;
console.log(r);
// -------------------
function func() {
  r = 12;
}
func();
console.log(r);

// array
// Написать цикл, который выводит все числа из массива в консоль
const arr = [12, 4, 32, 45, 432, 12, 4, 32];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 12, 4, 32, 45, 432, 12, 4, 32
}

// Написать цикл, который выводит положительные числа (меньше 0)
const arr = [12, 4, -32, 45, -432, 12, -4, 32];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(arr[i]); // 12, 4, 45, 12, 32
  }
}

// Написать цикл, который  преобразует все отрицательные числа в положительные числа (-32 -> 32)

const arr = [12, 4, -32, 45, -432, 12, -4, 32];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    arr[i] = arr[i] * -1;
  }
}
console.log(arr); // [ 12, 4, 32, 45, 432, 12, 4, 32]

// Написать скрипт, который находит сумму всех чисел из массива
const arr = [12, 4, 32, 45, 432, 12, 4, 32];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum); // 573

// Object
const user = ["Bogdan", "Larionov", "32", "m"];
console.log(user[0]); // Bogdan
console.log(user[1]); // Larionov
console.log(user[0], user[1]); // Bogdan Larionov

const user = {
  name: "Bogdan",
  lastname: "Larionov",
  age: 32,
  gender: "m",
};
console.log(user.name); // Bogdan
console.log(user.lastname); // Larionov
console.log(user.name, user.lastname); // Bogdan Larionov

// grid одаптивная верстка
