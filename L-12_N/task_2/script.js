const products = [
  {
    id: 1,
    title: "Apple",
    price: 50,
    image:
      "https://www.applesfromny.com/wp-content/uploads/2020/06/SnapdragonNEW.png",
  },
  {
    id: 2,
    title: "Orange",
    price: 20,
    image:
      "https://w7.pngwing.com/pngs/187/615/png-transparent-orange-fruit-orange-tangerine-orange-natural-foods-food-citrus.png",
  },
  {
    id: 3,
    title: "Lime",
    price: 70,
    image:
      "https://w7.pngwing.com/pngs/116/773/png-transparent-green-limes-cocktail-sweet-lemon-key-lime-pie-persian-lime-lime-food-citrus-lime-juice-thumbnail.png",
  },
  {
    id: 4,
    title: "Kiwi",
    price: 30,
    image: "https://e7.pngegg.com/pngimages/166/911/png-clipart-kiwi-kiwi.png",
  },
];

// Для каждого продукта из массива products создать карточку, которая будет соержать информацию о названии товара, его цене, его изображение.
// Добавить эти карточки в div products_container

const products_container = document.querySelector(".products_container");

products.forEach(function ({ title, price, image }) {
  const containerElem = document.createElement("div");
  const titleElem = document.createElement("p");
  const priceElem = document.createElement("p");
  const imgElem = document.createElement("div");

  //   titleElem.innerText = title;
  titleElem.innerText = `Title: ${title}`;
  //   priceElem.innerText = price;
  priceElem.innerText = `Price: ${price} $`;

  imgElem.style.backgroundImage = `url(${image})`;

  containerElem.classList.add("product_card");

  products_container.append(containerElem);
  containerElem.append(titleElem, priceElem, imgElem);
});
console.log(products_container);
