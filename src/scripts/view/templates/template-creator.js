import CONFIG from '../../globals/config';
import CONSTANT from '../../globals/constant';
import '../../component/menu-list';
import '../../component/review-list';
import CategoriesBuilder from '../../utils/categories-builder';

const createRestaurantDetailTemplate = (restaurant) => {
  const imgSourceUrl = CONFIG.BASE_IMAGE_URL + CONFIG.BASE_IMAGE_SIZE.MEDIUM + restaurant.pictureId;
  const categories = CategoriesBuilder.joinCategories(restaurant.categories);

  return /* html */ `
    <article class="restaurant-image">
      <img src="${imgSourceUrl}" alt="${restaurant.name}">
    </article>
    <aside class="restaurant-overview">
      <h1 class="restaurant-name">${restaurant.name}</h1>
      <p class="restaurant-categories">${categories}</p>
      <div class="restaurant-rating">${'<span>★</span>'.repeat(restaurant.rating)} ${restaurant.rating}</div>
      <address class="restaurant-address">${restaurant.address} - ${restaurant.city}</address>
    </aside>
    <article class="restaurant-content">
      <p class="restaurant-description">${restaurant.description}</p>
      <div class="tab">
        <button id="${CONSTANT.FOODS}" class="tab-item">Foods</button>
        <button id="${CONSTANT.DRINKS}" class="tab-item">Drinks</button>
        <button id="${CONSTANT.REVIEWS}" class="tab-item">Reviews</button>
      </div>
      <div class="tab-content" data-content=""></div>
    </article>
  `;
};

const createMenuContentTemplate = (menus) => {
  const menuListElement = document.createElement('menu-list');
  menuListElement.menus = menus;
  return menuListElement.innerHTML;
};

const createReviewsContentTemplate = (reviews) => {
  const reviewListElement = document.createElement('review-list');
  reviewListElement.reviews = reviews;
  return reviewListElement.innerHTML;
};

const createFavoriteButtonTemplate = () => /* html */ `
  <button id="favoriteButton" class="favorite" aria-label="favorite this restaurant">♡</button>
`;

const createFavoritedButtonTemplate = () => /* html */ `
  <button id="favoriteButton" class="favorite" aria-label="favorite this restaurant">♥</button>
`;

const createErrorTemplate = (message) => /* html */ `
  <div class="content-not-found">
    <img src="images/undraw_feeling_blue.svg" alt= class="img-error">
    <h3 class="message-error">${message}</h3>
  </div>
`;

const createEmptyDataTemplate = (message) => /* html */ `
  <div class="content-not-found">
    <img src="images/undraw_empty.svg" alt class="img-error">
    <h3 class="message-error">${message}</h3>
  </div>
`;

export {
  createRestaurantDetailTemplate,
  createMenuContentTemplate,
  createReviewsContentTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createErrorTemplate,
  createEmptyDataTemplate,
};
