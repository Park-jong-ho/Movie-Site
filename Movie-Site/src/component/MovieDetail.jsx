import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();  // URL에서 영화 id 가져오기

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY; // .env에서 API Key 가져오기
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);

      const data = await response.json();  // response가 실패해도 계속 진행됨
      setMovie(data);  // 영화 상세 정보를 상태로 설정
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <div>Loading...</div>;  // 데이터가 없을 경우 로딩 메시지 표시

  return (
    <div className="movie-detail">
      {/* 영화 배경 이미지 */}
      <div className="backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}></div>
      
      <div className="content">
        {/* 영화 포스터 */}
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        </div>
        {/* 영화 정보 */}
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p><strong>평균 평점:</strong> {movie.vote_average} / 10</p>
          {/* 영화 장르 */}
          <div className="genres">
            {movie.genres.map(genre => (
              <span key={genre.id} className="genre">{genre.name}</span>
            ))}
          </div>
          {/* 영화 줄거리 */}
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
