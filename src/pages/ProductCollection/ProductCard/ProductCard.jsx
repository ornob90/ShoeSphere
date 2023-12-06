import React from "react";
import { GoPlus } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, price, images } = product || {};

  const navigate = useNavigate();

  return (
    <div className="h-[350px] ">
      <div
        onClick={() => navigate(`/product/${_id}`)}
        className="h-[70%] bg-[#F2F2F2] relative cursor-pointer"
      >
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
