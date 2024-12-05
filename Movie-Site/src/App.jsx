import { useState, useEffect } from 'react';
import MovieCard from './component/MovieCard';
import movieListData from './data/movieListData.json';
import NavBar from './component/NavBar';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieListData.results);  // 영화 데이터를 상태로 관리
  }, []);

  return (
    <div>
      <NavBar />
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          voteAverage={movie.vote_average}
        />
      ))}
    </div>

    </div>
  );
};

export default App;
