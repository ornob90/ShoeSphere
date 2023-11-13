import React from "react";
import Button from "../html/Button";

const LogoutBtn = ({ className }) => {
  return (
    <Button
      className={`text-[12px] text-white md:text-sm px-4 md:px-3 font-clashRegular py-1 md:py-2 ${className}`}
    >
      Sign Out
    </Button>
  );
};

export default LogoutBtn;
