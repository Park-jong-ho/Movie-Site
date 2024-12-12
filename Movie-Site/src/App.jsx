import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom'; // searchQuery를 받기 위한 useOutletContext
import MovieCard from './component/MovieCard';
import Slider from './component/Slider';
import useDebounce from './hooks/useDebounce';  // useDebounce 훅을 가져옴

const TMDB_API_URL = 'https://api.themoviedb.org/3';

  // 다크모드 제거
const App = () => {
  const { searchQuery } = useOutletContext();  // Layout에서 전달받은 searchQuery
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const debouncedSearchQuery = useDebounce(searchQuery, 1000);  // 1초 딜레이 적용

  const fetchMovies = async (query) => {
    setIsLoading(true);

    const url = query
      ? `${TMDB_API_URL}/search/movie?api_key=${apiKey}&query=${query}&language=ko-KR&page=1`
      : `${TMDB_API_URL}/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;

    const response = await fetch(url);
    const data = await response.json();

    const filteredMovies = data.results.filter((movie) => !movie.adult);

    setMovies(filteredMovies);  // 영화 목록 상태 업데이트
    setIsLoading(false);  // 로딩 종료
  };

  // debouncedSearchQuery가 변경될 때마다 fetchMovies 호출
  useEffect(() => {
    if (debouncedSearchQuery) {
      fetchMovies(debouncedSearchQuery);  // debouncedSearchQuery로 API 호출
    } else {
      fetchMovies();  // 검색어가 없으면 인기 영화 목록 표시
    }
  }, [debouncedSearchQuery]);  // debouncedSearchQuery가 변경될 때마다 실행

  return (
    <div className="container">
      {/* 검색어가 있을 때는 Slider를 숨기고, 검색된 영화 리스트만 보여줌 */}
      {!searchQuery && <Slider movies={movies} />}  {/* searchQuery가 비어있을 때만 Slider 표시 */}
      
      {isLoading && <div className="loading-text">Loading...</div>}
      
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
