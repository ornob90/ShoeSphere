import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar/Navbar";

const Root = () => {
  return (
    <div>
      <div className=" max-w-[1440px] mx-auto border-black border">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
