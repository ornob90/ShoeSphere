import React from "react";
import Container from "../../components/shared/Container";
import CartTable from "./CartTable";
import CartSummery from "./CartSummery";

const Cart = () => {
  return (
    <Container className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[10%] gap-3">
      <div className="lg:col-span-3">
        <CartTable />
      </div>
      <div className="lg:col-span-2">
        <CartSummery />
      </div>
    </Container>
  );
};

export default Cart;
