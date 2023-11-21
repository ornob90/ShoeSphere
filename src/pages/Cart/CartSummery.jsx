import React from "react";
import Button from "../../components/html/Button";
import { useNavigate } from "react-router-dom";

const CartSummery = () => {
  const navigate = useNavigate();

  return (
    <div className="lg:px-10 mt-10 lg:mt-0">
      <p className=" font-poppins font-bold text-lg md:text-xl pb-4 border-b">
        SUMMARY
      </p>
      <div className="pt-4 text-sm text-gray-600 pb-5 ">
        <div className="flex justify-between items-center pb-2">
          <p>Subtotal</p>
          <p>$137.00</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping Fees</p>
          <p>$137.00</p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-8 border-y pb-4">
        <p className="text-3xl md:text-4xl font-poppins font-base">Total</p>
        <p className="text-xl font-poppins font-semibold ">$155.00</p>
      </div>
      <Button
        onClick={() => navigate("/checkout")}
        className="w-full text-white py-3 mt-6 rounded-sm font-clashSemibold "
      >
        Check Out
      </Button>
      <div className="mt-8">
        <p>Shop Smart, Ship Free</p>
      </div>
    </div>
  );
};

export default CartSummery;
