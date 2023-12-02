import React from "react";
import TableRow from "./TableRow";

const TableHeader = ({ headers, cellWidth }) => {
  return (
    <thead className="text-white bg-[#0E0E0E]">
      <TableRow cells={headers} cellWidth={cellWidth} textPosition="left" />
    </thead>
  );
};

export default TableHeader;
