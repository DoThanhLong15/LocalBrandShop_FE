// src/components/ProductInfo.js
import React from 'react';
import './ProductInfo.css';

const ProductInfo = ({ product }) => {
  return (
    <div className="info-container">
      <h1 className="product-name">{product.name}</h1>
      <p className="product-price">{product.price} VND</p>
      <p className="product-reviews">{product.reviews} (100 reviews)</p>
    </div>
  );
};

export default ProductInfo;
