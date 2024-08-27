import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Đăng nhập</h2>
      <LoginForm />
      <div className="signup-link">
        <p>Chưa có tài khoản? <Link to="/signup">Đăng ký ngay!</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
