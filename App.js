import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import UserProfilePage from './pages/UserProfilePage';
import './App.css';

const App = () => {
  return (
    <Router>
      
      <nav>
        <Link to="/">Trang chủ</Link> | <Link to="/signup">Đăng ký</Link> | <Link to="/login">Đăng nhập</Link> | <Link to="/products">Sản phẩm</Link>
      </nav>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/user-info" element={<UserProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
