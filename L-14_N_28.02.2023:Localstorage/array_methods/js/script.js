// array_methods

// 1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', ...]

// Дан массив
const people = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    city: "Moscow",
    country: "Russia",
  },
  {
    first_name: "Olga",
    last_name: "Petrova",
    age: 12,
    city: "Berlin",
    country: "Germany",
  },
  {
    first_name: "Irina",
    last_name: "Alexandrova",
    age: 46,
    city: "Paris",
    country: "France",
  },
  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 30,
    city: "Roma",
    country: "Italy",
  },
];

// метод map() возвращает новый массив
const users = people.filter(function ({
  first_name,
  last_name,
  city,
  country,
}) {
  return `${first_name} ${last_name} (${city}, ${country})`;
});
console.log(users);
// Ответ
// ["Ivan Ivanov (Moscow, Russia)","Olga Petrova (Berlin, Germany)", "Irina Alexandrova (Paris, France)","Denis Sokolov (Roma, Italy)",];

// 2. Сформируйте массив из людей (объектов), чьи имена начинаются на 'I' (регистр буквы может быть и нижним)
const people = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    city: "Moscow",
    country: "Russia",
  },
  {
    first_name: "Olga",
    last_name: "Petrova",
    age: 12,
    city: "Berlin",
    country: "Germany",
  },
  {
    first_name: "Irina",
    last_name: "Alexandrova",
    age: 46,
    city: "Paris",
    country: "France",
  },
  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 30,
    city: "Roma",
    country: "Italy",
  },
];

const i_people = people.filter(function (el) {
  return el.first_name[0].toUpperCase() === "I";
});
console.log(i_people);

// Ответ:
// [
//   {
//     first_name: "Ivan",
//     last_name: "Ivanov",
//     age: 20,
//     city: "Moscow",
//     country: "Russia",
//   },
//   {
//     first_name: "Irina",
//     last_name: "Alexandrova",
//     age: 46,
//     city: "Paris",
//     country: "France",
//   },
// ];

// 3. Сформируйте массив из имен и фамилий людей ('Имя Фамилия'), проживающих в Германии и Франции

const people = [
  {
    first_name: "Ivan",
    last_name: "Ivanov",
    age: 20,
    city: "Moscow",
    country: "Russia",
  },
  {
    first_name: "Olga",
    last_name: "Petrova",
    age: 12,
    city: "Berlin",
    country: "Germany",
  },
  {
    first_name: "Irina",
    last_name: "Alexandrova",
    age: 46,
    city: "Paris",
    country: "France",
  },
  {
    first_name: "Denis",
    last_name: "Sokolov",
    age: 30,
    city: "Roma",
    country: "Italy",
  },
];

const german_people = people
  .filter(function (el) {
    return el.country === "Germany" || el.country === "France";
  })
  .map(function (el) {
    return `${el.first_name} ${el.last_name}`;
  });
console.log(german_people);

// ["Olga Petrova", "Irina Alexandrova"];
