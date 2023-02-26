// Описание занятия: Необходимо решить задачи. Все решение сохраните в едином файле и опубликуйте на github. В качестве результата выполнения данного задания пришлите ссылку на github.

// https://prog-center.pro/frontend/6
// https://prog-center.pro/frontend/8
// https://prog-center.pro/frontend/14
// https://prog-center.pro/frontend/17
// https://prog-center.pro/frontend/18
// https://prog-center.pro/frontend/20
// https://prog-center.pro/frontend/21
// https://prog-center.pro/frontend/22

// 1. напиши цикл for, который выводит числа в консоль от 10 до 0

for (let i = 10; i >= 0; i--) {
  console.log(i); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
}

// 2. В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n.

let n = 100;
let m = 49;

for (let i = m; i <= n; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 100; 98; 96; 94; 92; 90; 88; 86; 84; 82; 80; 78; 76; 74; 72; 70; 68; 66; 64; 62; 60; 58; 56; 54; 52; 50;

// 3. Напишите функцию, range, которая принимает два аргумента (n и m) с числовым значением и возвращает массив с числами от меньшего до большего -1.

function range(n, m) {
  let result = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  for (let i = min; i < max; i++) {
    result.push(i);
  }
  return result;
}
console.log(range(10, 2)); // [2, 3, 4, 5, 6, 7, 8, 9];

// 4. Создайте функцию handler, которая принимает два аргумента, массив и число. Функция должна сформировать новый массив на основе заданного и исключить из него указанное число. Для решения задачи используйте метод массива filter.

const inputArray = [1, 2, 3, 4, 5, 6, 17];
const numToRemove = 5;
const resultArray = handler(inputArray, numToRemove);
function handler(arr, num) {
  return arr.filter((val) => val !== num);
}
console.log(resultArray); // [ 1, 2, 3, 4, 6, 17 ]

// 5. Создайте функцию handler, которая принимает в качестве аргумента массив с положительными и отрицательнцми числами, формирует новый массив, в котором все отрицательные значения преобразованы в положительные и возращает новый массив.

// Для решения задачи используйте метод массива map

const inputArray = [-1, 2, -3, 4, -5];
const resultArray = handler(inputArray);
function handler(arr) {
  return arr.map((num) => (num < 0 ? -num : num));
}
console.log(resultArray); // [1, 2, 3, 4, 5]

// 6. Создайте функцию handler, которая принимает в качестве аргумента массив с положительными числами, формирует новый массив после дедупликации (удалены все повторяющиеся числа).
// Для решения задачи используйте метод массива filter.

const numbers = [1, 2, 3, 2, 4, 3, 5];
const result = handler(numbers);
function handler(numbers) {
  const uniqueNumbers = numbers.filter((number, index, array) => {
    return array.indexOf(number) === index;
  });
  return uniqueNumbers;
}
console.log(result); // [1, 2, 3, 4, 5]

// 7. Создайте функцию handler, которая принимает в качестве аргумента массив со строками и возвращает новый массив из длинн этих строк.
// Для решения задачи используйте метод массива map.

const strings = ["hello", "world", "javascript"];
const result = handler(strings);
function handler(strings) {
  const lengths = strings.map((string) => {
    return string.length;
  });
  return lengths;
}
console.log(result); // [5, 5, 10]

// 8. Создайте функцию handler, которая принимает в качестве аргументов массив с числами и строками и число.
// Функция должна в первую очередь отфильтровать массив и оставить только числа. На основе полученного после фильтрации массива необходимо сформировать массив, в котором все числа возведены в степен числа, полученного в качестве второго аргумента функции handler.
// Для решения задачи используйте методы массива filter и map.

const arr = [2, 3, "test", 4, "5", 6];
const poweredNumbers = handler(arr, 2);
function handler(arr, power) {
  const numbers = arr.filter((item) => typeof item === "number");
  const poweredNumbers = numbers.map((number) => Math.pow(number, power));
  return poweredNumbers;
}
console.log(poweredNumbers); // [4, 9, 16, 36]
