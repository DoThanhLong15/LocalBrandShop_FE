// sẽ xử lý nút "Lưu"
import React from 'react';
import './SaveButton.css';

const SaveButton = ({ onClick }) => {
  return (
    <button className="save-button" onClick={onClick}>
      Lưu Thông Tin
    </button>
  );
};

export default SaveButton;
