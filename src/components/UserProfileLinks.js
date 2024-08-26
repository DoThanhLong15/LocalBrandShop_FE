// chứa các liên kết đến danh sách đơn hàng và lịch sử đơn hàng
import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfileLinks.css';

const UserProfileLinks = () => {
  return (
    <div className="user-profile-links">
      <Link to="/order-list" className="profile-link">
        Danh Sách Đơn Hàng
      </Link>
      <Link to="/order-history" className="profile-link">
        Lịch Sử Đặt Hàng
      </Link>
    </div>
  );
};

export default UserProfileLinks;
