import ReactDOM from 'react-dom/client'; // 최신 React에서는 'react-dom/client' 사용
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './App.css';
import MovieDetail from './component/MovieDetail';
import movieDetailData from './data/movieDetailData.json'; // import 구문으로 변경

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot 사용

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/details/:id"
        element={<MovieDetail movieDetailData={movieDetailData} />} // 데이터 전달
      />
    </Routes>
  </Router>
);
