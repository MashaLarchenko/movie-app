var cardItem = require('./CardItem');

function CardContainer(movies) {
  this.movies = movies;
}

CardContainer.prototype.render = function () {
  var cardContainer = document.createElement('section');
  cardContainer.classList.add('container', 'movies__container');
  var moviesContent = this.movies.map(function (item) { return cardItem(item) });
  cardContainer.innerHTML = moviesContent.join('');
  document.body.appendChild(cardContainer);
}

module.exports = CardContainer;
