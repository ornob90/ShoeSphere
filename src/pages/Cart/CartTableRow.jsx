import React from "react";
import { MdClose } from "react-icons/md";
import QuantityBtn from "../../components/shared/SingleUseButtons/QuantityBtn";

const CartTableRow = ({ cartProduct, handleSelected, selectedIds }) => {
  const { product, quantity, price, _id } = cartProduct || {};
  console.log(selectedIds);
  return (
    <tr className="grid grid-cols-4 border-b pb-4 mt-2 overflow-scroll min-w-[500px] no-scrollbar">
      <td className="flex  col-span-2 justify-between">
        <input
          type="checkbox"
          name=""
          id=""
          onChange={(e) => handleSelected(e, _id)}
          checked={selectedIds[_id] || false}
        />
        <div className="w-[15%] lg:w-[20%] ">
          <img
            src={product?.images[0]}
            alt=""
            className="w-full h-full object-cover bg-[#F0F0F4] p-1"
          />
        </div>
        <div className="flex flex-col justify-center w-[50%] gap-1">
          <p className=" font-poppins font-bold text-sm md:text-base">
            {product?.name}
          </p>
          <p className="text-[10px] lg:text-[12px] text-gray-400">Size - 3</p>
          <p className=" font-clashRegular text-sm">$ {product?.price}</p>
        </div>
      </td>
      <td className="col-span-1 flex flex-col  justify-center pb-[10%]">
        <QuantityBtn />
      </td>
      <td className="col-span-1 flex flex-col justify-center">
        <div className="flex justify-between">
          <p className=" font-clashRegular text-sm">${price}</p>
          <div className="bg-black flex justify-center items-center p-1 rounded-full active:scale-95 divide-blue-[.4s]">
            <MdClose className=" text-white rounded-full" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CartTableRow;
