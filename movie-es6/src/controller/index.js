import MoviePageRender from '../pages/MoviePage';
import { getById } from '../storage';

export default class Listner {
  static listen() {
    const mainPage = document.querySelector('.movies__container');
    const cards = document.querySelectorAll('.card__item');
    cards?.forEach((item) => {
      item.addEventListener('click', (e) => {
        const movieData = getById(+e.currentTarget.dataset.id);
        if (movieData) {
          mainPage.classList.add('hide');
          MoviePageRender(movieData);
        }
      });
    });
  }
}
