// MovieCard.jsx

import { Link } from 'react-router-dom';

// props 받기
const MovieCard = ({ id, posterPath, title, voteAverage }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="movie-card">
      {/* 상세페이지 이동 */}
      <Link to={`/details/${id}`} className="movie-link">
        <img src={imageUrl} alt={title} className="movie-poster" />
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating">
          {/* 소수점 두자리까지만 표시, 마지막 자리의 0은 제거 */}
          {/* 부동 소수점 숫자(float point number)를 반환한다. */}
          <span>★</span> {parseFloat(voteAverage.toFixed(2))}
        </p>
      </Link>
    </div>
  );
};

export default MovieCard;
