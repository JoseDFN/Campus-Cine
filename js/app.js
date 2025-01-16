// Import the films array from the data.js module
import { films } from './data.js';

// Import the searchFilm function from the methods.js module
import { searchFilm, getPopUpInfo, cardCreate } from './methods.js';

// Select the container element where the movie cards will be displayed
const container__films = document.getElementById('films');

cardCreate(films, container__films);

const viewMoreButtons = document.querySelectorAll(".button__card"); // Seleccionar todos los botones con la clase "button__card"

    viewMoreButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const filmName = button.getAttribute("data-name"); 
        console.log(`La Película Seleccionada Es: ${filmName}`);

        getPopUpInfo(films, filmName, container__films);
        e.target.blur();
        document.body.focus();
      });
    });

// Add a click event listener to the search button
document.getElementById('search__button').addEventListener('click', (e) => {
  // Select the container element where the movie cards will be displayed
const container__films = document.getElementById('films');

  // Get the user's search query and convert it to lowercase
  const userReq = document.getElementById('search__input').value.toLowerCase();

  // Clear the container element before displaying new search results
  container__films.innerHTML = "";

  // Call the searchFilm function with the films array, user's search query, and container element
  searchFilm(films, userReq)
  .then((filteredFilms) => {
    // Llamar a la función para crear tarjetas con las películas encontradas
    cardCreate(filteredFilms, container__films);
  })
  .catch((errorMessage) => {
    // Mostrar el mensaje de error en el contenedor
    const errorElement = document.createElement('p');
    errorElement.innerHTML = `<br>${errorMessage}`;
    container__films.appendChild(errorElement);
  });

  const viewMoreButtons = document.querySelectorAll(".button__card"); // Seleccionar todos los botones con la clase "button__card"

  viewMoreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const filmName = button.getAttribute("data-name"); 
      console.log(`La Película Seleccionada Es: ${filmName}`);
      
      getPopUpInfo(films, filmName, container__films);
      e.target.blur();
      document.body.focus();
    });
  });
})

// Add a keydown event listener to the search input field
document.getElementById('search__input').addEventListener('keydown', (e) => {
  // Select the container element where the movie cards will be displayed
const container__films = document.getElementById('films');

  // Check if the user pressed the Enter key
  if (e.key === 'Enter') {

    // Get the user's search query and convert it to lowercase
    const userReq = document.getElementById('search__input').value.toLowerCase();

    // Clear the container element before displaying new search results
    container__films.innerHTML = "";

    // Call the searchFilm function with the films array, user's search query, and container element
    searchFilm(films, userReq)
  .then((filteredFilms) => {
    // Llamar a la función para crear tarjetas con las películas encontradas
    cardCreate(filteredFilms, container__films);
  })
  .catch((errorMessage) => {
    // Mostrar el mensaje de error en el contenedor
    const errorElement = document.createElement('p');
    errorElement.innerHTML = `<br>${errorMessage}`;
    container__films.appendChild(errorElement);
  });


    // Remove focus from the input field to close the mobile keyboard
    e.target.blur();
    document.body.focus();

    const viewMoreButtons = document.querySelectorAll(".button__card"); // Seleccionar todos los botones con la clase "button__card"

    viewMoreButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const filmName = button.getAttribute("data-name"); // Corregir el nombre del método: "getAttribute" (no "getAtribute")
        console.log(`La Película Seleccionada Es: ${filmName}`);

        getPopUpInfo(films, filmName, container__films);
        e.target.blur();
        document.body.focus();
      });
    });
  }
});

