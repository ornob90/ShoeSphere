import React from "react";

const Table = ({ children, className }) => {
  return (
    <table className={`flex overflow-y-auto w-[90%] mx-auto ${className}`}>
      {children}
    </table>
  );
};

export default Table;
