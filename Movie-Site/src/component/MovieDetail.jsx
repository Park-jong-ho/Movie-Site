import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// 스켈레톤 UI
// 실제 콘텐츠가 들어갈 자리를 잠시 대신하게 되는 빈 껍데기
const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-backdrop"></div>
      <div className="skeleton-content">
        <div className="skeleton-poster"></div>
        <div className="skeleton-info">
          <div className="skeleton-title"></div>
          <div className="skeleton-rating"></div>
          <div className="skeleton-genres"></div>
          <div className="skeleton-overview"></div>
        </div>
      </div>
    </div>
  );
};

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();  // URL에서 영화 id 가져오기

  // 의존성 배열에 존재하는 id 값의 데이터가 변경될 때만 실행하라
  useEffect(() => {
    const fetchMovieDetail = async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY; // .env에서 API Key 가져오기
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=ko-KR`);
      const data = await response.json();  // 응답을 JSON으로 변환
      setMovie(data);  // 영화 상세 정보를 상태로 설정
    };

    fetchMovieDetail();
  }, [id]);

  // 영화 정보가 로드되었을 때 표시
  if (!movie) {
    return <Skeleton />; // 영화 데이터를 로딩하는 동안 스켈레톤 UI 표시
  }

  return (
    <div className="movie-detail">
      {/* 영화 배경 이미지, 옵셔널 체이닝 사용 */}
      {/* 옵셔널 체이닝 사용 이유 if문의 사용을 줄이기 위해 */}
      {/* 옵셔널 체이닝은 존재하지 않을 수 있는 프로퍼티 또는 메서드를 안전하게 호출할 수 있도록 도와준다. */}
      <div className="backdrop" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})` }}></div>
      
      <div className="content">
        {/* 영화 포스터, 옵셔널 체이닝 사용 */}
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt={movie?.title} />
        </div>
        {/* 영화 정보 */}
        <div className="movie-info">
          <h1>{movie?.title}</h1>
          <p><strong>평균 평점:</strong> {parseFloat(movie?.vote_average?.toFixed(2))} / 10</p>
          {/* 영화 장르 */}
          <div className="genres">
            {movie?.genres?.map(genre => (
              <span key={genre.id} className="genre">{genre.name}</span>
            ))}
          </div>
          {/* 영화 줄거리 */}
          <p className="overview">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
