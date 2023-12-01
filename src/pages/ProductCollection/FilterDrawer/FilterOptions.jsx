import React from "react";
import Select from "../../../components/html/Select";
import MultiSelect from "../../../components/html/MultiSelect";

const FilterOptions = ({ drawerOpen }) => {
  const options = ["USA", "Canada", "UK", "Australia", "Other"];
  return (
    <div
      className={`mt-4 space-y-4 ${
        drawerOpen ? "lg:w-full" : "hidden lg:block w-full"
      }`}
    >
      <MultiSelect options={options} />
      <MultiSelect options={options} />
    </div>
  );
};

export default FilterOptions;
