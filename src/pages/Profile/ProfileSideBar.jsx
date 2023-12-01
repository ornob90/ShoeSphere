import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoBookmarks } from "react-icons/io5";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";

const ProfileSideBar = () => {
  const navItem = [
    {
      name: "Account",
      icon: (className) => <BiSolidUserAccount className={`${className}`} />,
    },
    {
      name: "Wishlist",
      icon: (className) => <IoBookmarks className={`${className}`} />,
    },
    {
      name: "Address",
      icon: (className) => <TbInfoOctagonFilled className={`${className}`} />,
    },
    {
      name: "Transaction",
      icon: (className) => <AiOutlineTransaction className={`${className}`} />,
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      <h1
        onClick={() => setMenuOpen(true)}
        className={`${menuOpen ? "hidden" : ""} pl-[5%] pt-[5%] lg:hidden`}
      >
        <CgMenuLeftAlt className="text-2xl" />
      </h1>
      <aside
        className={`pt-5 pl-5 w-[60%] sm:w-[38%] lg:w-[18%] min-h-[500px] h-screen duration-[.4s] fixed lg:static ${
          menuOpen ? "top-0 left-0" : "left-[-100%] lg:top-0 lg:left-0"
        } duration-[.4s]`}
      >
        <div className="flex justify-between items-center border-b pb-2">
          <p className="text-lg font-clashBold sm:text-xl ">ShoeSphere</p>
          <BiLeftArrowAlt
            onClick={() => setMenuOpen(false)}
            className="text-2xl lg:hidden"
          />
        </div>
        <ul className="flex flex-col gap-6 mt-10">
          {navItem.map(({ name, icon }) => (
            <li
              className="text-sm sm:text-base flex items-center gap-4 text-black"
              key={name}
            >
              {icon("text-xl")}
              {name}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ProfileSideBar;
