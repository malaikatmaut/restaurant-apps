class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <footer>
        <div class="brand">
          <img src="./images/fork.svg" alt="Brand Logo" class="brand-logo">
          <h1><a href="">eResto</a></h1>
        </div>
        <p>&copy;${new Date().getFullYear()} Rian Rivaldo. All Rights Reserved.
        </p>
      </footer>
    `;
  }
}

customElements.define('footer-bar', FooterBar);
