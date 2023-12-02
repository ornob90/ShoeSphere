import React, { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiSolidUserAccount } from "react-icons/bi";
import { IoBookmarks } from "react-icons/io5";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";

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
      name: "Orders",
      icon: (className) => <BsCartPlus className={`${className}`} />,
    },
    {
      name: "Transaction",
      icon: (className) => <AiOutlineTransaction className={`${className}`} />,
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-max  lg:h-auto lg:w-[18%] h-full">
      <h1
        onClick={() => setMenuOpen(true)}
        className={`${menuOpen ? "hidden" : ""} mt-[5vh] ml-[5vw] lg:hidden`}
      >
        <CgMenuLeftAlt className="text-2xl" />
      </h1>
      <aside
        className={`w-[70%] sm:w-[38%] lg:w-full pt-5 pl-5  min-h-[500px] h-full duration-[.4s] fixed lg:static ${
          menuOpen ? "top-0 left-0" : "left-[-100%] lg:top-0 lg:left-0"
        } duration-[.4s] bg-[#0E0E0E] `}
      >
        <div className="flex items-center justify-between pb-2 text-white">
          <Link
            to="/"
            className="text-lg underline cursor-pointer font-clashBold sm:text-xl"
          >
            ShoeSphere
          </Link>
          <BiLeftArrowAlt
            onClick={() => setMenuOpen(false)}
            className="text-2xl lg:hidden"
          />
        </div>
        <div className="flex items-center gap-4 pb-6 mt-5 text-white border-b">
          <div className="w-[80px] h-[80px] rounded-full bg-white text-black flex justify-center items-center font-clashBold text-2xl">
            JK
          </div>
          <div>
            <p>Hi,</p>
            <p className="font-bold">John Khan</p>
          </div>
        </div>
        <ul className="flex flex-col gap-4 mt-10 ">
          {navItem.map(({ name, icon }) => (
            <li
              className="text-sm sm:text-base flex items-center gap-4 text-white hover:bg-white hover:text-black duration-[.3s] py-2 pl-1 cursor-pointer"
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
