import React from "react";
import Select from "../../../components/html/Select";
import MultiSelect from "../../../components/html/MultiSelect";
import Input from "../../../components/html/Input";

const FilterOptions = ({
  drawerOpen,
  setGenders,
  setAvailable,
  setPriceRange,
  priceRange,
  genders,
  available,
}) => {
  const gender = ["Men", "Women"];
  const availableOption = ["Yes", "No"];

  return (
    <div
      className={`mt-4 space-y-4 ${
        drawerOpen ? "lg:w-full" : "hidden lg:block w-full"
      }`}
    >
      <div className="w-full">
        <p>Price Range</p>
        <div className="flex items-center justify-between gap-4 mt-2">
          <Input
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, min: e.target.value }))
            }
            type="number"
            min={0}
            className="w-[35%] bg-white border border-gray-300 shadow-sm py-1 md:py-1 "
          />
          <Input
            value={+priceRange.max}
            onChange={(e) =>
              setPriceRange((prev) => ({ ...prev, max: +e.target.value }))
            }
            type="number"
            min={+priceRange.min}
            className="w-[35%] bg-white border border-gray-300 shadow-sm py-1 md:py-1 "
          />
        </div>
      </div>
      <MultiSelect
        chosenOptions={genders}
        options={gender}
        placeHolder="Gender"
        setChosenOptions={setGenders}
      />
      <MultiSelect
        chosenOptions={available}
        setChosenOptions={setAvailable}
        options={availableOption}
        placeHolder="Available"
      />
    </div>
  );
};

export default FilterOptions;
