// 1. Написать функцию, которая в качестве аргумента принимает числовое значение и возвращает это значение, возведенное в квадрат

const sq = (mult) => {
  return mult ** 2;
};

console.log(power(2)); // 4
console.log(power(3)); // 6
console.log(power(4)); //16
// -------------------
function power(num) {
  return num ** 2;
}

console.log(power(2)); // 4
console.log(power(3)); // 6
console.log(power(4)); //16
console.log(power("Hello")); // 'hello' ** 2 = NaN

a = 4;
b = "8";
console.log(a - b);

// 2. Написать функцию, которая будет принимать два числовых значения и возвращать их сумму

function plus(elem1 = 4, elem2 = 3) {
  return elem1 + elem2;
}

console.log(plus());

const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(3, 5));

// 2. Написать функцию, которая будет принимать два числовых аргумента и возвращать их сумму. Если второй аргумент не передан, в качестве второго числа должно подставляться число 10
// задача 1
function plus(elem1, elem2 = 10) {
  return elem1 + elem2;
}

console.log(plus(2)); // 12
console.log(plus(4, 4)); //8

// задача 2

const sum2 = (num1, num2 = 10) => {
  return num1 + num2;
};
console.log(sum2(3));
console.log(sum2(2, 4));

// задача 3

function sum3(num1, num2) {
  if (num2 === undefined) {
    num2 = 10;
  }
  return num1 + num2;
}
console.log(sum3(3)); // 13
console.log(sum3(3, 20)); // 23

// 3. Написать функцию, которая принимает строку и возвращает сообщение 'Hello, <string>!'. Если строка не передана, то возвращать сообщение 'Hello, my dear friend!'

function greeting(name = "Hello, my dear friend!") {
  return `Hello, ${name}!`;
}
console.log(greeting(`Bogdan`));
console.log(greeting());
console.log(greeting(`Alex`));

const greeting = (name = "Hello, my dear friend!") => {
  return `Hello, ${name}!`;
};
console.log(greeting(`Bogdan`));
console.log(greeting());
console.log(greeting(`Alex`));
