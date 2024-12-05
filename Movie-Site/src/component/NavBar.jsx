import { Link } from 'react-router-dom';
// import './NavBar.css';  // 스타일링을 위한 CSS 파일

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          oz무비
        </Link>
      </div>
      <div className="navbar-center">
        <input
          type="text"
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
