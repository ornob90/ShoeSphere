import React from "react";

const CheckoutPaymentForm = ({ customerActive }) => {
  return (
    <form
      className={`border absolute border-black w-full h-[300px] ${
        !customerActive ? "w-full left-0" : "top-[30%] -left-[130%]"
      } duration-[.5s]`}
    ></form>
  );
};

export default CheckoutPaymentForm;
