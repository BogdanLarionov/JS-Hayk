// 1. Сформировать карточки товаров (название, цену, наличие на складе). Если товар есть на складе, то выводить 'in stock', если нет - 'not in stock'. Добавить карточки в div products_container

// Дан массив с товарами

// Через метод map()

const goods = [
  { id: 1, product: "iPhone 14", price: 1500, in_stock: true },
  { id: 2, product: "Samsung A53", price: 1000, in_stock: true },
  { id: 3, product: "Huawei 11", price: 900, in_stock: true },
  { id: 4, product: "Nokia N4", price: 500, in_stock: false },
  { id: 5, product: "iPhone 12", price: 1100, in_stock: false },
];

const products_container = document.querySelector(".products_container");

const products_cards = goods.map(function ({ product, price, in_stock }) {
  const productCard = document.createElement("div");
  const titleelem = document.createElement("p");
  const priceElem = document.createElement("p");
  const inStockElem = document.createElement("p");

  const inStock = in_stock ? "in stoke" : "not in stock";

  titleelem.innerText = `Title: ${product}`;
  titleelem.innerText = `Price: ${price}`;
  inStockElem.innerText = `In stock: ${inStock}`;

  productCard.append(titleelem, priceElem, inStockElem);

  return productCard;
});

products_container.append(...products_cards);

// ------------------------------------------

// const a = [1, 2, 3, 4, 5];
// console.log(a); //  [ 1, 2, 3, 4, 5 ]
// console.log(...a); // 1 2 3 4 5

// ------------------------------------------

// Mетод через forEach()

const goods = [
  { id: 1, product: "iPhone 14", price: 1500, in_stock: true },
  { id: 2, product: "Samsung A53", price: 1000, in_stock: true },
  { id: 3, product: "Huawei 11", price: 900, in_stock: true },
  { id: 4, product: "Nokia N4", price: 500, in_stock: false },
  { id: 5, product: "iPhone 12", price: 1100, in_stock: false },
];
const products_container = document.querySelector(".products_container");

goods.forEach(function ({ product, price, in_stock }) {
  const productCard = document.createElement("div");
  const titleelem = document.createElement("p");
  const priceElem = document.createElement("p");
  const inStockElem = document.createElement("p");

  const inStock = in_stock ? "in stoke" : "not in stock";

  titleelem.innerText = `Title: ${product}`;
  titleelem.innerText = `Price: ${price}`;
  inStockElem.innerText = `In stock: ${inStock}`;

  productCard.append(titleelem, priceElem, inStockElem);
  products_container.append(productCard);
});

// ДЗ
// Стилизовать карточки
// Добавить форму с двумя инпутами для сбора данных о названии продукта и его цене. По умолчанию все добавляемые продукты должны иметь свойство in_stock со значением true
// При отправке формы выводить собранные данные из формы в консоль в виде объекта
// При отправке формы отрисовывать карточку из собранных данных
// При обновлении страницы добавленные карточки не пропадают
