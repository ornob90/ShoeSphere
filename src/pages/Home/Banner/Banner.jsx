import React from "react";
import Container from "../../../components/shared/Container";
import Button from "../../../components/html/Button";

const Banner = () => {
  return (
    <Container>
      <div className="w-full grid grid-cols-1 md:grid-cols-5 pt-10">
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
    </Container>
  );
};

export default Banner;
