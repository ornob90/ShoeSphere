import React from "react";
import CartTableRow from "./CartTableRow";
import useUser from "../../hooks/specific/useUser";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";

const CartTable = () => {
  const { _id: userID } = useUser() || {};

  const { data: cartProducts } = useGetSecure(
    ["CartProducts", userID],
    `/carts/${userID}`
  );

  return (
    <table className="h-[200px] no-scrollbar font-poppins w-full overflow-auto max-w-full">
      {/* Header */}
      <thead className="grid grid-cols-4 pb-4 border-b font-semibold gap-2">
        <tr className="flex gap-2 items-center col-span-2">
          <input type="checkbox" name="" id="select-all" />
          <label htmlFor="select-all text-[12px] md:text-sm lg:text-base">
            Select All
          </label>
        </tr>
        {["Quantity", "Total"].map((col) => (
          <tr
            className="col-span-1 text-[12px] md:text-sm lg:text-base"
            key={col}
          >
            {col}
          </tr>
        ))}
      </thead>
      <tbody className="h-full">
        {cartProducts?.map((product) => (
          <CartTableRow key={product._id} product={product} />
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;
