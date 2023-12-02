import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ children, data, cellWidth }) => {
  return (
    <tbody>
      {data?.map((row, idx) => (
        <TableRow
          key={row?.ID}
          cells={Object.values(row)}
          cellWidth={cellWidth}
          textPosition="left"
          className={`${idx % 2 === 0 ? "bg-[#F1F3F4]" : ""}`}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
