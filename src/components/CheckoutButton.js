// xử lý nút "Tiến hành thanh toán".
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckoutButton.css';

const CheckoutButton = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <button className="checkout-button" onClick={handleCheckout}>
      Đi Đến Trang Thanh Toán
    </button>
  );
};

export default CheckoutButton;
