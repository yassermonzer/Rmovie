import React from "react";
import { Movie } from "../types/movie";

interface WatchLaterProps {
  watchLaterMovies: Movie[];
}

const WatchLater: React.FC<WatchLaterProps> = ({ watchLaterMovies }) => {
  return (
    <div>
      <h2>Watch Later</h2>
      <ul>
        {watchLaterMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year}) - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchLater;
