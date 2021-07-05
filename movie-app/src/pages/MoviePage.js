import React, { useEffect, useState } from "react";
import { getMovieById } from '../services'
// import PropTypes from "prop-types";

function MoviePage({id}) {
  const [movie, setMovie] = useState(null);


  useEffect(() => {
    async function fetchData() {
      const movieById = await getMovieById(+id);
      console.log(movieById, 'movie')
      setMovie(movieById);
    }
    fetchData();
    // return () => {
    //   controller.abort();
    // };
  }, [id]);



  return (
    <section className="movieCard-wrapper" >
      {movie ? <div className='movie__item'>
        <img src={movie.poster_path} className='movie__image' alt={movie.title}></img>
        <div className='movie__content'>
          <h3 className='movie__title'>{movie.title}</h3>
          <div className='movie__info info'>
            <span className='info__score'>Score: {movie.vote_average} / 10</span> <span className='info__date'>Date: {movie.release_date}</span>
            <p className='info__genre'>{movie.genres.join(', ')}</p>
          </div>
          <p className='movie__subtitle'>{movie.tagline}</p>
          <p className='movie__description'>{movie.overview}</p>
        </div>
      </div> : null}
    </section>


  );
}

// CardItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   deleted: PropTypes.func.isRequired,
// };

export default MoviePage;
