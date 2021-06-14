// import MainPageRender from './pages/main/view';
// import Listner from './controller/listners';
import Listner from './controller';
import MainPageRender from './pages/MainPage';
import { setStorage } from './storage';

export default class App {
  static async start() {
    const response = await fetch('http://react-cdp-api.herokuapp.com/movies/');

    const movies = await response.json();
    setStorage('data', movies.data);
    MainPageRender(movies.data);

    Listner.listen();
    // console.log(movies, cardContainerView);

    // const overlay = document.createElement('div');
    // overlay.classList.add('overlay');
    // document.body.appendChild(overlay);
    // const currentPage = getStorage().currentPage !== ''
    // ? getStorage().currentPage : document.querySelector('.main__container');
    // setGlobalState('currentPage', currentPage);
    // MainPageRender();
    // Listner.listen();
  }
}
