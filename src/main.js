import data from './data/ghibli/ghibli.js';
// console.log(data.films[0].title);
crearTarjetas(data.films);

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible");
});

function crearTarjetas(peliculas){
    const container = document.querySelector('.container')
    peliculas.forEach(films => {   
    container.innerHTML += `
    <article class="card">
            <img class="posters" src="${films.poster}"
            <h2 class="titulo">${films.title}</h2>
            <p>${films.description}</p>
            <a href="https://www.ghiblicollection.com/product/my-neighbor-totoro?product_id=6644" target="_blank">Conoce Mas</a>
          </article>
    `});
    // console.log(data.films);
}
//console.log(data.films);
// console.log(data.films[0].title);

//console.log(data.films);
// console.log(data.films[0].title);

// const card1= document.querySelector(".card");
// const card1title=card1.querySelector("h2");
// console.log(card1title);
// card1title.textContent=data.films[0].title;

// const card2 = document.createElement('article')
