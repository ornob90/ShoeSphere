import React, { useState } from "react";

const ProfileCircle = () => {
  const [profileMenu, setProfileMenu] = useState(true);

  const navItems = [
    {
      name: "Profile",
    },
    {
      name: "Dashboard",
    },
  ];

  return (
    <div
      onClick={() => setProfileMenu(!profileMenu)}
      className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full border border-black "
    >
      <ul
        className={`${
          profileMenu ? "scale-100" : "scale-0"
        } duration-[.4s] w-[150px] h-[200px] absolute right-[20%] md:right-[7%] top-[70%]  bg-[#F2F2F2] flex flex-col  gap-3 pt-2 text-sm font-semibold`}
      >
        {navItems.map(({ name }) => (
          <li
            key={name}
            className="px-4 py-2 border-b cursor-pointer hover:bg-black hover:text-white"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileCircle;
