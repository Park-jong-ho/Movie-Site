import { useState, useEffect } from 'react';
import MovieCard from './component/MovieCard';
import Slider from './component/Slider';

// 외부 파일(.env)에 환경변수를 정의하여 변수로 받아오는 이유는 보안과 유지보수에 용이하기 때문

// TMdb API 호출을 위한 URL
const TMDB_API_URL = 'https://api.themoviedb.org/3';

const App = () => {
  const [movies, setMovies] = useState([]);
  // CRA에서는 process.env로 VITE에서는 import.meta.env로
  // Prefix 붙이는 방식 : CRA는 REACT_APP_..., VITE는 VITE_...형식으로 작성
  const apiKey = import.meta.env.VITE_TMDB_API_KEY; // .env에서 API Key 가져오기


  // API 호출 (컴포넌트가 마운트될 때 TMDB API 호출)
  useEffect(() => {
    // 영화 데이터 가져오기
    const fetchMovies = async () => {
      const response = await fetch(`${TMDB_API_URL}/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`);
      // fetch는 promise값이니 .json을 붙여줘야 사용가능하다.
      const data = await response.json();
      // 성인 영화를 제외
      const filteredMovies = data.results.filter(movie => !movie.adult);
      setMovies(filteredMovies); // 상태에 영화 데이터 설정
    };

    fetchMovies();
  }, [apiKey]);

  return (
    <div className="container">
      <Slider movies={movies} />
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
