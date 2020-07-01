import React, { useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./components/Main-Movie-List.js";
import SavedList from "./components/Saved-list.js";

import "./App.css";
import MovieDetails from "./components/MovieDetails.js";
import MoviePageComponent from "./components/MoviePage.js";

const App = () => {
  const [savedMovies, saveMovie] = useState([]);

  const addToSavedList = movie => {
    if (savedMovies.includes(movie)) {
      console.log("it DOES include this movie");
      return;
    } else {
      const newSavedList = [movie, ...savedMovies];
      console.log(savedMovies.includes(movie));
      saveMovie(newSavedList);
      // saveMovie([...savedMovies, movie]);
    }
  };

  const Wrapper = () => (
    <div>
      <Route
        path="/"
        render={props => {
          return (
            <SavedList
              {...props}
              list={savedMovies}
              addToSavedList={addToSavedList}
            />
          );
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
              addToSaved={addToSavedList}
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
