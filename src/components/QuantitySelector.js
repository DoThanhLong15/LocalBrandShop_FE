//Chọn số lượng sản phẩm
import React from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ quantity, setQuantity }) => {
  return (
    <div className="quantity-container">
      <label className="quantity-label">Số lượng</label>
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
      />
    </div>
  );
};

export default QuantitySelector;

