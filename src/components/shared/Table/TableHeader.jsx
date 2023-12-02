import React from "react";

const TableHeader = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers?.map((header) => (
          <tr key={header}>{header} </tr>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
