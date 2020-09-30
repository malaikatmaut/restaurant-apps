class MenuItem extends HTMLElement {
  set menu(menu) {
    this._menu = menu;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <article class="card restaurant-menu">
        <h4 class="card-title restaurant-menu-name">${this._menu.name}</h4>
      </article>
    `;
  }
}

customElements.define('menu-item', MenuItem);
