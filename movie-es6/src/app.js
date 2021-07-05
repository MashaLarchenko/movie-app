var Listner = require('./controller');
var MainPageRender = require('./pages/MainPage');
var setStorage = require('./storage').setStorage;

var App = {
  start: function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://react-cdp-api.herokuapp.com/movies/');
    request.responseType = 'json';

    request.onload = function () {
      var movies = request.response;
      setStorage('data', movies.data);
      MainPageRender(movies.data);

      Listner.listen();
    };

    request.onerror = function () {
      consoole.log(error);
    };

    request.send();
  }
}

module.exports = App;
