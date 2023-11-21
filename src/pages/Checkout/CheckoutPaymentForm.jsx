import React from "react";

const CheckoutPaymentForm = ({ customerActive }) => {
  return (
    <form
      className={`border absolute border-black w-full h-[300px] ${
        !customerActive ? "w-full left-0" : "top-[30%] -left-[130%] -z-10"
      } duration-[.5s]  delay-150 bg-black`}
    ></form>
  );
};

export default CheckoutPaymentForm;
