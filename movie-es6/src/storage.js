const storage = {
  currentPage: '',
  data: [],
};

const getStorage = () => storage;

const getById = (id) => storage.data.find((item) => item.id === id);

const setStorage = (key, value) => {
  storage[key] = value;
};

export { getStorage, getById, setStorage };
