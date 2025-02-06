import React from "react";

const Button = ({ children, style, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "0.5rem 1rem",
      borderRadius: "0.375rem",
      fontSize: "0.875rem",
      fontWeight: "600",
      cursor: "pointer",
      outline: "none",
      transition: "all 0.2s ease",
      ...style,
    }}
  >
    {children}
  </button>
);

export default Button;
