class NavBar extends HTMLElement {
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
          <li class="nav-item"><a href="#/home">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item"><a href="https://www.linkedin.com/in/ryanrvldo/">Contact</a></li>
        </ul>
        <button class="menu-toggle">
          <img id="menu-img" src="./images/menu.svg" alt="">
        </button>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
