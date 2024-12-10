import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';  // Outlet에서 context 가져오기
import MovieCard from './component/MovieCard';
import Slider from './component/Slider';

const TMDB_API_URL = 'https://api.themoviedb.org/3';

const App = () => {
  const { searchQuery } = useOutletContext();  // Outlet에서 전달된 searchQuery 가져오기
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const fetchMovies = async (query) => {
    setIsLoading(true);

    const url = query
      ? `${TMDB_API_URL}/search/movie?api_key=${apiKey}&query=${query}&language=ko-KR&page=1`
      : `${TMDB_API_URL}/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;

    const response = await fetch(url);
    const data = await response.json();

    const filteredMovies = data.results.filter((movie) => !movie.adult);
    setMovies(filteredMovies);

    setIsLoading(false);
  };

  // searchQuery가 변경될 때마다 fetchMovies 호출
  useEffect(() => {
    fetchMovies(searchQuery);  // searchQuery를 API 호출에 반영
  }, [searchQuery]);  // searchQuery가 변경될 때마다 호출

  return (
    <div className="container">
      {/* 검색어가 있을 때는 Slider를 숨기고, 검색된 영화 리스트만 보여줌 */}
      {!searchQuery && <Slider movies={movies} />}  {/* searchQuery가 비어있을 때만 Slider 표시 */}
      
      {isLoading && <div>Loading...</div>}
      
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
