import '../component/nav-bar';
import '../component/footer-bar';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, buttonIcon, drawer, drawerMenu, navbar, footerbar, content, loader,
  }) {
    this._button = button;
    this._buttonIcon = buttonIcon;
    this._drawer = drawer;
    this._drawerMenu = drawerMenu;
    this._navbar = navbar;
    this._footerbar = footerbar;
    this._content = content;
    this._loader = loader;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      buttonIcon: this._buttonIcon,
      drawer: this._drawer,
      drawerMenu: this._drawerMenu,
      navbar: this._navbar,
    });
  }

  async renderPage() {
    this._showLoader();
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    this._hideLoader();
  }

  _showLoader() {
    this._loader.classList.remove('stop');
    this._content.classList.add('load');
    this._footerbar.classList.add('load');
  }

  _hideLoader() {
    this._loader.classList.add('stop');
    this._content.classList.remove('load');
    this._footerbar.classList.remove('load');
  }
}

export default App;
