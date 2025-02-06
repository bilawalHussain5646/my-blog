import React from "react";

const Input = ({ type, placeholder, style }) => (
  <input
    type={type}
    placeholder={placeholder}
    style={{
      padding: "0.5rem",
      borderRadius: "0.375rem",
      border: "1px solid #ccc",
      width: "100%",
      marginBottom: "1rem",
      ...style,
    }}
  />
);

export default Input;
