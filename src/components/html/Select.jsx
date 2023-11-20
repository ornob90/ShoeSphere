import React, { useState } from "react";
import { FaM, FaP, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Select = ({ className = "", options }) => {
  const [dropdownOpen, setDrownDownOpen] = useState(false);

  const [chosenValue, setChosenValue] = useState("Select");

  return (
    <div
      className={`w-full bg-[#EBEBEB] py-3 pl-2 text-gray-500 ${className} relative flex justify-between items-center `}
      onClick={() => setDrownDownOpen(!dropdownOpen)}
    >
      <span>{chosenValue}</span>
      {dropdownOpen ? (
        <FaMinus className="mr-4 text-lg text-gray-800" />
      ) : (
        <FaPlus className="mr-4 text-lg text-gray-800" />
      )}
      <ul
        className={`absolute duration-[.5s]   left-0 w-full ${
          dropdownOpen ? "h-auto top-[48px]" : "h-0 top-0 z-"
        } max-h-[200px] overflow-x-auto`}
      >
        {chosenValue != "Select" && (
          <li
            className={` bg-white ${
              dropdownOpen ? "h-auto py-2 pl-2 border border-gray-300" : "h-0"
            } cursor-pointer hover:bg-[#EBEBEB]`}
            onClick={() => setChosenValue("Select")}
          >
            {dropdownOpen && "Select"}
          </li>
        )}

        {options.map((option) => (
          <li
            key={option}
            className={`bg-white   ${
              dropdownOpen ? "h-auto py-2 pl-2 border border-gray-300" : "h-0"
            } cursor-pointer hover:bg-[#EBEBEB]`}
            onClick={() => setChosenValue(option)}
          >
            {dropdownOpen && option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
