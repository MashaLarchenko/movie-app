import catchError from '../utils/catchError';

const controller = new AbortController();

const getMovies = catchError(async () => {
  const response = await fetch('https://react-cdp-api.herokuapp.com/movies/', {
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(
      `Could not fetch https://react-cdp-api.herokuapp.com/movies/, received ${response.status}`,
    );
  }

  const result = await response.json();
  return result;
});

const getMovieById = catchError(async (id) => {
  console.log(id)
  const response = await fetch(`https://react-cdp-api.herokuapp.com/movies/${id}`, {
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(
      `Could not fetch https://react-cdp-api.herokuapp.com/movies/${id}, received ${response.status}`,
    );
  }

  const result = await response.json();
  return result;
});




export {
  getMovies, getMovieById
};