import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('');  // searchQuery 상태 관리

  // NavBar에 setSearchQuery를 props로 전달하여 검색어를 업데이트하도록 함
  return (
    <div className="layout">
      <NavBar setSearchQuery={setSearchQuery} />  {/* 검색어 업데이트 함수 전달 */}
      <div className="main-content">
        {/* Outlet에 searchQuery를 context로 전달 */}
        <Outlet context={{ searchQuery }} />
      </div>
    </div>
  );
};

export default Layout;
