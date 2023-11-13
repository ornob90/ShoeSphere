import React from "react";
import { CiMenuFries } from "react-icons/ci";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { MdClose } from "react-icons/md";
const DropDown = ({ navItems, menu, setMenu }) => {
  return (
    <div
      className={`w-screen h-[300px] absolute bg-gray-100  ${
        menu ? "top-0" : "top-[-100%]"
      } right-0 duration-[.4s]  pt-4`}
    >
      <div className="flex justify-between w-[90%] mx-auto  items-center">
        <Search
          className="py-1"
          inputClass="py-1"
          iconClass="text-xl right-[3%] top-[25%]"
        />
        <MdClose className="text-xl" onClick={() => setMenu(!menu)} />
      </div>
      <ul className="w-[90%] mx-auto space-y-4 mt-5  font-clashRegular">
        {navItems.map(({ name, slug }) => (
          <li key={name} className="w-full   text-center">
            <NavLink to={slug} className="">
              {name}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
