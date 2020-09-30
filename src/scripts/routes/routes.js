import Home from '../view/pages/home';
import Favorite from '../view/pages/favorite';
import Details from '../view/pages/details';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': Details,
};

export default routes;
