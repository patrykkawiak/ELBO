import './layouts/nav.js';
import './layouts/gallery.js';
import { handlePrallax } from './layouts/breaker.js';
import { handleScrollSpy } from './layouts/scroll-spy.js';

window.onscroll = () => {
	handlePrallax();
    handleScrollSpy();
};

const date = new Date();
const year = date.getFullYear();
const spanYear = document.querySelector('.year');
spanYear.textContent = year;

