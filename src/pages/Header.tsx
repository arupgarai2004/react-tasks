
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from "./Home";
import ReffPage from "./ReffPage";
import ProductList from "./ProductList";
import Users from './Users';
import { useState } from 'react';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log('Header: isLoggedIn:', isLoggedIn);
  return (
    <>
      <div className="header">
        <div className="login-section">
            {isLoggedIn && <span className='welcome-section'>Welcome, Arup!</span>}
            {isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            : <button onClick={() => setIsLoggedIn(true)}>Login</button>
            }
        </div>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/reffePage">ReffPage</Link> |{" "}
          <Link to="/hooksUseMemo">Hooks UseMemo</Link> |{" "}
          <Link to="/users">Users</Link>
        </nav>
        
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reffePage" element={<ReffPage />} />
        <Route path="/hooksUseMemo" element={<ProductList />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default Header;