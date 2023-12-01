import React from "react";

const ProductCollectionCarousalCard = () => {
  const img =
    "https://images.unsplash.com/photo-1637844528447-aee837ccfc7f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.84), rgba(16, 7, 7, 0.35)), url(${img})`,
        backgroundSize: "cover",
        width: "100%",
      }}
      className="h-full relative"
    >
      <div className="absolute bottom-[8%] left-[38%] text-white font-clashBold text-2xl">
        NIKE
      </div>
    </div>
  );
};

export default ProductCollectionCarousalCard;
