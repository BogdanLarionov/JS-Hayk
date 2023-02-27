const tutors = [
  {
    id: 1,
    fullname: "Bogdan",
    position: {
      title: "Специаоист по вилкам",
      status: "Employee",
    },
    photo: "https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/226/493/8.jpg",
  },
  {
    id: 2,
    fullname: "Michal",
    position: {
      title: "Специаоист по втулкам",
      status: "Employee",
    },
    photo:
      "https://avatars.dzeninfra.ru/get-zen_doc/1931033/pub_5fa7ba2b3a59d851057ae38b_5fa7ba6eb1fbcf2e230453c6/scale_1200",
  },
  {
    id: 3,
    fullname: "Jhon",
    position: {
      title: "CEO",
      status: "Manager",
    },
    photo:
      "https://n1s2.hsmedia.ru/40/28/aa/4028aa9e4bba86b8de98298945d10386/728x542_1_45a7e3ae7bb73e549b9d779d15a85c65@1200x894_0xac120003_245910781637699737.jpeg",
  },
];

console.log(tutors);

const tutors_containers = document.querySelector(".tutors_containers");

tutors.forEach(function ({ id, fullname, position, photo }) {
  const cardElem = document.createElement("div");
  const avatarElem = document.createElement("div");
  const nameElem = document.createElement("p");
  const positionElem = document.createElement("p");
  const btnElem = document.createElement("button");

  const { title, status } = position;

  // const { title } = position;

  // if (position.status === "Manager") {
  //   cardElem.style.backgroundColor = "green";
  // } else {
  //   cardElem.style.backgroundColor = "pink";
  // }

  nameElem.innerText = fullname;
  positionElem.innerText = title;
  btnElem.innerText = "Биография";

  nameElem.addEventListener(
    "click",
    (event) => (event.target.innerText = "Hello")
  );

  avatarElem.style.backgroundImage = `url(${photo})`;

  if (status === "Manager") {
    cardElem.style.backgroundColor = "green";
  } else {
    cardElem.style.backgroundColor = "pink";
  }

  // Тернарный оператор!
  // cardElem.style.backgroundColor =
  //   status === "Manager" ? "lightgreen" : "lightpink";

  cardElem.append(avatarElem, nameElem, positionElem, btnElem);
  tutors_containers.append(cardElem);
});

// Если человек входит в управляющее звено, сделать ему цвет заднего фона зеленый, а если нет - то светло-розовый
