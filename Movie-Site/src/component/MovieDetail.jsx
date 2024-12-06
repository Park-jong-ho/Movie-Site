import { useState, useEffect } from 'react';

// JSON 파일을 import합니다.
import movieDetailData from '../Data/movieDetailData.json';

// movie 상태 초기화
const MovieDetail = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // JSON 데이터를 상태로 설정합니다.
    setMovie(movieDetailData);
  }, []);

  //데이터 로드 전 로딩 메세지 출력
  if (!movie) return <div>Loading...</div>;

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
