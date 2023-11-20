import React from "react";
import Container from "../../components/shared/Container";
import CheckoutCustomerForm from "./CheckoutCustomerForm";

const Checkout = () => {
  return (
    <Container className="grid grid-cols-1 lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[7%] min-h-screen">
      <div className="lg:col-span-3">
        <h1>Checkout Details</h1>
        <div className="flex gap-4">
          <div>
            <input
              type="radio"
              name="details"
              id="customer"
              className="mr-2 checked:bg-black"
            />
            <label htmlFor="customer">Customer</label>
          </div>

          <div>
            <input
              type="radio"
              name="details"
              id="payment"
              className="mr-2 checked:bg-black checked:border-red-500"
            />
            <label htmlFor="payment">Payment</label>
          </div>
        </div>
        <CheckoutCustomerForm />
      </div>
    </Container>
  );
};

export default Checkout;
