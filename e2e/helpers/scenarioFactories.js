const assert = require('assert');

const { I } = inject();

const emptyFavoriteRestaurantsScenario = () => {
  I.amOnPage('/#/favorite');
  I.seeElement('.content-not-found');
};

const toDetailRestaurantPageScenario = async () => {
  I.amOnPage('/');

  I.seeElement('.card-title a');

  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  return firstRestaurantTitle;
};

const toReviewsTabDetailPageScenario = () => {
  I.see('Reviews', 'button#reviews');
  I.click('button#reviews');
};

const clickFavoriteButtonScenario = () => {
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
};

const favoriteOneRestaurantScenario = async () => {
  const firstRestaurantTitle = await toDetailRestaurantPageScenario();

  clickFavoriteButtonScenario();

  I.amOnPage('/#/favorite');

  const favoritedRestaurantElement = locate('.card-title a').first();
  I.seeElement(favoritedRestaurantElement);

  const favoritedRestaurantTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);

  return favoritedRestaurantElement;
};

module.exports = {
  assert,
  emptyFavoriteRestaurantsScenario,
  toDetailRestaurantPageScenario,
  toReviewsTabDetailPageScenario,
  clickFavoriteButtonScenario,
  favoriteOneRestaurantScenario,
};
