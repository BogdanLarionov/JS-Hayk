// Callback (функция обратного вызова) - функция, переданная в другую функцию в качестве аргумента
// Функция высшего порядка - функуия, которая принимает другую функцию в качестве аргумента

function doubleTwo() {
  return 2 * 2;
}

function doubleTheree() {
  return 3 * 2;
}

function doubleFour() {
  return 4 * 2;
}

// -------------------------
function doublNum(a) {
  return a * 2;
}

const a = doublNum(10);
console.log(a); // 20
// ----------------------------------------------------------------------------------------------------

// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums умноженные на 2

const nums = [1, 2, 3, 4, 5];

const doubled_nums = [];
function doubleNums() {
  for (let i = 0; i < nums.length; i++) {
    doubled_nums.push(nums[i] * 2);
  }
}
console.log(doubled_nums); // []
doubleNums(nums);
console.log(doubled_nums); // [ 2, 4, 6, 8, 10 ]

// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums деленные на 2

const nums1 = [1, 2, 3, 4, 5];

const divided_nums = [];
function doubleNums() {
  for (let i = 0; i < nums1.length; i++) {
    divided_nums.push(nums1[i] / 2);
  }
}
console.log(divided_nums); // []
doubleNums(nums1);
console.log(divided_nums); // [ 0.5, 1, 1.5, 2, 2.5 ]

// Дан массив с числами. Сформировать новый массив, в который попадут все числа из массива nums возведенные в степень 2

const nums2 = [1, 2, 3, 4, 5];

const powered_nums = [];
function doubleNums() {
  for (let i = 0; i < nums2.length; i++) {
    powered_nums.push(nums2[i] ** 2);
  }
}
console.log(powered_nums); // []
doubleNums(nums2);
console.log(powered_nums); // [ 1, 4, 9, 16, 25 ]
// ----------------------------------------------------------------------------------------------------
// Универсальная функция, принимающая колбэк

const nums = [1, 2, 3, 4, 5];

function change_nums(array, callback) {
  for (let i = 0; i < nums.length; i++) {
    array.push(callback(nums[i]));
  }
}

const div_nums = [];
const pow_nums = [];

function divNums(num) {
  return num / 2;
}

function powNums(num) {
  return num ** 2;
}

change_nums(div_nums, divNums);
change_nums(pow_nums, powNums);

console.log(div_nums); // [ 0.5, 1, 1.5, 2, 2.5 ]
console.log(pow_nums); // [ 1, 4, 9, 16, 25 ]

// ----------------------------------------------------------------------------------------------------
