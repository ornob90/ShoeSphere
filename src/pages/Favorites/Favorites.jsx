import React from "react";
import Container from "../../components/shared/Container";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {
  return (
    <div className="pt-[25%] sm:pt-[15%] md:pt-[12%] lg:pt-[9%] w-[90%] md:w-[70%] lg:w-[60%] mx-auto min-h-screen">
      <h1 className=" font-bold text-2xl md:text-3xl border-b-2 pb-2">
        Personal Picks
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <FavoriteCard />
      </div>
    </div>
  );
};

export default Favorites;
