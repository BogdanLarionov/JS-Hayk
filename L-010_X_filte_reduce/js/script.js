// Методы массива -  filter reduce

// используя метод forEach вывести только те числа, которые
// меньше 100

const numbers = [12, 435, 1, 32, 545, 21, 555];

numbers.forEach(function (item) {
  if (item < 100) {
    console.log(item); // 12, 1, 32, 21
  }
});

// вывести только четные числа
const numbers = [12, 435, 1, 32, 545, 21, 555];

numbers.forEach(function (item) {
  if (item % 2 == 0) {
    console.log(item); // 12 32
  }
});

// -----------------------------------------------------------

// используя метод map сформируйте новый массив на основе массива numbers
// если число в массиве numbers меньше 100 то к нему нужно прибавить 100

numbers = [112, 435, 101, 132, 545, 121, 555];

const result = numbers.map(function (item) {
  if (item < 100) {
    item += 100; // item = item + 100;
  }
  return item;
});
console.log(result); //[ 112, 435, 101, 132, 545, 121, 555 ]

// метод_2
numbers = [112, 435, 101, 132, 545, 121, 555];
const result = numbers.map(function (item) {
  if (item < 100) {
    return item + 100;
  }
  return item;
});
console.log(result); //[ 112, 435, 101, 132, 545, 121, 555 ]

// -----------------------------------------------------------

// let a = 12;

let a;
a = 12;
// -----------------------------------------------------------
// используя метод map сформировать массив из имен пользователей

const users = [
  {
    id: 1,
    name: "Анатолий",
    lastname: "Ушанов",
    age: 30,
  },
  {
    id: 2,
    name: "Максим",
    lastname: "Грибов",
    age: 28,
  },
  {
    id: 3,
    name: "Антон",
    lastname: "Куликов",
    age: 27,
  },
  {
    id: 4,
    name: "Юрий",
    lastname: "Митрофанов",
    age: 45,
  },
];

// const result = users.map((elem) => elem.name);
// console.log(result); // [ 'Анатолий', 'Максим', 'Антон', 'Юрий' ]
// --------------------------------------------------------------------------------
// const result = users.map(function (user) {
//   return user.name;
// });
// console.log(result); // [ 'Анатолий', 'Максим', 'Антон', 'Юрий' ]

// --------------------------------------------------------------------------------

// const result = users.map(function (name) {
//   return name;
// });
// console.log(result); //

// --------------------------------------------------------------------------------
// способ_1
numbers = [112, 435, 101, 132, 545, 121, 555];
const result = numbers.filter(function (item) {
  if (item % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
console.log(result); // [ 112, 132 ]

// способ_2
numbers = [112, 435, 101, 132, 545, 121, 555];
const result = numbers.filter(function (item) {
  return item % 2 === 0;
});
console.log(result); // [ 112, 132 ]
// --------------------------------------------------------------------------------

// сформировать массив, который состоит из объектов с данными пользователей, которые младше 30

const users = [
  {
    id: 1,
    name: "Анатолий",
    lastname: "Ушанов",
    age: 30,
  },
  {
    id: 2,
    name: "Максим",
    lastname: "Грибов",
    age: 28,
  },
  {
    id: 3,
    name: "Антон",
    lastname: "Куликов",
    age: 27,
  },
  {
    id: 4,
    name: "Юрий",
    lastname: "Митрофанов",
    age: 45,
  },
];

// const result = users.filter(function (item) {
//   return item.age < 30;
// });
// console.log(result);
// Отыкт:
// [
//   { id: 2, name: "Максим", lastname: "Грибов", age: 28 },
//   { id: 3, name: "Антон", lastname: "Куликов", age: 27 },
// ];
// Отыкт:
const result = users.filter(function ({ age }) {
  return age < 30;
});
console.log(result);
// ---------------------------------------------------------------

let a = 12;
let b = 12;
if (b > 0) {
  console.log(true); // true
} else {
  console.log(false);
}

console.log(b > 0); // true

if ((b = 12)) {
  console.log(12); // 12
} else {
  console.log(b);
}
console.log(b);
// ---------------------------------------------------------------
const users = [
  {
    id: 1,
    name: "Анатолий",
    lastname: "Ушанов",
    age: 30,
  },
  {
    id: 2,
    name: "Максим",
    lastname: "Грибов",
    age: 28,
  },
  {
    id: 3,
    name: "Антон",
    lastname: "Куликов",
    age: 27,
  },
  {
    id: 4,
    name: "Юрий",
    lastname: "Митрофанов",
    age: 45,
  },
];

const result = users.filter(function ({ age }) {
  return age < 30;
});

// const result_1 = users.map(function (item) {
//   return {
//     name: item.name,
//     lastname: item.lastname,
//   };
// });
// console.log(result_1);
// -------------------------------------------------------------------
const result_1 = users.map(function ({ name, lastname }) {
  return { name, lastname };
});
console.log(result_1);
// -------------------------------------------------------------------

const users = [
  {
    id: 1,
    name: "Анатолий",
    lastname: "Ушанов",
    age: 30,
  },
  {
    id: 2,
    name: "Максим",
    lastname: "Грибов",
    age: 28,
  },
  {
    id: 3,
    name: "Антон",
    lastname: "Куликов",
    age: 27,
  },
  {
    id: 4,
    name: "Юрий",
    lastname: "Митрофанов",
    age: 45,
  },
];
const result_1 = users
  .filter(function ({ age }) {
    return age < 30;
  })

  .map(function ({ name, lastname }) {
    return { name, lastname };
  });
console.log(result_1);

// [
//   { name: "Максим", lastname: "Грибов" },
//   { name: "Антон", lastname: "Куликов" },
// ];

// -------------------------------------------------------------------

// reduce()

const numbers = [45, 2, 6, 3];

const result = numbers.reduce(function (acc, item) {
  return acc + item;
}, 0);
console.log(result); // 56

// (0, 45) -> 45
// ( 45, 2) -> 47
// ( 47, 6) -> 53
// ( 53, 3) -> 56

// Итого: 56

function handler(acc, item) {
  return acc + item;
}
handler(handler(handler(0, 45), 2), 6);
// -------------------------------------------------------------------

// используя reduce найти наименьшее значение в массиве numbers

const numbers = [45, 6, 3, 2];
const result = numbers.reduce(function (acc, item) {
  if (item < acc) {
    return item;
  } else {
    return acc;
  }
});
console.log(result); // 2

// ( 45, 6) -> 6
// ( 6, 3) -> 3
// ( 3, 2) -> 2

// -------------------------------------------------------------------

const numbers = [45, 6, 3, 2];
const result = numbers.reduce(function (acc, item) {
  console.log(acc, item);
  if (acc === item) {
    return item;
  } else {
    return acc;
  }
}, 0);
console.log(result); // 56

// 0 45
// 0 6
// 0 3
// 0 2
// 0

// -------------------------------------------------------------------

// используя reduce найти произведение всех значений массива

const numbers = [45, 6, 3, 2];
const result = numbers.reduce(function (acc, item) {
  return item * acc;
});
console.log(result); // 1620

// -------------------------------------------------------------------
// найти сумму amount
const data = [
  { id: 1, amount: 12000 },
  { id: 2, amount: 13000 },
  { id: 3, amount: 14000 },
  { id: 4, amount: 15000 },
  { id: 5, amount: 16000 },
];
const result = data.reduce(function (acc, item) {
  return acc + item.amount;
}, 0);
console.log(result); // 70000
// -------------------------------------------------------------------
// деструктуризация js
const data = [
  { id: 1, amount: 12000 },
  { id: 2, amount: 13000 },
  { id: 3, amount: 14000 },
  { id: 4, amount: 15000 },
  { id: 5, amount: 16000 },
];
const result = data.reduce(function (acc, { amount }) {
  return acc + amount;
}, 0);
console.log(result); // 70000

// -------------------------------------------------------------------
const data = [
  { id: 1, amount: 12000 },
  { id: 2, amount: 13000 },
  { id: 3, amount: 14000 },
  { id: 4, amount: 15000 },
  { id: 5, amount: 16000 },
];
const result = data.reduce(function (acc, { amount }) {
  return acc + amount;
}, 0);
console.log(result); // 70000
// без initial value
return acc.amount + item.amount({ id: 1, amount: 12000 });
