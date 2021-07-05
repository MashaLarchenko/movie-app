import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

function CardItem({
 data
}) {
  return (
    <Link to={`movie/${data.id}`}>
      <div className="card__item" data-id={data.id}>
        <img className="card__image" src={data.poster_path} alt={data.title}></img>
        <div className="card__info info">
          <span className="info__score">Score: {data.vote_average} / 10</span>{" "}
          <span className="info__date">Date: {data.release_date}</span>
          <p className="info__genre">{data.genres.join(", ")}</p>
        </div>
        <h3 className="card__title">{data.title}</h3>
        <p className="card__subtitle">{data.tagline}</p>
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
