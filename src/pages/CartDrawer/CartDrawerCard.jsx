import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import PlusMinusBtn from "../../components/shared/SingleUseButtons/PlusMinusBtn";
const CartDrawerCard = () => {
  return (
    <div className="mt-5 border  flex justify-between font-poppins overflow-y-auto rounded-md">
      <div className="w-[28%] bg-[#F0F0F4]">
        <img
          src="https://i.ibb.co/9NrJwGT/photo-1525966222134-fcfa99b8ae77-q-80-w-1396-auto-format-fit-crop-ixlib-rb-4-0-removebg-preview.png"
          alt=""
          className="p-1"
        />
      </div>
      <div className="w-[70%] p-3 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium">Shoe Name</h3>
            <p className="text-[12px] text-gray-400">description | you know</p>
          </div>
          <RiDeleteBin6Line />
        </div>
        <div className="flex justify-between items-center">
          <p className=" font-clashSemibold">98$</p>
          <PlusMinusBtn />
        </div>
      </div>
    </div>
  );
};

export default CartDrawerCard;
