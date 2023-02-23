const users = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    salary: 500,
  },

  {
    first_name: "Olga",
    last_name: "Petrova",
    age: 12,
    salary: 250,
  },

  {
    first_name: "Irina",
    last_name: "Alexandrova",
    age: 46,
    salary: 1500,
  },

  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 30,
    salary: 760,
  },
];

//1. Пройдитесь по массиву с объектами циклом forEach и выведите каждый элемент в консоль
// users.forEach((elem) => console.log(elem));

//2. Получите из всех объектов значения last_name и сформируйте из этих имен массив.

// 3. Получите из этого массива объект, где first_name == "Olga", и сохраните это в какой-нибудь переменной.

// 4. Сформируйте новый массив без объекта, где first_name == "Irina"

// 5. Добавьте в конец нового массива объект со значениями:
// {
//   first_name: 'Anton',
//   last_name: 'Gribov',
//   age: 36,
//   salary: 1760
// }

// 6. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: <Имя> <Фамилия> (<возраст>): <зарплата>.
// ['Ivan Ivanov (20): 500', 'Irina Alexandrova (46): 1500', 'Denis Sokolov (30): 760']
