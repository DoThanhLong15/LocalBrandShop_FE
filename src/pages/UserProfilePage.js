// Trang chính bao gồm tất cả các phần.
import React, { useState } from 'react';
import UserInfo from '../components/UserInfo';
import UserProfileLinks from '../components/UserProfileLinks';
import './UserProfilePage.css';

const UserProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    dateOfBirth: '1990-01-01',
    gender: 'Male',
    phoneNumber: '0123456789',
    address: '123 Đường ABC, Phường XYZ, TP HCM'
  });

  const handleSave = (updatedInfo) => {
    setUserInfo(updatedInfo);
    // Save the updated information to your backend or state management
  };

  return (
    <div className="user-profile-page">
      <h1>Thông Tin Cá Nhân</h1>
      <UserInfo userInfo={userInfo} onSave={handleSave} />
      <UserProfileLinks />
    </div>
  );
};

export default UserProfilePage;
