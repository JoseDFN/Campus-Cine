import { peliculas } from "./data";

// Función para crear tarjetas dinámicamente
export function crearTarjetas(peliculas, contenedor) {

  peliculas.forEach(pelicula => {
    const {titulo, imagen, resumen} = pelicula
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
    <img class= "img__card" src="./img/${imagen}" alt="${titulo}">
    <div class="content">
      <h2 class = "title__card">${titulo}</h2>
      <p class = "description__card">${resumen}</p>
    </div>
    `;
    contenedor.appendChild(card);
  });
}

export function filmFiltering(query, peliculas){
  const {titulo} = peliculas;
  peliculas.then(peliculas => {
    return peliculas.filter(film => film.toLowerCase().includes(query))
  });
}