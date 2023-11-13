import React from "react";
import Container from "../../../components/shared/Container";
import { Link, NavLink } from "react-router-dom";
import Input from "../../../components/html/Input";

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
      <div className="flex justify-between  py-4">
        {/* Logo */}
        <div>
          <p className="font-clashBold text-lg sm:text-xl">ShoeSphere</p>
        </div>

        {/* NavItems */}
        <div>
          {navItems.map(({ name, slug }) => (
            <NavLink key={name} to={slug}>
              {name}
            </NavLink>
          ))}
        </div>

        {/* Search and Cart */}

        <div className="flex justify-between">
          <Input placeholder="Search" />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
