import React, { useEffect } from "react";
import "../index.css";

const MoviePageComponent = props => {
  const { title, director, metascore, stars, id } = props;

  return (
    <div className="movie-page-container">
      <h3>{title}</h3>
      <div>
        Directed By: <em>{director}</em>
      </div>
      <div>Metascore: {metascore}</div>
      <div>
        Starring:
        <ul>
          {stars.map(star => {
            <li>{star}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
