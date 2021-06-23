var storage = {
  currentPage: '',
  data: [],
};

var getStorage = function () { return storage };

var getById = function (id) { return storage.data.find(function (item) { return item.id === id }) };

var setStorage = function (key, value) {
  storage[key] = value;
};

module.exports = { getStorage: getStorage, getById: getById, setStorage: setStorage };
