var CardContainer = require('../../view/CardContainer');

var MainPageRender = function (data) {
  var movieCardWrapper = document.body.querySelector('.movieCard-wrapper');

  if (movieCardWrapper) {
    movieCardWrapper.classList.add('hide');
  }

  new CardContainer(data).render();
};

module.exports = MainPageRender;
