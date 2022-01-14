import { getData } from "./data.js";
import { showOnWindow } from "./helper.js";
import { filter } from "./helper.js";
const data = getData();
const container = document.querySelector(".container");
const span = document.querySelector("span");

const onLoad = () => {
  const arr = [];
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  if (productsInCart !== null) {
    const ids = Object.keys(productsInCart);
    for (let el of ids) {
      arr.push(filter(el));
    }
  }
  return arr;
};

const showOnCartPage = (array) => {
  for (let el of array) {
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const button = document.createElement("button");

    img.src = el.imageUrl;
    h3.innerHTML = el.name;
    p.innerText = `$${el.price}`;
    button.innerHTML = "Delete";
    button.id = el.id;
    div.appendChild(img);
    div.appendChild(button);
    div.appendChild(h3);
    div.appendChild(p);
    container.appendChild(div);
  }
};
const arrayFromLocal = onLoad();
showOnCartPage(arrayFromLocal);
