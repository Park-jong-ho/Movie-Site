import { Outlet } from 'react-router-dom'; //자식 라우트를 렌더링
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className="layout">
      {/* 상단 NavBar */}
      <NavBar />
      
      {/* 페이지별 콘텐츠가 표시될 위치 */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;