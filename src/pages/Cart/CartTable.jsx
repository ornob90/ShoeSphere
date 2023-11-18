import React from "react";
import CartTableRow from "./CartTableRow";

const CartTable = () => {
  return (
    <table className="font-poppins w-full">
      {/* Header */}
      <thead className="grid grid-cols-4 pb-4 border-b font-semibold gap-2">
        <tr className="flex gap-2 items-center col-span-2">
          <input type="checkbox" name="" id="select-all" />
          <label htmlFor="select-all">Select All</label>
        </tr>
        {["Quantity", "Total"].map((col) => (
          <tr className="col-span-1" key={col}>
            {col}
          </tr>
        ))}
      </thead>
      <tbody>
        <CartTableRow />
      </tbody>
    </table>
  );
};

export default CartTable;
