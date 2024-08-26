// hiển thị thông tin cá nhân của người dùng và cho phép chỉnh sửa
import React, { useState } from 'react';
import EditableTextField from './EditableTextField';
import SaveButton from './SaveButton';
import './UserInfo.css';

const UserInfo = ({ userInfo, onSave }) => {
  const [editableInfo, setEditableInfo] = useState({ ...userInfo });

  const handleChange = (name, value) => {
    setEditableInfo({ ...editableInfo, [name]: value });
  };

  const handleSave = () => {
    onSave(editableInfo);
  };

  return (
    <div className="user-info">
      <EditableTextField
        label="Họ và Tên"
        name="fullName"
        value={editableInfo.fullName}
        onChange={handleChange}
      />
      <EditableTextField
        label="Email"
        name="email"
        value={editableInfo.email}
        onChange={handleChange}
      />
      <EditableTextField
        label="Ngày Sinh"
        name="dateOfBirth"
        type="date"
        value={editableInfo.dateOfBirth}
        onChange={handleChange}
      />
      <EditableTextField
        label="Giới Tính"
        name="gender"
        value={editableInfo.gender}
        onChange={handleChange}
      />
      <EditableTextField
        label="Số Điện Thoại"
        name="phoneNumber"
        value={editableInfo.phoneNumber}
        onChange={handleChange}
      />
      <EditableTextField
        label="Địa Chỉ"
        name="address"
        value={editableInfo.address}
        onChange={handleChange}
      />
      <SaveButton onClick={handleSave} />
    </div>
  );
};

export default UserInfo;
