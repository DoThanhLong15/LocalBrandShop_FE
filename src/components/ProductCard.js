// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

import image1 from '../assets/images/aothun.png';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image1} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price} VND</p>
      <div className="product-rating">⭐⭐⭐⭐⭐</div>
      <button className="product-button">Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductCard;
