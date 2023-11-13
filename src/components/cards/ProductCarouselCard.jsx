import React, { useState } from "react";

const ProductCarouselCard = () => {
  const img =
    "https://i.ibb.co/9NrJwGT/photo-1525966222134-fcfa99b8ae77-q-80-w-1396-auto-format-fit-crop-ixlib-rb-4-0-removebg-preview.png";

  const [hover, setHover] = useState(false);

  return (
    <div
      className="h-[350px] mb-48 group"
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
        className="h-[90%] relative mx-auto"
      ></div>
      <div className=" h-[50px] bg-[rgb(234 234 234)] w-full  font-clashSemibold text-center">
        {hover ? "true" : "false"}
      </div>
    </div>
  );
};

export default ProductCarouselCard;
