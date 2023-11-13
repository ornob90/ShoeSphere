import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto overflow-hidden relative min-h-screen">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
