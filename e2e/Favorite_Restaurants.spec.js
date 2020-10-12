const { emptyFavoriteRestaurantsScenario, clickFavoriteButtonScenario, favoriteOneRestaurantScenario } = require('./helpers/scenarioFactories');

Feature('Favorite Restaurants');

Before(() => {
  emptyFavoriteRestaurantsScenario();
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('Oops, seems like you don\'t have a favorite restaurant yet.', '.message-error');
});

Scenario('favorite one restaurant', () => {
  favoriteOneRestaurantScenario();
});

Scenario('unfavorite one restaurant', async ({ I }) => {
  const favoritedRestaurantElement = await favoriteOneRestaurantScenario();

  I.click(favoritedRestaurantElement);

  clickFavoriteButtonScenario();

  emptyFavoriteRestaurantsScenario();
});
