import React from "react";
import { GoPlus } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    brand,
    gender,
    price,
    available,
    description,
    shippingPrice,
    sizes,
    images,
    discount,
    buyingCost,
    profitPercentage,
    sellPrice,
    addedDate,
  } = product || {};

  return (
    <div className="h-[350px] ">
      <div className="h-[70%] bg-[#F2F2F2] relative">
        <img
          src={images[0]}
          alt={name}
          className="object-cover h-full mx-auto"
        />
        <FaRegHeart className="absolute top-[5%] right-[5%] text-lg" />
      </div>
      <div className="flex flex-col gap-1 mt-3 text-sm font-medium">
        <h1 className="font-semibold">{name}</h1>
        <div className="flex items-center justify-between w-[95%]">
          <p>${price}</p>
          <p className="w-[15px] h-[15px] bg-black rounded-full"></p>
        </div>
        <div className="flex justify-between w-[96%]">
          <p className="text-[12px]">Add to cart</p>
          <p className="text-2xl text-gray-400 cursor-pointer">+</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
