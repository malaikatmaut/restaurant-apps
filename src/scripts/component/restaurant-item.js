import CONFIG from '../globals/config';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const imgSourceUrl = CONFIG.BASE_IMAGE_URL + CONFIG.BASE_IMAGE_SIZE.SMALL
      + this._restaurant.pictureId;
    this.innerHTML = /* html */ `
      <article class="card">
          <img data-src="${imgSourceUrl}" alt="${this._restaurant.name}" class="card-img restaurant-img lazyload">
          <h2 class="card-title"><a href="#/detail/${this._restaurant.id}">${this._restaurant.name}</a></h2>
          <div class="restaurant">
            <div class="restaurant-rating">
              <img src="./images/star.svg" alt="" style="height: 20px;">
              <p>${this._restaurant.rating}</p>
            </div>
            <div class="restaurant-location">
              <img src="./images/geo.svg" alt="" style="height: 20px;">
              <p class="restaurant-city">${this._restaurant.city}</p>
            </div>
          </div>
          <p class="card-description">${this._restaurant.description}</p>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
