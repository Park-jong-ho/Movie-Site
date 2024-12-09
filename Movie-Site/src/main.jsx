import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './App.css';
import MovieDetail from './component/MovieDetail';
import Layout from './component/Layout';  // Layout 컴포넌트를 사용해도 좋습니다.

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />  {/* 메인 페이지 */}
        <Route path="details/:id" element={<MovieDetail />} />  {/* 상세 페이지 */}
      </Route>
    </Routes>
  </Router>
);
