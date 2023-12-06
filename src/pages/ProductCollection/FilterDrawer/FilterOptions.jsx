import React from "react";
import Select from "../../../components/html/Select";
import MultiSelect from "../../../components/html/MultiSelect";
import Input from "../../../components/html/Input";

const FilterOptions = ({ drawerOpen }) => {
  const gender = ["Men", "Women"];
  const available = ["Yes", "No"];

  return (
    <div
      className={`mt-4 space-y-4 ${
        drawerOpen ? "lg:w-full" : "hidden lg:block w-full"
      }`}
    >
      <div className="w-full">
        <p>Price Range</p>
        <div className="flex items-center justify-between mt-2">
          <Input
            type="number"
            min={0}
            className="w-[30%] bg-white border border-gray-300 shadow-sm py-1 md:py-1 "
          />
          <Input
            type="number"
            min={0}
            className="w-[30%] bg-white border border-gray-300 shadow-sm py-1 md:py-1 "
          />
        </div>
      </div>
      <MultiSelect options={gender} placeHolder="Gender" />
      <MultiSelect options={available} placeHolder="Available" />
    </div>
  );
};

export default FilterOptions;
