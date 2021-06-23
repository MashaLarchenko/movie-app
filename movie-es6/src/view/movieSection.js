/* eslint-disable camelcase */
var BackButton = require('./BackButton');

var movieSectionRender = function (data) {
  var moviePageContainer = document.createElement('section');
  moviePageContainer.classList.add('container', 'movieCard-wrapper');
  moviePageContainer.appendChild(BackButton());
  var movieItem = "<div class='movie__item'><img class='movie__image' src=" + data.poster_path + "></img>" +
  "<div class='movie__content'><h3 class='movie__title'>" + data.title + 
  "</h3><div class='movie__info info'>" + 
  "<span class='info__score'>Score:" + data.vote_average  + "/ 10" + "</span> <span class='info__date'>Date:" + data.release_date + "</span>" +
   "<p class='info__genre'>" + data.genres.join(', ') + "</p></div>" + 
   "<p class='movie__subtitle'>" + data.tagline + "</p>" + 
   "<p class='movie__description'>" + data.overview + "</p></div></div>";
  moviePageContainer.innerHTML += movieItem;

  return moviePageContainer;
};

module.exports = movieSectionRender;
