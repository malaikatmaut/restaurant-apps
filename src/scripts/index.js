import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import swRegister from './utils/sw-register';
import App from './view/app';

const app = new App({
  button: document.querySelector('button.menu-toggle'),
  buttonIcon: document.querySelector('button.menu-toggle img'),
  drawer: document.querySelector('nav ul.nav-list'),
  drawerMenu: document.querySelectorAll('li.nav-item a'),
  navbar: document.querySelector('nav'),
  footerbar: document.querySelector('footer'),
  content: document.querySelector('#mainPage'),
  loader: document.querySelector('.loader'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
