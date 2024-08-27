//  tái sử dụng cho mỗi trường và có thể chỉnh sửa được.
import React from 'react';
import './EditableTextField.css';

const EditableTextField = ({ label, name, value, onChange, type = 'text' }) => {
  return (
    <div className="editable-text-field">
      <label>{label}:</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
};

export default EditableTextField;
