//hiển thị tổng số tiền và phí vận chuyển
import React from 'react';
import './CartSummary.css';

const CartSummary = ({ totalAmount, shippingFee }) => {
  return (
    <div className="cart-summary">
      <h2>Tổng Cộng</h2>
      <table>
        <tbody>
          <tr>
            <td>Tổng tiền hàng:</td>
            <td>{totalAmount.toLocaleString()} VND</td>
          </tr>
          <tr>
            <td>Phí vận chuyển:</td>
            <td>{shippingFee.toLocaleString()} VND</td>
          </tr>
          <tr>
            <td><strong>Tổng thanh toán:</strong></td>
            <td><strong>{(totalAmount + shippingFee).toLocaleString()} VND</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartSummary;
