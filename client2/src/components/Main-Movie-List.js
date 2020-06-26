import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
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
        <h1>Fetching data...</h1>
      </div>
    );
  } else {
    return (
      <div>
        {movies.map(movie => {
          console.log(movie);
          return <MovieDetails movie={movie} />;
        })}
      </div>
    );
  }
};

export default MovieList;
