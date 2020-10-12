import '../../../component/restaurant-list';

class FavoriteRestaurantShowView {
  getTemplate() {
    return /* html */`
    <section class="content favorites" id="mainContent">
      <div class="collections">
        <h1 class="collections-label">Favorite Collections</h1>
        <p class="collections-desc">Here is your favorite restaurants.</p>
        <restaurant-list class="restaurant-list"></restaurant-list>
      </div>
    </section>
    `;
  }

  showFavoriteRestaurants(restaurants) {
    const restaurantsElement = document.querySelector('.restaurant-list');

    if (restaurants.length > 0) {
      restaurantsElement.restaurants = restaurants;
    } else {
      this._renderEmptyRestaurantTemplate(restaurantsElement);
    }

    restaurantsElement.dispatchEvent(new Event('restaurants:updated'));
  }

  _renderEmptyRestaurantTemplate(restaurantsElement) {
    restaurantsElement.renderEmptyData('Oops, seems like you don\'t have a favorite restaurant yet.');
    restaurantsElement.classList.add('restaurant-empty');
  }
}

export default FavoriteRestaurantShowView;
