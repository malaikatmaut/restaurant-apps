class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <nav>
        <div class="brand">
          <img src="./images/fork.svg" alt="Brand Logo" class="brand-logo">
          <a href="" class="brand-name">eResto</a>
        </div>
        <ul class="nav-list">
          <li class="nav-item"><a href="#/home">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item"><a href="https://www.linkedin.com/in/ryanrvldo/">Contact</a></li>
        </ul>
        <button class="menu-toggle" aria-label="button menu">
          <img id="menu-img" src="./images/menu.svg" alt="">
        </button>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
