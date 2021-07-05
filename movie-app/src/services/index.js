import catchError from '../utils/catchError';

const controller = new AbortController();

const getMovies = catchError(async () => {
  const response = await fetch('https://react-cdp-api.herokuapp.com/movies/', {
    signal: controller.signal,
  });

  if (!response.ok) {
    throw new Error(
      `Could not fetch ${process.env.REACT_APP_BASE_URL}, received ${response.status}`,
    );
  }

  const result = await response.json();
  return result;
});



export {
  getMovies
};