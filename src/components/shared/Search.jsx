import React from "react";
import Input from "../html/Input";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ className = "", inputClass, iconClass }) => {
  return (
    <div className={`w-[60%] relative ${className} `}>
      <Input placeholder="Search" className={`w-full  ${inputClass}`} />
      <AiOutlineSearch className={`absolute top-[20%]  ${iconClass}`} />
    </div>
  );
};

export default Search;
