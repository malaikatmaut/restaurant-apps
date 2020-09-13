class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <nav>
        <div class="brand">
          <img src="./images/fork.svg" alt="Brand Logo" class="brand-logo">
          <h1><a href="">eResto</a></h1>
        </div>
        <ul class="nav-list">
          <li class="nav-item"><a href="index.html">Home</a></li>
          <li class="nav-item"><a href="#">Favorite</a></li>
          <li class="nav-item"><a href="https://github.com/malaikatmaut">About Us</a></li>
        </ul>
        <button class="menu-toggle">
          <img id="menu-img" src="./images/menu.svg" alt="Navbar Button">
        </button>
      </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);
