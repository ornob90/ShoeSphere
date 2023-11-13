import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`active:scale-95 duration-300 bg-black text-white rounded-sm  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
