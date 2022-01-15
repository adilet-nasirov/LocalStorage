import { getData } from "./data.js";
import { onLoad } from "./cart.js";
const data = getData();
console.log(onLoad())





















// const container = document.querySelector("#itemsOnCart");

// const filter = (btnId) => {
//   let filtered;
//   for (let el of data) {
//     if (el.id === btnId) {
//       filtered = el;
//       //   console.log(el);
//     }
//   }
//   return filtered;
// };
// const onLoad = () => {
//   const arr = [];
//   const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
//   if (productsInCart !== null) {
//     const ids = Object.keys(productsInCart);
//     for (let el of ids) {
//       arr.push(filter(el));
//     }
//   }
//   return arr;
// };

// const totalItems = () => {
//   const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
//   const values = Object.values(productsInCart);
//   let result = values.reduce((a, b) => a + b, 0);
//   return result;
// };

// const totalPrice = (array) => {
//   const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
//   let tot = 0;
//   for (let el of array) {
//     tot += el.price * productsInCart[el.id];
//   }
//   return tot;
// };

// const displayItemsOnCart = (arr) => {
//   const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
//   const cartIcon=document.createElement('p')
  
//   cartIcon.innerHTML=`<h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b>4</b></span></h4>`
//   container.appendChild(cartIcon)
//   for (let el of arr) {
//     const p = document.createElement("p");
//     p.innerHTML = `<a href="cart.html" id="">${el.name}</a> <span class="price">$${el.price}</span>`;
//     container.appendChild(p);
//   }
//   const totP=document.createElement('p')
// };
// displayItemsOnCart(onLoad());
