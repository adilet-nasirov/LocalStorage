import { getData } from "./data.js";
import { showOnWindow } from "./helper.js";
const data = getData();
const container = document.querySelector('.container');
const span = document.querySelector('span')

const onLoad=()=>{
    const arr=[]
    for(let i=0; i< localStorage.length; i++){
        let x=JSON.parse(localStorage.getItem(localStorage.key(i)));
        arr.push(x)
    }
    return arr;
}
const arrayFromLocal = onLoad()
showOnWindow(arrayFromLocal)