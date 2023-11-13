import React, { useState } from "react";
import Container from "../../../components/shared/Container";
import { Link, NavLink } from "react-router-dom";
import Input from "../../../components/html/Input";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoutBtn from "../../../components/shared/LogoutBtn";
import Search from "../../../components/shared/Search";
import { CgMenuRightAlt } from "react-icons/cg";
import DropDown from "../../../components/shared/DropDown";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Collection",
      slug: "/collection",
    },
    {
      name: "Contact",
      slug: "/contact",
    },
  ];

  return (
    <Container>
      <nav className="flex justify-between  py-4 items-center overflow-hidden max-h-screen">
        {/* Logo */}
        <div className="w-[20%]">
          <p className="font-clashBold text-lg sm:text-xl">ShoeSphere</p>
        </div>

        {/* NavItems */}
        <ul className="hidden lg:flex justify-center gap-4 w-[40%] font-clashRegular items-center ">
          {navItems.map(({ name, slug }) => (
            <li key={name}>
              <NavLink
                to={slug}
                className={({ isActive }) =>
                  isActive ? "border-b border-black" : "nav-button duration-300"
                }
              >
                {name}
              </NavLink>{" "}
            </li>
          ))}
        </ul>

        {/* Search and Cart */}

        <div className="flex justify-end items-center gap-4  md:w-[80%] lg:w-[40%]">
          <Search
            className="hidden md:flex"
            iconClass="text-xl right-[3%]"
            inputClass="py-2"
          />
          <AiOutlineShoppingCart className="text-xl md:text-2xl" />
          <LogoutBtn />
          <CgMenuRightAlt
            className="text-xl md:hidden"
            onClick={() => setMenu(!menu)}
          />
        </div>
        <DropDown menu={menu} setMenu={setMenu} navItems={navItems} />
      </nav>
    </Container>
  );
};

export default Navbar;
