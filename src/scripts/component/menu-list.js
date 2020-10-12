import './menu-item';

class MenuList extends HTMLElement {
  set menus(menus) {
    this._menus = menus;
    this.render();
  }

  render() {
    this._menus.forEach((menu) => {
      const menuElement = document.createElement('menu-item');
      menuElement.menu = menu;
      this.appendChild(menuElement);
    });
  }
}

if (!customElements.get('menu-item')) {
  customElements.define('menu-list', MenuList);
}
