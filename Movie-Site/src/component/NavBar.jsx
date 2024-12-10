import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setSearchQuery, clearSearchQuery }) => {
  const [query, setQuery] = useState('');  // 검색어 상태 관리

  const handleInputChange = (e) => {
    setQuery(e.target.value);  // 입력값을 상태로 저장
    setSearchQuery(e.target.value);  // 상위 컴포넌트로 검색어 전달
  };

  // 로고 클릭 시 검색어와 검색창 내용 초기화
  const handleLogoClick = () => {
    clearSearchQuery();  // 검색어 초기화
    setQuery('');  // 검색창 내용 초기화
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* 로고 클릭 시 검색어 초기화 및 검색창 내용도 초기화 */}
        <Link to="/" className="logo" onClick={handleLogoClick}>
          oz무비
        </Link>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          value={query}  // 검색어 상태로 input 값을 바인딩
          onChange={handleInputChange}  // 입력 변경 시 상태 업데이트
          placeholder="Search Movies..."
          className="search-input"
        />
      </div>
      <div className="navbar-right">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default NavBar;
