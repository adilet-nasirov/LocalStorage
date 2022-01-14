import { getData } from "./data.js";

const data = getData();
const container = document.querySelector(".container");
const span = document.querySelector("span");

export const showOnWindow = (array) => {
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
    button.innerHTML = "Add To Cart";
    button.id = el.id;
    div.appendChild(img);
    div.appendChild(button);
    div.appendChild(h3);
    div.appendChild(p);
    container.appendChild(div);
  }
};

export const filter = (btnId) => {
  let filtered;
  for (let el of data) {
    if (el.id === btnId) {
      filtered = el;
      console.log(el);
    }
  }
  return filtered;
};

export const addToCart = (event) => {
  const id = event.target.id;
  let quantity = 1;
  const product = {
    ...productsInCart,
    [id]: quantity,
  };
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  if (productsInCart !== null) {
    if (productsInCart.hasOwnProperty(id)) {
      //   console.log(productsInCart.id)
      quantity = productsInCart[id] + 1;
      localStorage.setItem("productsInCart", JSON.stringify(product));
    } else {
      localStorage.setItem("productsInCart", JSON.stringify(product));
    }
  } else {
    const product = {
      ...productsInCart,
      [id]: quantity,
    };
    localStorage.setItem("productsInCart", JSON.stringify(product));
  }
  const arr = Object.values(productsInCart);
  let count = 0;
  for (let el of arr) {
    count += el;
  }
  console.log(count);
  span.innerText = count;
  //   console.log(product);
};

export const windowRefresh = () => {
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  if (productsInCart !== null && productsInCart !== undefined) {
    const arr = Object.values(productsInCart);
    let count = 0;
    for (let el of arr) {
      count += el;
    }
    span.innerText = count;
  }
};
