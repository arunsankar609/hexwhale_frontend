import React, { useState } from "react";
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
    <div>
      <div className="flex bg-[#f5f5f5] flex-col sm:flex-row justify-evenly items-center py-4">
        <div className="md:mb-0">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex   md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <div>
            <select
              className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black  bg-transparent`}
            >
              <option>Home</option>
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div>
            <select
              className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black  bg-transparent `}
            >
              <option>shop</option>
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div>
            <select
              className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black  bg-transparent `}
            >
              <option>Blog</option>
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div>
            <select
              className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black  bg-transparent `}
            >
              <option>Pages</option>
              <option>asdasd</option>
              <option>asdasd</option>
              <option>asdasd</option>
            </select>
          </div>
          <div>
            {/* <select style={{ display: menuOpen ? "block" : "none" }}>
            <option>Home</option>
            <option>asdasd</option>
            <option>asdasd</option>
            <option>asdasd</option>
          </select> */}
            <h2
              className={`md:block sm:hidden vsm:hidden hover:bg-gray-300 hover:text-black `}
            >
              contact
            </h2>
          </div>
          {/* Add similar select elements for other options */}
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <SearchIcon className="w-6 h-6 text-gray-600" />
            <h1 className="ml-2">Search</h1>
          </div>
          <div className="flex items-center">
            <ShoppingCartIcon className="w-6 h-6 text-gray-600" />
            <h1 className="ml-2">Cart</h1>
          </div>
          <div className="flex items-center">
            <MenuIcon className="w-6 h-6 text-gray-600 md:hidden sm:block" onClick={toggleMenu} />
          </div>
        </div>
      </div>
      {menuOpen ? (
  <div className="flex md:hidden vsm:block sm:block flex-col items-center w-full max-w-2xl mx-auto">
    <div className="mb-4">
      <select className="w-full hover:bg-gray-100">
        <option>Home</option>
        <option>sdada</option>
        <option>sdada</option>
      </select>
    </div>
    <div className="mb-4">
      <select className="w-full hover:bg-gray-100">
        <option>shop</option>
        <option>sdada</option>
        <option>sdada</option>
      </select>
    </div>
    <div className="mb-4">
      <select className="w-full hover:bg-gray-100">
        <option>Blog</option>
        <option>sdada</option>
        <option>sdada</option>
      </select>
    </div>
    <div className="mb-4">
      <select className="w-full hover:bg-gray-100">
        <option>Pages</option>
        <option>sdada</option>
        <option>sdada</option>
      </select>
    </div>
    <div >
      <h1 className="hover:bg-gray-100">contact</h1>
    </div>
  </div>
) : ""}

    </div>
  );
};

export default Header;
