// создать элемент (тег)
// createElement

// 2 способа добавления элемента в document:
// 1) append - text and element
// 2) appendChild - element;

// 0 - 19
//создать p
// добавить текст
// добавить этот п в body

// for (let i = 0; i <= 26; i++) {
//   let par = document.createElement("p");
//   par.innerText = `${i}`; // интерполяция
//   body.appendChild(par);
// }

//создаем див с ид "test";
//цикл - создаем параграфы ,в котором будет текст "цифра" + "this is new p"
// 0 this is new p
// 1 this is new p

// 0 - 20

//createElement, appendChild

// let test = document.createElement("div");
// test.setAttribute("id", "test");

// for (let i = 0; i <= 20; i++) {
//   let createP = document.createElement("p");
//   createP.innerText = `${i} this is new p`;
//   createP.setAttribute("id", `${i}`);
//   test.appendChild(createP);
// }

// body.appendChild(test);

// test.append("testing string");

const strings = [
  "createElement - создаёт элемент c тем тегом, что указан в аргументе",
  "appendChild - обавляет узел в конец списка дочерних элементов указанного родительского узла.",
  "Циклы - for(for in , for of), while, do while",
  "Функции являются основными «строительными блоками» программы.",
];

// for of
// createElement, appendChild

//Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root.

const root = document.createElement("div");
root.setAttribute("id", "root");

// for (let strForP of strings) {
//   let paragraph = document.createElement("p"); // tag p
//   paragraph.innerText = strForP;
//   root.appendChild(paragraph);
// }

const body = document.querySelector("body");
// body.appendChild(root);

let userImg = prompt("Add image's link:");
let userPost = prompt("Add your post's link:");

const image = document.createElement("img");
image.setAttribute("src", userImg);

const post = document.createElement("a");
post.innerText = "Мой пост";
post.setAttribute("href", userPost);
post.setAttribute("target", "_blank"); 

body.append(image, post);



