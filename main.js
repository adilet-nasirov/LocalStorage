import { getData } from "./data.js";
import { windowRefresh } from "./helper.js";
import { showOnWindow } from "./helper.js";
import { addToCart } from "./helper.js";
const data = (getData());
console.log(data)
const container = document.querySelector('.container');
const span = document.querySelector('span')

showOnWindow(data);
windowRefresh();
// container.addEventListener('click',clicked)

container.addEventListener('click', addToCart)