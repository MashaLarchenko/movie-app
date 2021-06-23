var MoviePageRender = require('../pages/MoviePage');
var storage = require('../storage');

var Listner = {
  listen: function () {
    var mainPage = document.querySelector('.movies__container');
    var cards = document.querySelectorAll('.card__item');

    if (cards) {
      cards.forEach(function (item) {
        return item.addEventListener('click', function (e) {
          var movieData = storage.getById(+e.currentTarget.dataset.id);
          if (movieData) {
            mainPage.classList.add('hide');
            MoviePageRender(movieData);
          }
        });
      });
    }
  }
}

module.exports = Listner;
