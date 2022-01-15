import { getData } from "./data.js";
const data= getData()
const filter = (btnId) => {
  let filtered;
  for (let el of data) {
    if (el.id === btnId) {
      filtered = el;
      //   console.log(el);
    }
  }
  return filtered;
};
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

const totalItems = () => {
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  const values = Object.values(productsInCart);
  let result = values.reduce((a, b) => a + b, 0);
  return result;
};

const totalPrice = (array) => {
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  let tot = 0;
  for (let el of array) {
    tot += el.price * productsInCart[el.id];
  }
  return tot;
};

console.log(onLoad());
