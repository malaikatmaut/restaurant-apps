class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <article class="card">
          <img src="${this._restaurant.pictureId}" alt="Restaurant Picture" class="card-img">
          <h3 class="card-title"><a href="#">${this._restaurant.name}</a></h3>
          <div class="restaurant-details">
            <div class="rating">
              <img src="./images/star.svg" alt="Restaurant Picture" style="height: 20px;">
              <p>${this._restaurant.rating}</p>
            </div>
            <div class="location">
              <img src="./images/geo.svg" alt="Restaurant Picture" style="height: 20px;">
              <p class="restaurant-city">${this._restaurant.city}</p>
            </div>
          </div>
          <p class="card-description">${this._restaurant.description}</p>
      </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
