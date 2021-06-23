var Listner = require('./controller');
var MainPageRender = require('./pages/MainPage');
var setStorage = require('./storage').setStorage;

var App = {
  start: function () {
    // var movies;
    fetch('https://react-cdp-api.herokuapp.com/movies/').then(function (response) {
      return response.json();
    })
      .then(function (movies) {
        setStorage('data', movies.data);
        MainPageRender(movies.data);
    
        Listner.listen();
      })
      .catch(function (error) {
        consoole.log(error);
      });

    // setStorage('data', movies.data);
    // MainPageRender(movies.data);

    // Listner.listen();
  }
}

module.exports = App;
