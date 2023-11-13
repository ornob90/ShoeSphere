import React from "react";
import Container from "../../../components/shared/Container";
import Button from "../../../components/html/Button";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <Container>
      {/* Banner Title */}
      <div className="w-full grid grid-cols-1 md:grid-cols-5 pt-10 ">
        <h1 className=" font-clashBold md:col-span-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Discover Your Perfect Pair
        </h1>
        <div className="md:col-span-2 ">
          <p className="font-poppins text-[12px] md:text-sm text-gray-400 mb-4 w-[70%]">
            Explore our curated collection of the latest trends in footwear.
            Find the perfect pair that suits your style and comfort
          </p>
          <Button className=" py-1 px-4 ">Find Your Style</Button>
        </div>
      </div>

      {/* Banner Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 h-[400px] mt-10 mb-48">
        <div className=" bg-banner1 relative md:col-span-3">
          <h2 className="absolute left-[10%] bottom-[20%] text-white font-clashSemibold text-2xl">
            Iconic Style, Exceptional Comfort.
          </h2>
        </div>
        <div className="grid grid-row-2 md:col-span-2 gap-2">
          <div className="bg-banner2 relative">
            <h2 className="absolute left-[10%] bottom-[20%] text-white font-clashSemibold text-xl">
              Casual Comfort, Effortless Style.
            </h2>
          </div>
          <div className="bg-banner3 relative">
            <h2 className="absolute left-[10%] bottom-[20%] text-white font-clashSemibold text-xl">
              Run Beyond Limits
            </h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
