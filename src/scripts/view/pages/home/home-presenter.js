class HomePresenter {
  constructor({ view, dataSource }) {
    this._view = view;
    this._dataSource = dataSource;

    this._showRestaurantList();
  }

  async _showRestaurantList() {
    const restaurants = await this._dataSource.restaurantList();
    this._displayRestaurants(restaurants);
  }

  _displayRestaurants(restaurants) {
    this._view.showRestaurantList(restaurants);
  }
}

export default HomePresenter;
