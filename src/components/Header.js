import React, { useState } from "react";
import { Link } from "react-scroll";

import logo from "../images/logoheader.png";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#f5f5f5] z-50">
      <div className="flex bg-[#f5f5f5] flex-col sm:flex-row justify-evenly items-center py-4">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <div className="md:mb-0">
            <img src={logo} alt="Logo" />
          </div>
        </Link>

        <div className="flex   md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black cursor-pointer  bg-transparent`}
          >
            Home
          </Link>
          <Link
            to="shop"
            smooth={true}
            duration={500}
            className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black cursor-pointer  bg-transparent`}
          >
            <div>
              <select
                className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black  bg-transparent `}
              >
                <option>shop</option>
              </select>
            </div>
          </Link>

          <div>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <select
                className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black  bg-transparent `}
              >
                <option>Blog</option>
              </select>
            </Link>
          </div>
          <div>
            <select
              className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black  bg-transparent `}
            >
              <option>Pages</option>
            </select>
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black cursor-pointer  bg-transparent`}
          >
            contact
          </Link>
        
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <SearchIcon className="w-6 h-6 text-gray-600" />
            <h1 className="ml-2">
              <input placeholder="search" />
            </h1>
          </div>
          <div className="flex items-center">
            <ShoppingCartIcon className="w-6 h-6 text-gray-600" />
            <h1 className="ml-2">Cart</h1>
          </div>
          <div className="flex items-center">
            <MenuIcon
              className="w-6 h-6 text-gray-600 md:hidden sm:block"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
      {menuOpen ? (
        <div className="flex md:hidden vsm:block sm:block flex-col items-center w-full max-w-2xl mx-auto">
         <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <div className="mb-4">
              <select className="w-full hover:bg-gray-100">
                <option>Home</option>
              </select>
            </div>
          </Link>
          <Link
            to="shop"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <div className="mb-4">
              <select className="w-full hover:bg-gray-100">
                <option>shop</option>
              </select>
            </div>
          </Link>

          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
             <div className="mb-4">
            <select className="w-full hover:bg-gray-100">
              <option>Blog</option>
            </select>
          </div>
          </Link>
         

          <div className="mb-4">
            <select className="w-full hover:bg-gray-100">
              <option>Pages</option>
            </select>
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <div>
              <h1 className="hover:bg-gray-100">contact</h1>
            </div>
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
