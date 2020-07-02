import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => {
  return (
    <div className="saved-list-outer-container">
      <div className="saved-list-inner-container">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <Link to={`/movies/${movie.id}`} className="saved-movie">
            {movie.title}
          </Link>
        ))}
      </div>
      <div className="home-button-container">
        <div className="home-button">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default SavedList;
