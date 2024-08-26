// src/components/SizeSelector.js
import React from 'react';
import './SizeSelector.css';

const SizeSelector = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <div className="size-container">
      <label className="size-label">Size</label>
      {sizes.map((size) => (
        <button
          key={size}
          className={`size-button ${size === selectedSize ? 'selected' : ''}`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
