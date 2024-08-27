// thu thập và hiển thị thông tin người mua hàng
import React, { useState } from 'react';
import './CheckoutPage.css'; // Import corresponding CSS file

const CheckoutPage = () => {
  const [buyerInfo, setBuyerInfo] = useState({
    fullName: '',
    phoneNumber: '',
    shippingAddress: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBuyerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    console.log('Order placed with the following info:', buyerInfo);
    // You can redirect to another page or display a success message
  };

  return (
    <div className="checkout-page">
      <h1>Thông Tin Người Mua Hàng</h1>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
          Họ và Tên:
          <input
            type="text"
            name="fullName"
            value={buyerInfo.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Số Điện Thoại:
          <input
            type="tel"
            name="phoneNumber"
            value={buyerInfo.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Địa Chỉ Nhận Hàng:
          <textarea
            name="shippingAddress"
            value={buyerInfo.shippingAddress}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Ghi Chú:
          <textarea
            name="notes"
            value={buyerInfo.notes}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="place-order-button">
          Đặt Hàng Ngay
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
