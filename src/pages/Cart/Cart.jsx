import React from "react";
import Container from "../../components/shared/Containers/Container";
import CartTable from "./CartTable";
import CartSummery from "./CartSummery";
import Button from "../../components/html/Button";

const Cart = () => {
  return (
    <Container className="min-h-screen grid grid-cols-1  lg:grid-cols-5 pt-[25%] sm:pt-[15%] md:pt-[10%] gap-3 ">
      <div className="lg:col-span-3">
        <div className=" h-[400px] overflow-auto no-scrollbar">
          <CartTable />
        </div>
        <Button className="w-[20%]  py-3 mt-8 rounded-sm font-clashRegular bg-white text-black border border-black">
          Delete Selected
        </Button>
      </div>
      <div className="lg:col-span-2">
        <CartSummery />
      </div>
    </Container>
  );
};

export default Cart;
