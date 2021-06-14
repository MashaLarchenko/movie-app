/* eslint-disable camelcase */
const cardItem = ({
  title, tagline, poster_path, id,
}) => `
  <div class='card__item' data-id=${id}>
  <img src=${poster_path}></img>
    <h3 class='card__title'>${title}</h3> 
    <p class='card__subtitle'>${tagline}</p>
  </div>
  `;

export default cardItem;
