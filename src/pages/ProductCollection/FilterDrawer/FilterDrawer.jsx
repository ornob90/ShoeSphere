import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaRegWindowMinimize } from "react-icons/fa";
import FilterOptions from "./FilterOptions";

const FilterDrawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className={`min-h-screen   duration-[.4s] p-2 ${
        drawerOpen
          ? "w-[25%] lg:w-[25%]"
          : "w-[10%] md:w-[7%] lg:w-[25%] border"
      }`}
    >
      <p className="text-2xl border-b pb-2">
        {drawerOpen ? (
          <FaRegWindowMinimize onClick={() => setDrawerOpen(false)} />
        ) : (
          <RiMenu2Line onClick={() => setDrawerOpen(true)} />
        )}
      </p>
      <FilterOptions />
    </div>
  );
};

export default FilterDrawer;
