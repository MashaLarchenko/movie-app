import movieSectionRender from '../../view/movieSection';
import MovieListner from './listener';

const MoviePageRender = (data) => {
  document.body.querySelector('.movies__container')?.classList.add('hide');
  document.body.appendChild(movieSectionRender(data));
  MovieListner.listen();
};

export default MoviePageRender;
