import React from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="lg:ml-5 font-medium h-[500px] mt-16 lg:mt-0 w-[90%] mx-auto lg:w-full">
      <div className="flex px-4 py-2 border rounded-md shadow-sm cursor-pointer w-max text-[12px] md:text-base text-gray-600">
        <p className="mr-2">Sort By: </p>
        <p className="flex items-center gap-2 ">
          <span className="ml-2 font-medium">
            <span className="text-[8px] md:text-[10px] ">Price</span>Low
          </span>
          <FaArrowRightArrowLeft />
          <span className="font-medium">High</span>
        </p>
      </div>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
