import { getData } from "./data.js";
import { onLoad } from "./tools.js";
const data = getData();

const container = document.querySelector("#itemsOnCart");

const displayItemsOnCart = (arr) => {
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  const cartIcon=document.createElement('p')
  
  cartIcon.innerHTML=`<h4>Cart <span class="price" style="color:black"><i class="fa fa-shopping-cart"></i> <b id='num'>4</b></span></h4>`
  container.appendChild(cartIcon)
  for (let el of arr) {
    const p = document.createElement("p");
    p.innerHTML = `<a href="cart.html" id="">${el.name}</a> <span class="price">$${el.price}</span>`;
    container.appendChild(p);
  }
  const num= document.querySelector('#num')
  num.innerHTML=arr.length;
  // const totP=document.createElement('p')
};
displayItemsOnCart(onLoad());
