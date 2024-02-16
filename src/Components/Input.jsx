import React from "react";

export default function Input({
  handleRadioChange,
  value,
  title,
  name,
  color,
}) {
  return (
    <label className="sidebar-label-container">
      <input
        type="radio"
        onChange={handleRadioChange}
        value={value}
        name={name}
      />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}
