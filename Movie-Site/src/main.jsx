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
      {/* 기본 경로인 /에 대해 Layout 컴포넌트를 렌더링 */}
      <Route path="/" element={<Layout />}>
        {/* 기본 경로에 대한 인덱스 라우트로, App 컴포넌트를 렌더링 */}
        <Route index element={<App />} />  {/* 메인 페이지 */}
        {/* details/:id 경로에 대해 MovieDetail 컴포넌트를 렌더링 */}
        {/* :id는 동적 매개변수로, 특정 영화의 상세 정보를 보여주는 데 사용. */}
        <Route path="details/:id" element={<MovieDetail />} />  {/* 상세 페이지 */}
      </Route>
    </Routes>
  </Router>
);
