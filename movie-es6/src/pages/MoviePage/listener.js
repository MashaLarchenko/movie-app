 function MovieListner () {
  this.backBtn = '';
  this.mainPage = '';
}


MovieListner.prototype.init = function () {
  this.backBtn = document.querySelector('.button__back');
  this.mainPage = document.body.querySelector('.movies__container');
}

MovieListner.prototype.listen = function () {
  this.init();
  this.backBtn.addEventListener('click', function () {
    var movieCardWrapper = document.body.querySelector('.movieCard-wrapper');
    if (movieCardWrapper) {
      movieCardWrapper.remove();
      this.mainPage.classList.remove('hide');
    }
  }.bind(this));
}

module.exports = MovieListner;
