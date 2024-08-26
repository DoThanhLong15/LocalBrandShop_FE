// hiển thị từng mặt hàng trong giỏ hàng.
import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Giá: {item.price.toLocaleString()} VND</p>
        <p>Số lượng: {item.quantity}</p>
      </div>
      <div className="cart-item-total">
        <p>{(item.price * item.quantity).toLocaleString()} VND</p>
      </div>
    </div>
  );
};

export default CartItem;
