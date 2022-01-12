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

        img.src=el.imageUrl;
        h3.innerHTML=el.name;
        p.innerText = `$${el.price}`;

        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(p)
        container.appendChild(div)
    }
}


export const filter = (name) => {
    let filtered;
    for(let el of data){
        if(el.name===name){
            filtered=(el);
            console.log(el)
        }
    }
    return filtered;
}

export const clicked = (event)=>{
    const felement=filter((event.target.childNodes[1].innerText));
    localStorage.setItem(felement.name,JSON.stringify(felement))
    span.innerText=1
}