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
  }
}
