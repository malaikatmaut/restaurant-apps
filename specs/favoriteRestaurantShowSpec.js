import FavoriteRestaurantShowView from '../src/scripts/view/pages/favorited-restaurants/favorite-restaurant-show-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/view/pages/favorited-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestaurantShowView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurants have been favorited', () => {
    it('should render the information that no restaurants have been favorited', (done) => {
      document.querySelector('.restaurant-list').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.content-not-found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });

    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.querySelector('.restaurant-list').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('restaurant-item').length).toEqual(2);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: '0011', name: 'A', pictureId: 21, rating: 2, city: 'X', description: 'lorem',
        },
        {
          id: '0022', name: 'B', pictureId: 22, rating: 1, city: 'Y', description: 'lorem',
        },
      ]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
