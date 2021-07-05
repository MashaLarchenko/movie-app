const catchError = (fn) => async (...args) => {
  try {
    return await fn(...args);
  } catch (error) {
    return console.log(error);
  }
};

export default catchError;