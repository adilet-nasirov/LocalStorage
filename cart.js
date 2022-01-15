import { getData } from "./data.js";
import { filter } from "./helper.js";
const container = document.querySelector(".container");

export const onLoad = () => {
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

const deleteItem = (event) => {
  const buttonId = event.target;
  const parent = buttonId.parentNode;
  const parentsParent = parent.parentNode;
  console.log(parentsParent);
  parentsParent.remove();
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  delete productsInCart[buttonId.id];
  localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  console.log("done");
  const itemNum = document.querySelector("#itemNum");
  const price = document.querySelector("#price");
  itemNum.innerHTML = totalItems();
  price.innerHTML = `$${totalPrice(onLoad())}`;
};

const showOnCartPage = (array, total) => {
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  const itemNum = document.querySelector("#itemNum");
  const price = document.querySelector("#price");
  itemNum.innerHTML = totalItems();
  price.innerHTML = `$${total}`;
  for (let el of array) {
    const div = document.createElement("div");
    div.className = "card";
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const button = document.createElement("button");
    const priceDiv = document.createElement("div");
    const imgDiv = document.createElement("div");
    const txtDiv = document.createElement("div");
    const qty = document.createElement("p");

    imgDiv.className = "imgDiv";
    priceDiv.className = "priceDiv";
    txtDiv.className = "txtDiv";
    qty.className = "qty";
    img.src = el.imageUrl;
    h3.innerHTML = el.name;
    qty.innerHTML = `<span class="qty">Qty:</span><select name="qty" class="num-select" id=${el.id}>
    <option value=1>1</option>
    <option value=2>2</option>
    <option value=3>3</option>
    <option value=4>4</option>
    <option value=5>5</option>
    <option value=6>5+</option>
    </select>`;
    // const select= document.querySelector('#num-select')
    // select.value=productsInCart[el.id]
    p.innerHTML = `$${el.price * productsInCart[el.id]} <br> <small> each $${
      el.price
    }</small>`;
    button.innerHTML = "Delete";
    button.id = el.id;
    imgDiv.appendChild(img);
    txtDiv.appendChild(h3);
    txtDiv.appendChild(qty);
    imgDiv.appendChild(txtDiv);
    priceDiv.appendChild(p);
    priceDiv.appendChild(button);
    div.appendChild(imgDiv);
    div.appendChild(priceDiv);
    container.appendChild(div);

    button.addEventListener("click", deleteItem);
  }
};

const updateQty = (array) => {
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  for (let el of array) {
    const select = document.querySelectorAll(".num-select");
    for (let x of select) {
      if (x.id == el.id) {
        if (productsInCart[el.id] > 5) {
          x.value = 6;
        }
        else{
            x.value = productsInCart[el.id];
        }
      }
    }
  }
};

const arrayFromLocal = onLoad();
showOnCartPage(arrayFromLocal, totalPrice(arrayFromLocal));
updateQty(arrayFromLocal);

// onLoad();
