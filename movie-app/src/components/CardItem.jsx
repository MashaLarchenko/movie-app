import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

function CardItem({
  title,
  tagline,
  poster_path,
  id,
  vote_average,
  release_date,
  genres,
  ...rest
}) {
  return (
    <Link to={`movie/${id}`}>
      <div class="card__item" data-id={id}>
        <img class="card__image" src={poster_path} alt={title}></img>
        <div class="card__info info">
          <span class="info__score">Score: {vote_average} / 10</span>{" "}
          <span class="info__date">Date: {release_date}</span>
          <p class="info__genre">${genres.join(", ")}</p>
        </div>
        <h3 class="card__title">${title}</h3>
        <p class="card__subtitle">${tagline}</p>
      </div>
    </Link>
  );
}

// CardItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   deleted: PropTypes.func.isRequired,
// };

export default CardItem;
