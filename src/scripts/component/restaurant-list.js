import './restaurant-item.js';

class RestaurantList extends HTMLElement {
  set restaurants(restaurantList) {
    this._restaurants = restaurantList;
    this.render();
  }

  render() {
    this._restaurants.forEach(restaurant => {
      const element = document.createElement('restaurant-item');
      element.restaurant = restaurant;
      this.appendChild(element);
    });
  }

  renderError(msg) {
    this.innerHTML += /* html */ `<h6>Something Error. Check: ${msg}</h6>`;
  }
}

customElements.define('restaurant-list', RestaurantList);
