import movieSectionRender from '../../view/movieSection';

const MoviePageRender = (data) => {
  document.body.querySelector('.movies__container')?.classList.add('hide');
  document.body.appendChild(movieSectionRender(data));
};

export default MoviePageRender;
