import AOS from 'aos';
import 'aos/dist/aos.css';
import './layouts/nav.js'
import { handlePrallax } from './layouts/breaker.js';
AOS.init();

window.onscroll = () => {
    handlePrallax()
}