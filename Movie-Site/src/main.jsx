import ReactDOM from 'react-dom/client'; // 최신 React에서는 'react-dom/client' 사용
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './App.css';
import MovieDetail from './component/MovieDetail';
import movieDetailData from './data/movieDetailData.json'; // import 구문으로 변경
import Layout from './component/Layout'

const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot 사용

root.render(
  <Router>
    <Routes>
      {/* Layout을 최상위 Route에 적용 */}
      <Route path="/" element={<Layout />}>
        {/* Layout 내에서 각각의 페이지를 Outlet을 통해 표시 */}
        <Route index element={<App />} />  {/* / 경로에서 App 컴포넌트 */}
        <Route
          path="details/:id"
          element={<MovieDetail movieDetailData={movieDetailData} />}  // 상세 페이지
        />
      </Route>
    </Routes>
  </Router>
);

