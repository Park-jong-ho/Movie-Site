import { useState, useEffect } from 'react';
import MovieCard from './component/MovieCard';
import movieListData from './data/movieListData.json';
import NavBar from './component/NavBar';
import Slider from './component/Slider';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieListData.results);  // movieListData.results를 movies상태로 설정
  }, []);

  return (
    <div className='container'>
      <NavBar />
      <Slider movies={movies} />
    <div className="movie-list">
      {movies.map((movie) => ( //컴포넌트 생성
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
