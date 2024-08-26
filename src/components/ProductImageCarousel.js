// src/components/ProductImageCarousel.js
import React from 'react';
import './ProductImageCarousel.css';

const ProductImageCarousel = ({ images }) => {
  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Product ${index + 1}`} />
      ))}
    </div>
  );
};

export default ProductImageCarousel;
