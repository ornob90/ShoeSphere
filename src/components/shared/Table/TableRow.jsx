import React from "react";

const TableRow = ({
  children,
  className,
  cells,
  cellWidth,
  textPosition,
  border = "1px",
  ...props
}) => {
  return (
    <tr
      className={`flex  justify-between items-center border-b pl-2 py-2 ${className}`}
      {...props}
    >
      {cells?.map((cells) => (
        <th
          className="overflow-x-scroll no-scrollbar"
          style={{
            width: cellWidth,
            textAlign: textPosition,
          }}
          key={cells}
        >
          <p className="w-[90%] overflow-x-auto no-scrollbar">{cells}</p>
        </th>
      ))}
    </tr>
  );
};

export default TableRow;
