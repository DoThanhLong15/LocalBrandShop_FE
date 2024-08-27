//Thêm vào giỏ hàng
// src/components/AddToCartButton.js
import React from 'react';
import './AddToCartButton.css';

const AddToCartButton = ({ onAddToCart }) => {
  return (
    <button className="add-to-cart-button" onClick={onAddToCart}>
      THÊM VÀO GIỎ HÀNG
    </button>
  );
};

export default AddToCartButton;

