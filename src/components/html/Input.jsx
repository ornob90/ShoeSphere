import React from "react";

const Input = ({ type = "text", className = "", placeholder, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none ${className}`}
      {...props}
    />
  );
};
// border py-1 pl-4 rounded-lg focus:outline-none
export default Input;
