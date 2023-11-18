import React from "react";
import { MdClose } from "react-icons/md";
import CartDrawerCard from "./CartDrawerCard";
import Button from "../../components/html/Button";

const CartDrawer = () => {
  return (
    <div className="max-h-screen min-h-[300px] w-[30%] fixed right-0 top-0  bg-[#F0F0F4] h-screen p-2 z-20 flex flex-col justify-between">
      {/* Top Side  */}
      <div className="bg-white h-[70%] p-4 rounded-lg shadow-sm overflow-y-auto no-scrollbar flex flex-col justify-between ">
        <div className="flex justify-between items-center mt-3">
          <p className=" font-clashSemibold text-2xl">Your Cart</p>
          <MdClose className="text-2xl hover:rotate-90 duration-[.4s]" />
        </div>
        <div className="h-[80%] overflow-y-auto no-scrollbar">
          <CartDrawerCard />
          <CartDrawerCard />
          <CartDrawerCard />
          <CartDrawerCard />
        </div>
      </div>

      {/* Bottom Side */}
      <div className="h-[28%]  shadow-sm rounded-lg bg-white p-4">
        <div className="flex justify-between items-center mt-3  font-clashSemibold ">
          <p className="text-lg">Sub Total</p>
          <p className="text-base">280 $</p>
        </div>
        <Button className="w-full mt-4 text-white py-3 rounded-md font-semibold  font-clashLight">
          Continue To Checkout
        </Button>
        <p className="text-[12px] text-black mt-2 w-full text-center font-poppins ">
          Please get it now before it sells out
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
