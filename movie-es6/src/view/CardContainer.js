import { getStorage } from '../storage';
import cardItem from './CardItem';

export default class CardContainer {
  constructor(movies) {
    this.movies = movies;
  }

  render() {
    const cardContainer = document.createElement('section');
    cardContainer.classList.add('container', 'movies__container');
    const moviesContent = this.movies.map((item) => cardItem(item));
    cardContainer.innerHTML = moviesContent.join('');
    console.log('CARD ITEM', getStorage());
    document.body.appendChild(cardContainer);
  }
}
