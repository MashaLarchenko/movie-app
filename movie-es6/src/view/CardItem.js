/* eslint-disable camelcase */
var cardItem = function (data) {
  var result = "<div class='card__item' data-id=" + data.id + ">" +
  "<img class='card__image' src=" + data.poster_path + "></img>" + 
  "<div class='card__info info'>" + 
  "<span class='info__score'>Score:" + data.vote_average +  "/ 10" + "</span> <span class='info__date'>Date:" +
   data.release_date + "</span>" + 
   "<p class='info__genre'>" + data.genres.join(', ') + "</p></div>" + 
   "<h3 class='card__title'>" + data.title + "</h3>" + 
   "<p class='card__subtitle'>" + data.tagline + "</p></div>";

  return result;
};

module.exports = cardItem;
