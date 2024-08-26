// tập hợp tất cả các thành phần trang thanh toán
// src/pages/CartPage.js
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import CheckoutButton from '../components/CheckoutButton';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 100000, quantity: 2, image: 'image-url-1' },
    { id: 2, name: 'Product 2', price: 150000, quantity: 1, image: 'image-url-2' },
    // Add more products as needed
  ]);

  const shippingFee = 30000; // Example shipping fee, can be dynamic

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalAmount = calculateTotal();

  return (
    <div className="cart-page">
      <h1>Giỏ Hàng Của Bạn</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartSummary totalAmount={totalAmount} shippingFee={shippingFee} />
      <CheckoutButton />
    </div>
  );
};

export default CartPage;

