import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";
import Footer from "../pages/Home/Footer/Footer";
import CartDrawer from "../pages/CartDrawer/CartDrawer";

const Root = () => {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto relative min-h-screen">
        <CartDrawer />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
