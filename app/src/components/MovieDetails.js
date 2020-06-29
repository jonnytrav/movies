import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const MovieDetails = ({ movie }) => {
  // console.log("movie =>", props);
  const { title, director, metascore, stars, id } = movie;

  if (!title) {
    return null;
  } else {
    return (
      <div className="movie-card">
        <Link to={`/movie/${id}`} className="movie-title ">
          {title}
        </Link>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => {
          console.log("star", star);
          return (
            <div key={star} className="movie-star">
              {star}
            </div>
          );
        })}
      </div>
    );
  }
};

export default MovieDetails;
