import React from "react";
import { FaHeart } from "react-icons/fa";

const FavoriteCard = () => {
  return (
    <div className="h-[300px] md:h-[300px] border rounded-lg shadow-sm">
      <div className="h-4/5 bg-gray-200 ">
        <img
          src="https://i.ibb.co/9NrJwGT/photo-1525966222134-fcfa99b8ae77-q-80-w-1396-auto-format-fit-crop-ixlib-rb-4-0-removebg-preview.png"
          alt=""
          className="w-[70%] md:w-[80%] mx-auto h-full object-cover rounded-lg"
        />
      </div>
      <div className="h-1/5 px-4 pt-2">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">Shoe Name</h1>
            <p className="text-sm text-gray-400">Brand</p>
          </div>
          <div className="flex flex-col justify-center items-end gap-1">
            <FaHeart />
            <p className=" font-medium">$66</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
