import React from "react";
import QuantityBtn from "../../components/shared/QuantityBtn";

const CartTableRow = () => {
  return (
    <tr className="grid grid-cols-4 border-b pb-4 mt-2">
      <td className="flex  col-span-2 justify-between">
        <input type="checkbox" name="" id="" />
        <div className="w-[20%] ">
          <img
            src="https://i.ibb.co/9NrJwGT/photo-1525966222134-fcfa99b8ae77-q-80-w-1396-auto-format-fit-crop-ixlib-rb-4-0-removebg-preview.png"
            alt=""
            className="w-full h-full object-cover bg-[#F0F0F4] p-1"
          />
        </div>
        <div className="flex flex-col justify-center w-[50%] gap-1">
          <p className=" font-poppins font-bold">Shoe Name</p>
          <p className="text-[12px] text-gray-400">Color: BLue / Size: 3</p>
          <p className=" font-clashSemibold">$300</p>
        </div>
      </td>
      <td className="col-span-1 flex flex-col  justify-center">
        <QuantityBtn />
      </td>
      <td className="col-span-1"></td>
    </tr>
  );
};

export default CartTableRow;
