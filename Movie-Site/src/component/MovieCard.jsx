
import { Link } from 'react-router-dom';


// props 받기
const MovieCard = ({ id, posterPath, title, voteAverage }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
  
  return (
    <div className="movie-card">
      {/* 상세페이지 이동 */}
      <Link to={`/details/${id}`}> 
        <img src={imageUrl} alt={title} className="movie-poster" />
        <h3 className="movie-title">{title}</h3>
        <p className="movie-rating"><span>★</span> {voteAverage}</p>
      </Link>
    </div>
  );
};

export default MovieCard;