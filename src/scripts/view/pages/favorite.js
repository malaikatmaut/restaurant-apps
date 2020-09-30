import FavoriteDatabase from '../../data/favorite-database';
import '../../component/restaurant-list';

const Favorite = {
  async render() {
    return /* html */ `
      <section class="content favorites" id="mainContent">
        <div class="collections">
          <h2 class="collections-label">Favorite Collections</h2>
          <p class="collections-desc">Here is your favorite restaurants.</p>
          <restaurant-list class="restaurant-list"></restaurant-list>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsElement = document.querySelector('.restaurant-list');
    const restaurants = await FavoriteDatabase.getAllRestaurants();
    if (restaurants.length === 0) {
      this._renderEmptyList(restaurantsElement);
      return;
    }
    restaurantsElement.restaurants = restaurants;
  },

  _renderEmptyList(restaurantsElement) {
    restaurantsElement.renderEmptyData('Oops, seems like you don\'t have a favorite restaurant yet.');
    restaurantsElement.classList.remove('restaurant-list');
  },
};

export default Favorite;
