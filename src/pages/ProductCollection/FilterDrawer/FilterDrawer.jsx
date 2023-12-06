import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaRegWindowMinimize } from "react-icons/fa";
import FilterOptions from "./FilterOptions";
import { IoFilterOutline } from "react-icons/io5";

const FilterDrawer = ({
  setGenders,
  setAvailable,
  setPriceRange,
  priceRange,
  genders,
  available,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div
      className={`bg-white absolute lg:static h-max  duration-[.4s] p-2 ${
        drawerOpen
          ? "w-[70%] md:w-[40%] lg:w-[25%] border"
          : "w-max lg:w-[25%] lg:border"
      } z-10`}
    >
      <p className="pb-2 text-lg border-b lg:text-2xl">
        {drawerOpen ? (
          <FaRegWindowMinimize onClick={() => setDrawerOpen(false)} />
        ) : (
          <span className="flex items-center gap-2 ">
            Filter <IoFilterOutline onClick={() => setDrawerOpen(true)} />
          </span>
        )}
      </p>
      <FilterOptions
        drawerOpen={drawerOpen}
        setGenders={setGenders}
        setAvailable={setAvailable}
        setPriceRange={setPriceRange}
        priceRange={priceRange}
        genders={genders}
        available={available}
      />
    </div>
  );
};

export default FilterDrawer;
