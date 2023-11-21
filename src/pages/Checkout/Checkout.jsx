import React from "react";
import Container from "../../components/shared/Container";
import CheckoutCustomerForm from "./CheckoutCustomerForm";
import CheckoutDetails from "./CheckoutDetails";

const Checkout = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[8%] min-h-screen">
      <CheckoutDetails />
    </Container>
  );
};

export default Checkout;
