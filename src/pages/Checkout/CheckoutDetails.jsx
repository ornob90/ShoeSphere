import React, { useState } from "react";
import CheckoutCustomerForm from "./CheckoutCustomerForm";

const CheckoutDetails = () => {
  const [customerActive, setCustomerActive] = useState(true);

  return (
    <div className="lg:col-span-3">
      <h1 className="text-lg mb-16">Checkout Details</h1>
      <div className="flex gap-5 mb-7">
        <div
          onClick={() => setCustomerActive(true)}
          className="flex  items-center gap-1 cursor-pointer"
        >
          <p
            className={`w-[12px] h-[12px] rounded-full  ${
              customerActive ? "bg-black" : "border border-black"
            }`}
          ></p>
          <p className=" font-semibold">Customer</p>
        </div>
        <div
          onClick={() => setCustomerActive(false)}
          className="flex  items-center gap-1 cursor-pointer"
        >
          <p
            className={`w-[12px] h-[12px] rounded-full  ${
              !customerActive ? "bg-black" : "border border-black"
            }`}
          ></p>
          <p className=" font-semibold">Payment</p>
        </div>
      </div>
      <CheckoutCustomerForm />
    </div>
  );
};

export default CheckoutDetails;