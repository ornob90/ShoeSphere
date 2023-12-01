import React from "react";

import { Outlet } from "react-router-dom";
import ProfileSideBar from "../pages/Profile/ProfileSideBar";

const Profile = () => {
  return (
    <div className="relative">
      <ProfileSideBar />
      <Outlet />
    </div>
  );
};

export default Profile;
