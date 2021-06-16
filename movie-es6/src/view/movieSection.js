/* eslint-disable camelcase */
import BackButton from './BackButton';

const movieSectionRender = ({
  title, tagline, poster_path, overview, release_date, vote_average, genres,
}) => {
  const moviePageContainer = document.createElement('section');
  moviePageContainer.classList.add('container', 'movieCard-wrapper');
  moviePageContainer.appendChild(BackButton());
  const movieItem = `
  <div class='movie__item'>
  <img src=${poster_path} class='movie__image'></img>
  <div class='movie__content'>
  <h3 class='movie__title'>${title}</h3> 
    <div class='movie__info info'>
    <span class='info__score'>Score: ${vote_average} / 10</span> <span class='info__date'>Date: ${release_date}</span>
    <p class='info__genre'>${genres.join(', ')}</p>
    </div>
    <p class='movie__subtitle'>${tagline}</p>
    <p class='movie__description'>${overview}</p>
  </div>
  </div>
  `;
  moviePageContainer.innerHTML += movieItem;

  return moviePageContainer;
};

export default movieSectionRender;
