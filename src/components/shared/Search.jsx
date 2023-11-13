import React from "react";
import Input from "../html/Input";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ className }) => {
  return (
    <div className={`w-[60%] relative ${className}`}>
      <Input placeholder="Search" className="w-full py-2" />
      <AiOutlineSearch className="absolute top-[20%] text-xl right-[3%]" />
    </div>
  );
};

export default Search;
