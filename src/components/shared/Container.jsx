import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={` w-[90%] mx-auto pt-[10%] md:pt-[6%] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
