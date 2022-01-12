import { getData } from "./data.js";
import { filter } from "./helper.js";
import { showOnWindow } from "./helper.js";
import { clicked } from "./helper.js";
const data = (getData());
console.log(data)
const container = document.querySelector('.container');
const span = document.querySelector('span')

showOnWindow(data);

container.addEventListener('click',clicked)

