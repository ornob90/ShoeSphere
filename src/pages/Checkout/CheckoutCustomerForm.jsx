import React from "react";
import Select from "../../components/html/Select";

const CheckoutCustomerForm = () => {
  const options = ["Bangladesh", "India", "China", "Nepal"];

  return (
    <form>
      <Select options={options} />
    </form>
  );
};

export default CheckoutCustomerForm;
