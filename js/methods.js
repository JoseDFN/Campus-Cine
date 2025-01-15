// Función para crear tarjetas dinámicamente
export function crearTarjetas(peliculas, contenedor) {
    peliculas.forEach(pelicula => {
    //   // Crear elementos de la tarjeta
    const card = document.createElement("div");
    card.classList.add("card");
    //   card.classList.add("card");
  
    //   const titulo = document.createElement("h2");
    //   titulo.textContent = pelicula.titulo;
  
    //   const imagen = document.createElement("img");
    //   imagen.src = pelicula.imagen;
    //   imagen.alt = `Poster de ${pelicula.titulo}`;
  
    //   const resumen = document.createElement("p");
    //   resumen.textContent = pelicula.resumen;
  
    //   const boton = document.createElement("button");
    //   boton.textContent = "Ver Detalles";
    //   boton.classList.add("button__details");
  
    //   // Agregar elementos a la tarjeta
    //   card.appendChild(titulo);
    //   card.appendChild(imagen);
    //   card.appendChild(resumen);
    //   card.appendChild(boton);
  
    card.innerHTML = `
    <img src="./img/${pelicula.imagen}" alt="${pelicula.titulo}">
    <div class="content">
      <h2>${pelicula.titulo}</h2>
      <p>${pelicula.resumen}</p>
    </div>
    `;
      contenedor.appendChild(card);
    });
  }
  