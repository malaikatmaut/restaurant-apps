class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <footer>
        <div class="brand">
          <img src="./images/fork.svg" alt="Brand Logo" class="brand-logo">
          <a href="" class="brand-name">eResto</a>
        </div>
        <p>&copy;${new Date().getFullYear()} <a href="https://github.com/ryanrvldo">Rian Rivaldo</a>. All Rights Reserved.
        </p>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
