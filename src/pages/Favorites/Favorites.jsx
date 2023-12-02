import React from "react";
import Container from "../../components/shared/Containers/Container";
import FavoriteCard from "./FavoriteCard";
import Button from "../../components/html/Button";

const Favorites = () => {
  return (
    <div className="pt-[25%] sm:pt-[15%] md:pt-[12%] lg:pt-[9%] w-[90%] md:w-[80%] lg:w-[65%] mx-auto min-h-screen">
      <h1 className=" font-bold text-2xl md:text-3xl border-b-2 pb-2">
        Personal Picks
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-x-3 gap-y-10">
        <FavoriteCard />
        <FavoriteCard />
      </div>
      <Button className="w-full text-black py-3 bg-white border border-black mt-8 font-clashSemibold text-lg">
        Load More
      </Button>
    </div>
  );
};

export default Favorites;
