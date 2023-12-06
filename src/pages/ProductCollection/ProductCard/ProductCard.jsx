import React from "react";
import { GoPlus } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import usePostSecure from "../../../hooks/apiSecure/usePostSecure";
import toast from "react-hot-toast";
import useUser from "../../../hooks/specific/useUser";

const ProductCard = ({ product }) => {
  const { _id, name, price, images } = product || {};
  const { _id: user } = useUser() || {};

  const { mutateAsync: addToCart } = usePostSecure(null, "/cart");

  const navigate = useNavigate();

  const handleAddToCart = async () => {
    try {
      const product = {
        user,
        product: _id,
        price,
      };

      await toast.promise(addToCart(product), {
        pending: "Adding to cart...",
        success: "Added to cart!",
        error: "Failed to add to cart",
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

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
      <div className="px-2 flex flex-col gap-1 mt-3 text-sm font-medium">
        <h1 className="font-semibold">{name}</h1>
        <div className="flex items-center justify-between w-[95%]">
          <p>${price}</p>
          <p className="w-[15px] h-[15px] bg-black rounded-full"></p>
        </div>
        <div className="flex justify-between w-[96%] cursor-pointer">
          <p className="text-[12px] ">Add to cart</p>
          <p
            onClick={handleAddToCart}
            className="text-2xl text-gray-400 cursor-pointer    duration-300 hover:rotate-90"
          >
            +
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
