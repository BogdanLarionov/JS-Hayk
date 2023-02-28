// // Localstorage - хронит в себе данные постоянно
// // Sessionstorage - хронит в себе данные в течении сессс
// // использовать через lifeserver!

// Оператор нулевого слияния

// localStorage.setItem("testKey", "testValue"); // - записываем данные
// открыть comsole, application , Storege - Local Storage

const result = localStorage.getItem("testKey"); // - считываем данные
console.log(result);

//-------------------------------------------------------------------------------------
//  написать скрипт, который увеличивает число
//  на единицу при нажатии на кнопку
//  и получившееся значение записывает как значение кнопки

// Синтаксис: условный ? значение при true :  значение при false

// способ_1
// const btn = document.querySelector(".btn");
// let count = 0;

// btn.addEventListener("click", function () {
//   count++;
//   btn.innerText = count;
//   localStorage.setItem("counter", count);
// });
// ---------------

// // способ_2
// продолжает увеличивать
const btn = document.querySelector(".btn");
let count = localStorage.getItem("counter") ?? 0;

// Синтаксис: условный ? значение при true :  значение при false

// if (count === null) {
//   count = 0;
// }

count = count === null ? 0 : count;

btn.innerText = count;
btn.addEventListener("click", function () {
  count++;
  btn.innerText = count;
  localStorage.setItem("counter", count);
});

// Изменить скрипт таким образом, чтобы при нажатии на кнопку число увеличивалось на 5
//   count += 5;
// or
// let count = +localStorage.getItem("counter") ?? 0;
//    count = count + 5;

// ---------------
// const btn = document.querySelector(".btn");
// let count = localStorage.getItem("counter");
// if (count === null) {
//   count = 0;
//   btn.innerText = "Клик";
// } else {
//   btn.innerText = count;
// }
// btn.addEventListener("click", function () {
//   count++;
//   btn.innerText = count;
//   localStorage.setItem("counter", count);
// });
// ---------------

// // способ_3
// // const button = document.getElementById("myButton");
// // let value = parseInt(button.textContent); // получаем текущее значение кнопки и парсим его в число

// // button.addEventListener("click", () => {
// //   value++; // увеличиваем значение на единицу
// //   button.textContent = value.toString(); // записываем новое значение на кнопку, преобразуя его в строку
// // });

// // изменить скрипт таким образом, чтобы при нажатии на кнопку число увеличивалось на 5
