import DataSource from '../../data/data-source';
import HomeView from './home/home-view';
import HomePresenter from './home/home-presenter';

const view = new HomeView();

const Home = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new HomePresenter({ view, dataSource: DataSource });
  },
};

export default Home;
