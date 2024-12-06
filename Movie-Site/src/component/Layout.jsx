import { Outlet } from 'react-router-dom'; //자식 라우트를 렌더링
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Outlet /> {/* 여기서 라우팅된 컴포넌트가 렌더링됩니다. */}
      </div>
    </div>
  );
};

export default Layout;
