import React from "react";
import Container from "../../components/shared/Container";
import CheckoutCustomerForm from "./CheckoutCustomerForm";
import CheckoutDetails from "./CheckoutDetails";

const Checkout = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[8%] min-h-[700px]">
      <CheckoutDetails />
      <div className="z-5 h-[1000px] col-span-2 bg-blue-400"></div>
    </Container>
  );
};

export default Checkout;
