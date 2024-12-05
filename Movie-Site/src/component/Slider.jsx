import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import MovieCard from './MovieCard';

const Slider = ({ movies }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={4}>
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
