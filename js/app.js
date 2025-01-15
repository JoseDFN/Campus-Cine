import { peliculas } from './data.js';
import { crearTarjetas } from './methods.js';

// Seleccionar el contenedor de las tarjetas
const container__films = document.getElementById('films');
const userReq = document.getElementsByClassName('search__input');

// Llamar a la función para crear tarjetas
crearTarjetas(peliculas, container__films);

