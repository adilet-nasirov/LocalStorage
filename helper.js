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
    button.addEventListener('click', addToCart)
    div.appendChild(img);
    div.appendChild(button)
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
    //   console.log(el);
    }
  }
  return filtered;
};

export const addToCart = (event) => {
  const id = event.target.id;
  let quantity = 1;
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  const product = {
    ...productsInCart,
    [id]: quantity,
  };
  if (productsInCart != null) {
    if (productsInCart.hasOwnProperty([id])) {
      quantity = productsInCart[id] + 1;
      const all={
          ...productsInCart,
          [id]: quantity
      }
      localStorage.setItem("productsInCart", JSON.stringify(all));
    } else {
      localStorage.setItem("productsInCart", JSON.stringify(product));
    }
    const arr = Object.values(productsInCart);
    let count = 0;
    for (let el of arr) {
      count += el;
    }
    span.innerText = count+1;
  } else{
    localStorage.setItem("productsInCart", JSON.stringify(product));
    span.innerText = 1;
  }
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
