import React,{useState} from "react";
import Logo from "../../assets/website/Logo.svg";
import {HiMenuAlt1,HiMenuAlt3} from  "react-icons/hi";

import DarkMode from "./DarkMode";
import ResponsiveMenu from "./ResponsiveMenu";

export const MenuLinks = [
  {
    id: 1,
    name: "About",
    link: "#about",
  },
  {
    id: 2,
    name: "Services",
    link: "#services",
  },
  {
    id: 3,
    name: "Projects",
    link: "#projects",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="bg-white dark:bg-black dark:text-white duration-300">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-5" />
                <span className="text-2xl sm:text-3xl font-semibold">
                  Digital Agency
                </span>
              </a>
            </div>
            {/* NavLinks Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {MenuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="cursor-pointer py-4">
                      <a
                        href="#"
                        className="text-lg font-medium  hover:text-primary py-2 hover:border-b-2
                      hover:border-primary transition-all duration-300 "
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
                <button className="primary-btn">Get Started</button>
                <DarkMode />
              </ul>
            </div>
            {/*Mobile View*/}
            <div className="flex items-center gap-4 md:hidden ">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu showMenu = {showMenu}/>
      </div>
    </>
  );
};

export default Navbar;
