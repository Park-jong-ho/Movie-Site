import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style/swiper.css'
import { Link } from 'react-router-dom';

// props로 전달받은 movies를 슬라이드로 보여주는 컴포넌트
const Slider = ({ movies, id }) => {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={20} // 슬라이드 간격
        slidesPerView={3} // 한 화면에 3개의 슬라이드
        centeredSlides={true} // 가운데 슬라이드를 크게 표시
        loop={true} // 슬라이드를 무한 반복
        navigation={{
          nextEl: 'swiper-button-next',  // 내비게이션 버튼 클래스 지정
          prevEl: 'swiper-button-prev',  // 내비게이션 버튼 클래스 지정
        }}
        pagination={{ clickable: true }} // 페이지네이션 클릭 가능
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/details/${id}`}> 
              <div className="swiper-movie-card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="swiper-movie-poster"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 내비게이션 버튼 */}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Slider;