import DataSource from '../../data/data-source';
import '../../component/restaurant-list';

const Home = {
  async render() {
    return /* html */ `
      <div class="hero">
        <h1 class="hero-text">Discover the best restaurant in the world</h1>
      </div>
      <section class="content" id="mainContent">
        <div class="collections">
          <h2 class="collections-label">Collections</h2>
          <p class="collections-desc">Explore rated lists of top restaurants</p>
          <restaurant-list class="restaurant-list"></restaurant-list>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsElement = document.querySelector('.restaurant-list');
    try {
      const restaurants = await DataSource.restaurantList();
      restaurantsElement.restaurants = restaurants;
    } catch (error) {
      this._renderEmptyList(restaurantsElement);
    }
  },

  _renderEmptyList(restaurantsElement) {
    restaurantsElement.renderError('Failed to fetch data, please check your connection first.');
    restaurantsElement.classList.remove('restaurant-list');
  },
};

export default Home;
