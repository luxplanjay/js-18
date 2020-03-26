import itemsTemplate from '../templates/gallery-items.hbs';
import countries from '../countries.json';
import '../sass/gallery.scss';

const galleryRef = document.querySelector('.js-gallery');

const markup = itemsTemplate(countries);
galleryRef.insertAdjacentHTML('beforeend', markup);
