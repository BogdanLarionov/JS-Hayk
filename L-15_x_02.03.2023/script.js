// // LocalStoregy
// https://flatuicolors.com/ - цвета

// const form = document.querySelector(".add-task");
// const tasks = document.querySelector(".tasks");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   //   console.log(event);
//   // ---------------------
//   // короткий метод
//   const { title, priority } = event.target;
//   // ---------------------
//   // длинный метод
//   //   const title = event.target.title;
//   //   const priority = event.target.priority;
//   // ---------------------
//   //   console.log(title);
//   //   console.log(priority);

//   const newElem = createTask(title.value, priority.value);
//   tasks.append(newElem);
//   event.target.reset();
// });
// // console.log(tasks);

// // ---------------------
// // Задание
// // function createTask(title, priority) {
// // реализовать процесс формирования
// // карточки с задачей
// // createElement
// // append
// // innerText
// // }

// //   <div>
// //     <p>title</p>
// //     <p>priority</p>
// // </div>

// // ---------------------
// function createTask(title, priority) {
//   const container = document.createElement("div");
//   const pTitle = document.createElement("p");
//   const pPriority = document.createElement("p");

//   pTitle.innerText = title;
//   pPriority.innerText = priority;

//   container.append(pTitle, pPriority);
//   return container;
// }

// // createTask("Поесть", 1);

// // ---------------------

// // реализовать вызов createTask в процессе обработки
// // отправки формы

// // доработать createTask таким образом, чтобы
// // данная функция возвращала div с параграфами

// // то, что возвращает createTask необходимо добавить
// // в div с классом tasks

const form = document.querySelector(".add-task");
const tasks = document.querySelector(".tasks");
let tasksArray = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //   const { title, priority } = event.target;

  //   tasksArray.push({
  //     id: Date.naow(),
  //     title: title.value,
  //     priority: priority.value,
  //   });

  const { title, priority } = event.target;
  tasksArray.push({
    id: Date.now(),
    title: title.value,
    priority: priority.value,
  });

  rerender();
  //   const newElem = createTask(title.value, priority.value);
  //   tasks.append(newElem);
  event.target.reset();
});
function createTask(id, title, priority) {
  const container = document.createElement("div");
  const pTitle = document.createElement("p");
  const remove = document.createElement("button");
  pTitle.innerText = title;
  remove.innerText = "Удалить";
  container.append(pTitle, remove);

  if (+priority === 1) {
    container.style.backgroundColor = "#e74c3c";
  } else {
    container.style.backgroundColor = "#ecf0f1";
  }
  // / добавить кнопку "удалить"
  remove.addEventListener("click", function () {
    // console.log("delite");
    // container.remove();
    tasksArray = tasksArray.filter(function (item) {
      return item.id !== id;
    });
    rerender();
  });
  return container;
}

// добавить обработку события нажатия на кнопку "Удалить"
// вывести "удалие" в консоль

function rerender() {
  tasks.innerText = "";
  tasksArray.forEach(function ({ id, title, priority }) {
    const newElem = createTask(id, title, priority);
    tasks.append(newElem);
  });
}
