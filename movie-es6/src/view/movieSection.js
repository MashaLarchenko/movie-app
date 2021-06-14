/* eslint-disable camelcase */
const movieSectionRender = ({
  title, tagline, poster_path, overview, release_date, vote_average,
}) => {
  const moviePageContainer = document.createElement('section');
  const movieItem = `
  <div class='movie__item'>
  <img src=${poster_path}></img>
  <div class='movie__info'><span>${vote_average}</span><span>${release_date}</span></div>
    <h3 class='movie__title'>${title}</h3> 
    <p class='movie__subtitle'>${tagline}</p>
    <p class='movie__description'>${overview}</p>
  </div>
  `;
  moviePageContainer.innerHTML = movieItem;

  return moviePageContainer;
};

export default movieSectionRender;
