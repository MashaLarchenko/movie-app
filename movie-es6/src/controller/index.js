// import { getState } from '../model/state';
import MoviePageRender from '../pages/MoviePage';
import { getById, getStorage } from '../storage';

export default class Listner {
  static init() {
    this.mainPage = document.body.querySelector('.movies__container');
    this.cards = document.querySelectorAll('.card__item');
    this.active = '';
  }

  static listen() {
    Listner.init();

    this.cards.forEach((item) => {
      item.addEventListener('click', (e) => {
        const movieData = getById(+e.currentTarget.dataset.id);
        console.log(movieData, 'movieData', e.currentTarget.dataset.id, getStorage());
        if (movieData) {
          MoviePageRender(movieData);
        }
      });
    });
  }
}
