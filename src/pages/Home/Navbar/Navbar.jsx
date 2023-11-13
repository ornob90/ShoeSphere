import React from "react";
import Container from "../../../components/shared/Container";
import { Link, NavLink } from "react-router-dom";
import Input from "../../../components/html/Input";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoutBtn from "../../../components/shared/LogoutBtn";
import Search from "../../../components/shared/Search";

const Navbar = () => {
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
      <div className="flex justify-between  py-4 items-center">
        {/* Logo */}
        <div className="w-[20%]">
          <p className="font-clashBold text-lg sm:text-xl">ShoeSphere</p>
        </div>

        {/* NavItems */}
        <div className="hidden lg:flex justify-center gap-4 w-[40%] font-clashRegular items-center ">
          {navItems.map(({ name, slug }) => (
            <div key={name}>
              <NavLink
                to={slug}
                className={({ isActive }) =>
                  isActive ? "border-b border-black" : "nav-button duration-300"
                }
              >
                {name}
              </NavLink>{" "}
            </div>
          ))}
        </div>

        {/* Search and Cart */}

        <div className="flex justify-end items-center gap-4  md:w-[80%] lg:w-[40%]">
          <Search className="hidden md:flex" />
          <AiOutlineShoppingCart className="text-2xl" />
          <LogoutBtn />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
