/* eslint-disable camelcase */
const cardItem = ({
  title, tagline, poster_path, id, vote_average, release_date, genres,
}) => `
  <div class='card__item' data-id=${id}>
  <img class='card__image' src=${poster_path}></img>
  <div class='card__info info'>
  <span class='info__score'>Score: ${vote_average} / 10</span> <span class='info__date'>Date: ${release_date}</span>
  <p class='info__genre'>${genres.join(', ')}</p>
  </div>
    <h3 class='card__title'>${title}</h3> 
    <p class='card__subtitle'>${tagline}</p>
  </div>
  `;

export default cardItem;
