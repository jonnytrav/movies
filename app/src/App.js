import React, { useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./components/MovieList.js";
import SavedList from "./components/Saved-list.js";

import "./index.css";
import MoviePageComponent from "./components/MoviePage.js";

const App = () => {
  const [savedMovies, saveNewMovie] = useState([]);

  const saveMovie = movie => {
    saveNewMovie(savedMovies => [...savedMovies, movie]);
  };

  const Wrapper = () => (
    <div className="main-background">
      <Route
        path="/"
        render={props => {
          return <SavedList {...props} list={savedMovies} />;
        }}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <MovieList {...props} />;
        }}
      />
      <Route
        path="/movie/:id"
        render={props => {
          return (
            <MoviePageComponent
              {...props}
              saveMovie={saveMovie}
              savedMovies={savedMovies}
            />
          );
        }}
      />
    </div>
  );

  return <Wrapper />;
};

export default App;
