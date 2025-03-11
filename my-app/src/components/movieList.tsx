import React, { useState } from "react";
import { Movie } from "../types/movie";
import WatchLater from "../components/WatchLater";

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [watchLaterMovies, setWatchLaterMovies] = useState<Movie[]>([]);

  const addToWatchLater = (movie: Movie) => {
    setWatchLaterMovies((watchLaterMovies) => [...watchLaterMovies, movie]);
  };

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {movie.title} ({movie.year}) - {movie.genre}
            <button
              style={{
                padding: "5px 10px",
                marginLeft: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => addToWatchLater(movie)}
              aria-label={`Add ${movie.title} to Watch Later`}
            >
              Watch Later
            </button>
          </li>
        ))}
      </ul>

      <WatchLater watchLaterMovies={watchLaterMovies} />
    </div>
  );
};

export default MovieList;
