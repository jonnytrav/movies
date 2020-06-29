import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SavedList = props => {
  // useEffect(() => {
  //   console.log(props.list);
  // }, [props.list]);

  return (
    <div className="saved-list-outer-container">
      <div className="saved-list-container">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <Link to={`/movies/${movie.id}`} className="saved-movie">
            {movie.title}
          </Link>
        ))}
      </div>
      <Link to="/" className="home-button">
        Home
      </Link>
    </div>
  );
};

export default SavedList;
