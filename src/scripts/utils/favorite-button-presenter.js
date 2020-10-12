import { createFavoriteRestaurantButtonTemplate, createUnfavoriteRestaurantButtonTemplate } from '../view/templates/template-creator';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, favoriteRestaurants, restaurant }) {
    this._container = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._container.innerHTML = createFavoriteRestaurantButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      await this._renderButton();
    });
  },

  _renderFavorited() {
    this._container.innerHTML = createUnfavoriteRestaurantButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      await this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
