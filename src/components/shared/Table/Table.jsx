import React from "react";

const Table = ({ children, className }) => {
  return (
    <table className={`overflow-x-auto w-[90%] mx-auto  ${className}`}>
      {children}
    </table>
  );
};

export default Table;
