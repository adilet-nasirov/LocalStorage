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

const totalPrice = (array)=>{
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  let tot=0;
  for(let el of array){
      tot+=el.price*(productsInCart[el.id])
  }
  return(tot)
}

const showOnCartPage = (array,total) => {
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  const itemNum = document.querySelector('#itemNum')
  const price = document.querySelector('#price')
  itemNum.innerHTML=array.length;
  price.innerHTML=`$${total}`;
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
    img.src = el.imageUrl;
    h3.innerHTML = el.name;
    qty.innerHTML = `<span class="qty">Qty:</span><select name="qty" class="num-select" id=${el.id}>
    <option value=1>1</option>
    <option value=2>2</option>
    <option value=3>3</option>
    <option value=4>4</option>
    <option value=5>5</option>
    </select>`;
    // const select= document.querySelector('#num-select')
    // select.value=productsInCart[el.id]
    p.innerHTML = `$${el.price*productsInCart[el.id]} <br> <small> each $${el.price}</small>`;
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
  }

};

const updateQty = (array) => {
  const productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  for (let el of array) {
    const select = document.querySelectorAll(".num-select");
    for (let x of select) {
      if (x.id == el.id) {
        x.value = (productsInCart[el.id]);
      }
    }
  }
};

const arrayFromLocal = onLoad();
showOnCartPage(arrayFromLocal,totalPrice(arrayFromLocal));
updateQty(arrayFromLocal);


// onLoad();
