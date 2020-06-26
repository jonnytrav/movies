import React, { useState } from "react";
import { Route } from "react-router-dom";
import MovieList from "./components/Main-Movie-List.js";
import SavedList from "./components/Saved-list.js";

import "./App.css";
// import Dummy from "./components/dummy-header.js";

const App = () => {
  const [savedMovies, saveMovie] = useState([
    {
      id: 0,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      metascore: 100,
      stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
    }
  ]);

  const addToSavedList = movie => {
    if (savedMovies.includes(movie)) {
      return;
    } else {
      saveMovie([...savedMovies, movie]);
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
      <MovieList />
      {/* <Route exact path="/" component={MovieList} /> */}
      {/* <Route
        exact
        path="/"
        render={props => {
          return <MovieList {...props} />;
        }}
      /> */}
    </div>
  );

  return <Wrapper />;
};

export default App;
