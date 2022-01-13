import { getData } from "./data.js";

const data = (getData());
const container = document.querySelector('.container');
const span = document.querySelector('span')

export const showOnWindow =(array) => {
    for(let el of array){
        const div= document.createElement('div')
        div.className='card';
        const img= document.createElement('img')
        const h3= document.createElement('h3')
        const p= document.createElement('p')
        const button = document.createElement('button')

        img.src=el.imageUrl;
        h3.innerHTML=el.name;
        p.innerText = `$${el.price}`;
        button.innerHTML='Add To Cart'
        button.id=el.id;
        div.appendChild(img)
        div.appendChild(button)
        div.appendChild(h3)
        div.appendChild(p)
        container.appendChild(div)
    }
}


export const filter = (btnId) => {
    let filtered;
    for(let el of data){
        if(el.id===btnId){
            filtered=(el);
            console.log(el)
        }
    }
    return filtered;
}

export const addToCart = (event)=>{
    let numberOfItemsAdded= JSON.parse(localStorage.getItem('itemsSelected'));
     const felement=filter(event.target.id);
     localStorage.setItem('itemsSelected',numberOfItemsAdded+1)
     span.innerText=numberOfItemsAdded+1
    console.log(event.target.id)
}

export const windowRefresh=()=>{
    let numberOfItemsAdded= JSON.parse(localStorage.getItem('itemsSelected'));
    span.innerHTML=numberOfItemsAdded;
}