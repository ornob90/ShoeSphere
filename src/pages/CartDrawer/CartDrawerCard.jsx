import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import PlusMinusBtn from "../../components/shared/SingleUseButtons/PlusMinusBtn";
const CartDrawerCard = ({ cartProduct }) => {
  const { product } = cartProduct || {};
  return (
    <div className="mt-5 border  flex justify-between font-poppins overflow-y-auto rounded-md">
      <div className="w-[28%] bg-[#F0F0F4]">
        <img src={product?.images[0]} alt="" className="p-1" />
      </div>
      <div className="w-[70%] p-3 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">{product?.name}</h3>
          </div>
          <RiDeleteBin6Line />
        </div>
        <div className="flex justify-between items-center">
          <p className=" font-clashSemibold">{product?.price}$</p>
          <PlusMinusBtn />
        </div>
      </div>
    </div>
  );
};

export default CartDrawerCard;
