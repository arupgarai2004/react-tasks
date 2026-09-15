
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from "./Home";
import ReffPage from "./ReffPage";
import ProductList from "./ProductList";

const Header = () => {
  return (
    <>
      <div className="header">
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/reffePage">ReffPage</Link> |{" "}
          <Link to="/hooksUseMemo">Hooks UseMemo</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reffePage" element={<ReffPage />} />
        <Route path="/hooksUseMemo" element={<ProductList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default Header;