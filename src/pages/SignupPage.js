// src/pages/SignupPage.js
import React from 'react';
import SignupForm from '../components/SignupForm';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
      <SignupForm />
      <p>
        Bạn đã có tài khoản? <a href="/login">Đăng nhập ngay!</a>
      </p>
    </div>
  );
};

export default SignupPage;
