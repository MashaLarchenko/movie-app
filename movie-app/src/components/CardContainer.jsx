import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';
import { getMovies } from '../services';
import {setStorage} from '../storage';

const controller = new AbortController();

function CardContainer() {
  const [movies, setMovies] = useState([]);


  useEffect(async () => {
    const allMovies = await getMovies();
    setMovies(allMovies);
    setStorage(allMovies);
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="cards__container">
      {movies.length ? movies.map((movie) => (
        <CardItem
        data={movie}
        />
      )) : <h3 className="emptyThings">Things are empty</h3>}
    </section>
  );
}

export default CardContainer;