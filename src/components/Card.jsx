import React from "react";

const Card = ({ children, style }) => (
  <div
    style={{
      borderRadius: "0.375rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "1rem",
      ...style,
    }}
  >
    {children}
  </div>
);

export default Card;
