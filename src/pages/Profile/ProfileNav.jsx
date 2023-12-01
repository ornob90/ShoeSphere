import React from "react";
import Container from "../../components/shared/Container";

const ProfileNav = () => {
  return (
    <nav className="flex justify-between max-w-[1440px] mx-auto py-4 border-b">
      <Container>
        <div className="w-max">
          <p className="text-lg font-clashBold sm:text-xl">ShoeSphere</p>
        </div>
      </Container>
    </nav>
  );
};

export default ProfileNav;
