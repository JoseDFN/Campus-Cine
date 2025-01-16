// Import the films array from the data.js module
import { films } from './data.js';

// Import the searchFilm function from the methods.js module
import { searchFilm } from './methods.js';

// Select the container element where the movie cards will be displayed
const container__films = document.getElementById('films');

// Add a click event listener to the search button
document.getElementById('search__button').addEventListener('click',(e) => {

  // Get the user's search query and convert it to lowercase
  const userReq = document.getElementById('search__input').value.toLowerCase();

  // Clear the container element before displaying new search results
  container__films.innerHTML = "";

  // Call the searchFilm function with the films array, user's search query, and container element
  searchFilm(films, userReq, container__films)
})

// Add a keydown event listener to the search input field
document.getElementById('search__input').addEventListener('keydown', (e) => {

  // Check if the user pressed the Enter key
  if (e.key === 'Enter') {

    // Get the user's search query and convert it to lowercase
    const userReq = document.getElementById('search__input').value.toLowerCase();

    // Clear the container element before displaying new search results
    container__films.innerHTML = "";

    // Call the searchFilm function with the films array, user's search query, and container element
    searchFilm(films, userReq, container__films)

    // Remove focus from the input field to close the mobile keyboard
    e.target.blur();
    document.body.focus();
  }
});