import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { getMovies } from "../services";
import { setStorage } from "../storage";

function CardContainer() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      const allMovies = await getMovies();
      setMovies(allMovies.data);
      setStorage(allMovies.data);
    }
    fetchData();
    
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <section className="container movies__container">
      {console.log(movies)}
      {movies.length ? (
        movies.map((movie) => <CardItem data={movie} key={movie.id} />)
      ) : (
        <h3 className="emptyThings">No movie found</h3>
      )}
    </section>
  );
}

export default CardContainer;
