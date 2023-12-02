import React from "react";

const DashboardProfileContainer = ({ children, className }) => {
  return (
    <div className={` w-[90%] lg:w-[75%] h-full mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default DashboardProfileContainer;
