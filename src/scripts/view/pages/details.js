import DataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import TabLayoutInitiator from '../../utils/tab-layout-initiator';
import { createEmptyDataTemplate, createErrorTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';

const Details = {
  async render() {
    return /* html */ `
      <section id="mainContent">
        <div id="restaurant" class="restaurant-details"></div>
        <div id="favoriteButtonContainer"></div>
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('div#restaurant');

    try {
      const restaurant = await DataSource.detailsRestaurant(url.id);
      if (restaurant == null) {
        this._renderDataIsNotAvailable(restaurantContainer);
      } else {
        this._renderContent(restaurantContainer, restaurant);
      }
    } catch (error) {
      this._renderErrorContent(restaurantContainer, error);
    }
  },

  _renderContent(container, restaurant) {
    container.innerHTML = createRestaurantDetailTemplate(restaurant);
    this._setupTabLayout(restaurant);
    this._setupFavoriteButton(restaurant);
  },

  _renderErrorContent(container, error) {
    container.innerHTML = createErrorTemplate('Sorry, please check your connection first.');
    container.classList.add('content-error');
    console.error(error);
  },

  _renderDataIsNotAvailable(container) {
    container.innerHTML = createEmptyDataTemplate('Sorry, the data that you requested is not available.');
    container.classList.add('content-error');
  },

  _setupTabLayout(restaurant) {
    TabLayoutInitiator.init({
      tabItems: document.querySelectorAll('div.tab button.tab-item'),
      tabContentContainer: document.querySelector('div.tab-content'),
      restaurant,
    });
  },

  _setupFavoriteButton(restaurant) {
    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('div#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
      },
    });
  },
};

export default Details;
