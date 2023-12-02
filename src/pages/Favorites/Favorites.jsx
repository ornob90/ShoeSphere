import React from "react";
import Container from "../../components/shared/Containers/Container";
import FavoriteCard from "./FavoriteCard";
import Button from "../../components/html/Button";
import { IoBookmarks } from "react-icons/io5";

import ProfileHeader from "../../components/shared/Headers/ProfileHeader";
import DashboardProfileContainer from "../../components/shared/Containers/DashboardProfileContainer";

const Favorites = () => {
  return (
    <DashboardProfileContainer>
      <ProfileHeader
        header={"Personal Picks"}
        icon={<IoBookmarks className="text-2xl lg:text-3xl" />}
      />
      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10">
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
      </div>
      <Button className="w-full py-2 mt-8 mb-10 text-lg text-black bg-white border border-black font-clashSemibold">
        Load More
      </Button>
    </DashboardProfileContainer>
  );
};

export default Favorites;
