// xử lý các trường văn bản cho địa chỉ giao hàng và ghi chú.
import React from 'react';
import './TextArea.css';

const TextArea = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="text-area">
      <label>{label}:</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextArea;
