import React, { useState } from "react";
import Button from "../html/Button";

const ProductCarouselCard = () => {
  const img =
    "https://i.ibb.co/9NrJwGT/photo-1525966222134-fcfa99b8ae77-q-80-w-1396-auto-format-fit-crop-ixlib-rb-4-0-removebg-preview.png";

  const [hover, setHover] = useState(false);

  return (
    <div
      className="h-[350px] mb-48 group relative w-full"
      style={{ backgroundColor: "rgb(234 234 234)" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          backgroundImage: ` url(${img})`,
          backgroundSize: "cover",
          width: "80%",
        }}
        className={`h-[90%] relative mx-auto  duration-[.4s] ${
          hover ? "scale-105" : ""
        }`}
      ></div>
      <div className=" h-[50px] bg-[rgb(234 234 234)] w-full  font-clashSemibold text-center">
        Shoe Name
      </div>
      {/* show on hover */}
      <div
        className={`absolute top-0 left-0 w-full h-[400px]  z-5 flex flex-col justify-center items-center gap-4 font-clashRegular  ${
          hover ? "backdrop-blur-sm" : ""
        }`}
      >
        <Button
          className={` w-[80%] border border-black bg-transparent text-black ${
            hover
              ? " h-[10%] text-base "
              : "w-0 h-0 text-[0px] border-none duration-[.5s]"
          } duration-[.5s] hover:bg-black hover:text-white`}
        >
          Details
        </Button>
        <Button
          className={` w-[80%] border border-black bg-transparent text-black ${
            hover ? " h-[10%] text-base " : "w-0 h-0 text-[0px] border-none "
          } duration-[.5s] hover:bg-black hover:text-white`}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCarouselCard;
