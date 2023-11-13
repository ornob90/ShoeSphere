import React from "react";

const ProductCarouselCard = () => {
  const img =
    "https://i.ibb.co/9yvzbpp/photo-1606107557195-0e29a4b5b4aa-removebg-preview.png";

  return (
    <div
      className="h-[350px] mb-48"
      style={{ backgroundColor: "rgb(234 234 234)" }}
    >
      <div
        style={{
          backgroundImage: ` url(${img})`,
          backgroundSize: "cover",
        }}
        className="h-[90%] relative "
      ></div>
      <div className=" h-[50px] bg-[rgb(234 234 234)] w-full"></div>
    </div>
  );
};

export default ProductCarouselCard;
