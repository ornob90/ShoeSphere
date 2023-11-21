import React from "react";
import Select from "../../components/html/Select";
import customerForm from "../../utils/checkoutData";

const CheckoutCustomerForm = ({ customerActive }) => {
  return (
    <form
      className={`flex flex-col gap-2 absolute ${
        customerActive ? "w-full left-0" : "top-[30%] -left-[100%]"
      } duration-[.5s] bg-white`}
    >
      {customerForm.map(({ name, type, placeHolder, options }) => (
        <div key={name}>
          {type === "select" ? (
            <Select options={options} placeHolder={placeHolder} />
          ) : (
            <input
              className="w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 relative flex justify-between items-center focus:outline-none"
              type={type}
              placeholder={placeHolder}
            />
          )}
        </div>
      ))}
    </form>
  );
};

export default CheckoutCustomerForm;
