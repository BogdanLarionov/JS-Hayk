//1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "Irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
// метод-1
users.forEach((elem) => console.log(elem));
// метод-2
users.forEach(function (users) {
  return users;
});
console.log(users);

// -------------------------------------------------------------------------------------
//2. Получите из всех объектов значения last_name и сформируйте из этих имен массив.
const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "Irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

// способ_1 arrow function
const result = users.map(({ last_name }) => last_name);
console.log(result);

// ["Ivanov", "Petrova", "Alexandrova", "Sokolov"];

// способ_2 - diclaration
const lastname = users.map(function (el) {
  return el.last_name;
});
console.log(lastname);
// -------------------------------------------------------------------------------------

// 3. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной.

const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "Irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

// способ_1 arrow function
// const user_olga = users.find((elem) => elem.first_name === "Olga");
// console.log(user_olga);

// способ_2 - diclaration
const user_olga = users.find(function (elem) {
  return elem.first_name === "Olga";
});
console.log(user_olga); // возврощает один элемент (самый первый), подощедший под условие

// Метод filter() - всегда формирует массив!!!

const user_olga_filter = users.filter(function (elem) {
  return elem.first_name === "Olga";
});
// })[0]; - дописать и вивидео как find!
console.log(user_olga_filter); // возврощает массив со всеми элементами,  подощедшими под условие

// Ответ - find { first_name: 'Olga', last_name: 'Petrova', age: 12, salary: 250 }
// Ответ - filter [{ first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 }];
// -------------------------------------------------------------------------------------
// const name_O = users.filter((elem) => elem.name[0] === "O");
// // const name_O = users.filter(({ name }) => name[0] === "O"); // -  деструкторизация
// console.log(name_O);
// -------------------------------------------------------------------------------------

// 4. Сформируйте новый массив без объекта, где first_name == "Irina"

const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "Irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

// способ_1 arrow function
const users_without_irina = users.filter(({ first_name }) => {
  return first_name !== "Irina";
});
console.log(users_without_irina);

// способ_2 - diclaration
const users_without_irina = users.filter(function (el) {
  return el.first_name !== "Irina";
});
console.log(users_without_irina);

// 5. Добавьте в конец нового массива объект со значениями:
// { first_name: 'Anton', last_name: 'Gribov', age: 36, salary: 1760 }

const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "Irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];
users.push({ first_name: "Anton", last_name: "Gribov", age: 36, salary: 1760 });
console.log(users);

// 6. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']

const users = [
  { first_name: "Ivan", last_name: "Ivanov", age: 20, salary: 500 },
  { first_name: "Olga", last_name: "Petrova", age: 12, salary: 250 },
  { first_name: "Irina", last_name: "Alexandrova", age: 46, salary: 1500 },
  { first_name: "Denis", last_name: "Sokolov", age: 30, salary: 760 },
];

const adult_users = users
  .filter(function ({ age }) {
    return age >= 18;
  })
  .map(({ first_name, last_name, age, salary }) => {
    return `${first_name} ${last_name} возраст: (${age}), зарплата: ${salary}`;
  });
console.log(adult_users);

// [
//   'Ivan Ivanov возраст: (20), зарплата: 500',
//   'Irina Alexandrova возраст: (46), зарплата: 1500',
//   'Denis Sokolov возраст: (30), зарплата: 760'
// ]
