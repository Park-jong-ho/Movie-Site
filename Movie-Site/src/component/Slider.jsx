import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../style/swiper.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';

// props로 전달받은 movies를 슬라이드로 보여주는 컴포넌트
const Slider = ({ movies }) => {
  const swiperRef = useRef(null);  // Swiper 인스턴스를 참조하는 ref

  // "Next" 버튼 클릭 시 다음 슬라이드로 이동
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();  // Swiper 인스턴스를 사용하여 다음 슬라이드로 이동
    }
  };

  // "Prev" 버튼 클릭 시 이전 슬라이드로 이동
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();  // Swiper 인스턴스를 사용하여 이전 슬라이드로 이동
    }
  };

  return (
    <div className="slider-container">
      <Swiper
        ref={swiperRef}  // Swiper 인스턴스를 참조할 수 있도록 ref 추가
        spaceBetween={20} // 슬라이드 간격
        slidesPerView={3} // 한 화면에 3개의 슬라이드
        centeredSlides={true} // 가운데 슬라이드를 크게 표시
        loop={true} // 슬라이드를 무한 반복
        pagination={{ clickable: true }} // 페이지네이션 클릭 가능
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/details/${movie.id}`}> {/* Link 컴포넌트로 영화 상세 페이지로 이동 */}
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

      {/* 내비게이션 버튼 추가 */}
      <div
        className="swiper-button-next"
        onClick={handleNextClick} // "Next" 버튼 클릭 시 슬라이드 이동
      >
      </div>
      <div
        className="swiper-button-prev"
        onClick={handlePrevClick} // "Prev" 버튼 클릭 시 슬라이드 이동
      >
      </div>
    </div>
  );
};

export default Slider;