import { getData } from "./data.js";
import { filter } from "./helper.js";
import { onLoad,totalItems,totalPrice, deleteItem ,showOnCartPage, updateQty} from "./tools.js";
const container = document.querySelector(".container");

const arrayFromLocal = onLoad();
showOnCartPage(arrayFromLocal, totalPrice(arrayFromLocal));
updateQty(arrayFromLocal);
