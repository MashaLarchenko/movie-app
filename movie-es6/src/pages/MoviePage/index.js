var movieSectionRender = require('../../view/movieSection');
var MovieListner = require('./listener');

var MoviePageRender = function (data) {
  var movieContainer = document.body.querySelector('.movies__container');

  if(movieContainer) {
    movieContainer.classList.add('hide');
  }
  document.body.appendChild(movieSectionRender(data));
  new MovieListner().listen();
};

module.exports = MoviePageRender;
