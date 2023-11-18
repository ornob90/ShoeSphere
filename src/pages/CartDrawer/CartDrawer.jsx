import React from "react";
import { MdClose } from "react-icons/md";
import CartDrawerCard from "./CartDrawerCard";

const CartDrawer = () => {
  return (
    <div className="max-h-screen min-h-[300px] w-[30%] absolute right-0 top-0  bg-[#F0F0F4] h-screen p-2">
      {/* Cross Icon */}
      <div className="bg-white h-[70%] p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mt-3">
          <p className=" font-clashSemibold text-2xl">Your Cart</p>
          <MdClose className="text-2xl hover:rotate-90 duration-[.4s]" />
        </div>
        <div>
          <CartDrawerCard />
        </div>
      </div>

      {/* Total price */}
      <div></div>
    </div>
  );
};

export default CartDrawer;
