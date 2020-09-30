const DrawerInitiator = {
  init({
    button, buttonIcon, drawer, drawerMenu, navbar,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
      this._toggleButton(navbar, buttonIcon);
    });

    drawerMenu.forEach((menu) => {
      menu.addEventListener('click', (event) => {
        this._toggleDrawer(event, drawer);
        this._toggleButton(navbar, buttonIcon);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _toggleButton(navbar, buttonIcon) {
    navbar.classList.toggle('nav-fixed');
    buttonIcon.classList.toggle('close-button');
  },
};

export default DrawerInitiator;
