// Función para crear tarjetas dinámicamente
export function cardCreate(films, container) {

  // Iterate over each film object in the films array
  films.forEach(film => {

    // Destructure the film object to get the title, image, and description properties
    const {title, image, description} = film

    // Create a new div element and assign the "card" class to it
    const card = document.createElement("div");
    card.classList.add("card");

    // Use template literals to create the HTML structure for the movie card
    // The title, image, and description are inserted into the respective HTML elements
    card.innerHTML = `
    <div class="title__container">
      <h2 class = "title__card">${title}</h2>
    </div>
    
    <div class="image__container">
      <img class= "img__card" src="./img/${image}" alt="${title}">
    </div>
    <div class="description__container">
      <p class = "description__card">${description}</p>
    </div>
    <div class = "button__container">
      <button class="button__card" data-name="${title}">Ver más</button>
    </div>
    `;

    // Append the newly created card element to the specified container
    container.appendChild(card);
  });
};

// Function to search for a film and display results
export function searchFilm(films, query, container) {
  // Return a new Promise to handle asynchronous operations
  return new Promise((resolve, reject) => {
    // Check if the query is empty
    if (!query) {
      // Create a message element to inform the user to enter a search term
      const noResultsMessage = document.createElement('p');
      noResultsMessage.innerHTML = `<br>Ingresa la pelicula a buscar`;
      container.appendChild(noResultsMessage);
      // Reject the promise as no query was provided
      reject();
      return;
    }

    // Filter the films array to find matches with the query
    const filter = films.filter((film) =>
      film.title.toLowerCase().includes(query.toLowerCase())
    );

    // Check if no films matched the query
    if (filter.length === 0) {
      // Create a message element to inform the user that no films were found
      const noResultsMessage = document.createElement('p');
      noResultsMessage.innerHTML = `<br>Lo sentimos, no tenemos disponible la pelicula ${query} en este momento`;
      container.appendChild(noResultsMessage);
      // Resolve the promise as the search operation is complete
      resolve();
      return;
    }

    // If films are found, create cards for each film
    cardCreate(filter, container);
    // Resolve the promise as the search operation is complete
    resolve();
  });
}

function popupCreate(film, container) {
  const [{title, image, description, length, genre, cast, dateLaunch}] = film;

  // Crear el contenedor del popup
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Contenido del popup
  popup.innerHTML = `
  <div class="popup__title">
    <h2>${title}</h2>
  </div>
  <div class="popup__image">
    <img src="./img/${image}" alt="${title}">
  </div>
  <div class="popup__description">
    <p>${description}</p>
  </div>
  <div class="popup__info--right">
    <p>Duración: ${length}</p>
    <p>Género: ${genre}</p>
    <p>Fecha De Lanzamiento: ${dateLaunch}</p>
  </div>
  <div class="popup__info--left">
    <p>Cast: ${cast}</p>
  </div>
  `;

  // Crear el fondo del popup que cubre el resto de la página
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Añadir el popup al contenedor del overlay
  overlay.appendChild(popup);

  // Agregar el overlay con el popup al contenedor principal
  container.appendChild(overlay);

  // Cerrar el popup cuando el usuario haga clic fuera de él
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
}


export function getPopUpInfo (films, query, container){
  return new Promise((resolve, reject) => {
    // Filter the films array to find matches with the query
    const filter = films.filter((film) =>
      film.title.includes(query)
    );
    // If films are found, create the popup for the film
    popupCreate(filter, container);
    // Resolve the promise as the search operation is complete
    resolve();
  });
}