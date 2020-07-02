import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

import MovieDetails from "./MovieDetails.js";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then(response => {
      setMovies([...response.data]);
    });
  }, []);

  if (!movies) {
    return (
      <div>
        <span>Fetching data...</span>
      </div>
    );
  } else {
    return (
      <div className="movie-details-container">
        {movies.map(movie => (
          <div className="movie-details-individual-container">
            <MovieDetails movie={movie} key={movie.id} />
          </div>
        ))}
      </div>
    );
  }
};

export default MovieList;
