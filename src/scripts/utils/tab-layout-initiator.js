import CONSTANT from '../globals/constant';
import { createMenuContentTemplate, createReviewsContentTemplate } from '../view/templates/template-creator';
import FormReviewInitiator from './form-review-initiator';

const TabLayoutInitiator = {
  init({ tabItems, tabContentContainer, restaurant }) {
    this._renderFoodsContent(tabContentContainer, restaurant.menus.foods);
    this._toggleTabItem(tabItems, tabContentContainer.dataset.content);
    this._setupTabItemClickListener({
      tabItems,
      container: tabContentContainer,
      restaurant,
    });
  },

  _setupTabItemClickListener({ tabItems, container, restaurant }) {
    tabItems.forEach((item) => {
      item.addEventListener('click', (event) => {
        switch (item.id) {
          case CONSTANT.FOODS:
            this._renderFoodsContent(container, restaurant.menus.foods);
            break;
          case CONSTANT.DRINKS:
            this._renderDrinksContent(container, restaurant.menus.drinks);
            break;
          case CONSTANT.REVIEWS:
            this._renderReviewsContent(container, restaurant.consumerReviews);
            FormReviewInitiator.init({
              formContainer: document.querySelector('form#formReview'),
              restaurantId: restaurant.id,
            });
            break;
          default:
            break;
        }
        this._toggleTabItem(tabItems, container.dataset.content);
        event.stopPropagation();
      });
    });
  },

  _renderFoodsContent(container, foods) {
    container.innerHTML = createMenuContentTemplate(foods);
    container.dataset.content = CONSTANT.FOODS;
  },

  _renderDrinksContent(container, drinks) {
    container.innerHTML = createMenuContentTemplate(drinks);
    container.dataset.content = CONSTANT.DRINKS;
  },

  _renderReviewsContent(container, reviews) {
    container.innerHTML = createReviewsContentTemplate(reviews);
    container.dataset.content = CONSTANT.REVIEWS;
  },

  _toggleTabItem(tabItems, content) {
    tabItems.forEach((item) => {
      if (item.id === content) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  },
};
export default TabLayoutInitiator;
