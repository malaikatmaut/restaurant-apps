import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/component/restaurant-list.js';
import './component/app-bar.js';
import './component/footer-bar.js';
import restaurantsData from './data/DATA.json';

const navListElement = document.querySelector('nav ul.nav-list');
const menuToggleElement = document.querySelector('button.menu-toggle');
const menuImgElement = document.querySelector('button.menu-toggle img');
const navBarElement = document.querySelector('nav');

menuToggleElement.addEventListener('click', event => {
  navListElement.classList.toggle('open');
  if (navListElement.classList.contains('open')) {
    navBarElement.style.position = 'fixed';
    menuImgElement.src = './images/close.svg';
  } else {
    navBarElement.style.position = 'relative';
    menuImgElement.src = './images/menu.svg';
  }
  event.stopPropagation();
});

const restaurantsElement = document.querySelector('restaurant-list.top-list');
restaurantsElement.restaurants = restaurantsData.restaurants;
