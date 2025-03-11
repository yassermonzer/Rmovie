import React from "react";
import { Movie } from "./types/movie";
import MovieList from "./components/movieList"; 

const App: React.FC = () => {
  const movies: Movie[] = [
    { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi"},
    { id: 2, title: "The Dark Knight", year: 2008, genre: "Action" },
    { id: 3, title: "Interstellar", year: 2014, genre: "Sci-Fi" },
    { id: 4, title: "Parasite", year: 2019, genre: "Thriller" }
  ]
  return (
    <div>
      <h1>Movie List</h1>
    <MovieList movies={movies}/>
    </div>
  );
};

export default App;
