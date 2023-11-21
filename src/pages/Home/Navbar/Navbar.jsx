import React, { useEffect, useState } from "react";
import Container from "../../../components/shared/Container";
import { Link, NavLink, useLocation } from "react-router-dom";
import Input from "../../../components/html/Input";
import { AiOutlineShoppingCart } from "react-icons/ai";
import LogoutBtn from "../../../components/shared/LogoutBtn";
import Search from "../../../components/shared/Search";
import { CgMenuRightAlt } from "react-icons/cg";
import DropDown from "../../../components/shared/DropDown";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import CartBtn from "./CartBtn";

const Navbar = ({ handleCartOpen }) => {
  const [menu, setMenu] = useState(false);
  const [transparent, setTransparent] = useState(false);
  const [bgWhite, setBgWhite] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const { pathname } = useLocation();

  useEffect(() => {
    setTransparent(pathname.includes("/product/"));
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prevValue = scrollY.getPrevious();
    // console.log("latest: ", latest - 50, "prev: ", prevValue);
    if (latest > 240) {
      setBgWhite(true);
    } else {
      setBgWhite(false);
    }

    if (latest > prevValue) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Collection",
      slug: "/cart",
    },
    {
      name: "Contact",
      slug: "/checkout",
    },
    {
      name: "Favorites",
      slug: "/favorites",
    },
  ];

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 z-10 w-full  ${
        transparent ? " bg-transparent" : "bg-white"
      } h-max `}
    >
      <nav
        className={`px-[5%] flex justify-between  py-4 items-center overflow-hidden border-b ${
          transparent && !bgWhite
            ? "border-none text-white"
            : bgWhite && transparent
            ? "bg-white text-black"
            : "border-b-gray-500 text-black"
        }   z-10 `}
      >
        {/* Logo */}
        <div className="w-[20%]">
          <p className="text-lg font-clashBold sm:text-xl">ShoeSphere</p>
        </div>

        {/* NavItems */}
        <ul className="hidden lg:flex justify-center gap-4 w-[40%] font-clashRegular items-center pl-[5%]">
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
            iconClass={`text-xl right-[3%] top-[25%] `}
            transparent={transparent}
            inputClass="py-2"
          />
          <div>
            <AiOutlineShoppingCart
              onClick={handleCartOpen}
              className="text-xl md:text-2xl"
            />
          </div>

          <LogoutBtn />
          <CgMenuRightAlt
            className="text-xl md:hidden "
            onClick={() => setMenu(!menu)}
          />
        </div>
        <DropDown menu={menu} setMenu={setMenu} navItems={navItems} />
      </nav>
    </motion.div>
  );
};

export default Navbar;
