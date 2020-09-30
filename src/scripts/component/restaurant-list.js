import { createEmptyDataTemplate, createErrorTemplate } from '../view/templates/template-creator';
import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurantList) {
    this._restaurants = restaurantList;
    this.render();
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const element = document.createElement('restaurant-item');
      element.restaurant = restaurant;
      this.appendChild(element);
    });
  }

  renderEmptyData(message) {
    this.innerHTML = createEmptyDataTemplate(message);
  }

  renderError(message) {
    this.innerHTML = createErrorTemplate(message);
  }
}

customElements.define('restaurant-list', RestaurantList);
