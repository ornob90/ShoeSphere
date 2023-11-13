import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`bg-black text-white  rounded-sm text-sm ${className}`}>
      {children}
    </button>
  );
};

export default Button;
