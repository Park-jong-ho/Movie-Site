import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import NavBar from './NavBar';

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState('');  // searchQuery 상태 관리
  const navigate = useNavigate();  // useNavigate 훅 사용

  // 로고 클릭 시 검색어를 초기화하고 메인 페이지로 이동
  const clearSearchQuery = () => {
    setSearchQuery('');
    navigate('/');  // 메인 페이지로 이동
  };

  return (
    <div className="layout">
      {/* NavBar에 검색어 업데이트 함수와 검색어 초기화 함수 전달 */}
      <NavBar setSearchQuery={setSearchQuery} clearSearchQuery={clearSearchQuery} />
      <div className="main-content">
        {/* Outlet에 searchQuery를 context로 전달 */}
        <Outlet context={{ searchQuery }} />
      </div>
    </div>
  );
};

export default Layout;
