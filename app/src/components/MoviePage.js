import React, { useEffect, useState } from "react";
import axios from "axios";

import "../index.css";
import StarList from "./StarList.js";

const MoviePageComponent = props => {
  const [movie, setMovie] = useState({});
  const [stars, setStars] = useState([]);

  const { title, director, metascore } = movie;

  const fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
        // console.log("This movie =>", response.data);
        setStars(response.data.stars);
      })
      .catch(err => {
        console.log("FETCHING ERROR =>", err.message);
      });
  };

  // *********** FOR DEBUGGING ****************

  useEffect(() => {
    console.log("stars =>", stars);
    console.log("movie =>", movie);
  }, [movie, stars]);

  // *******************************************

  useEffect(() => {
    const id = props.match.params.id;
    fetchMovie(id);
  }, []);

  return (
    <div className="movie-page-container">
      Smoke test!
      <h3>{title}</h3>
      <div>
        Directed By: <em>{director}</em>
      </div>
      <div>Metascore: {metascore}</div>
      <div>
        Starring:
        <div>
          <StarList stars={stars} />
        </div>
      </div>
    </div>
  );
};

export default MoviePageComponent;
