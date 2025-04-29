import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  return (
    <div className="w-full z-100  bg-black">
      <div className="flex justify-between items-center p-5 lg:px-32 px-5 z-100 bg-black">
        {/* Logo */}
        <div className="flex items-center cursor-pointer gap-2">
          <h1 className="text-3xl font-bold text-[#fdc448]">PortFolio</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center text-xl font-medium gap-8">
          {["home", "about", "portfolio", "review","services", "contact"].map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              duration={1000}
              className="group relative inline-block cursor-pointer text-white hover:text-[#fdc448] transition-all duration-500"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute rounded-2xl inset-x-0 bottom-0 h-0.5 bg-[#fdc448] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 "></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center justify-evenly gap-5">
          <FaFacebookF
            size={55}
            className="bg-[#fdc448] cursor-pointer p-4 rounded-full border-2 border-transparent hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300"
          />
          <FaTwitter
            size={55}
            className="bg-[#fdc448] cursor-pointer p-4 rounded-full border-2 border-transparent hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300"
          />
          <FaYoutube
            size={55}
            className="bg-[#fdc448] cursor-pointer p-4 rounded-full border-2 border-transparent hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300"
          />
          <FaInstagram
            size={55}
            className="bg-[#fdc448] cursor-pointer p-4 rounded-full border-2 border-transparent hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300"
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center text-white">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden z-50 flex flex-col absolute bg-[#1e1e1e] text-white left-0 top-20 font-semibold text-xl text-center py-9 gap-4 w-full h-auto transition-transform duration-500`}
      >
        {["home", "about", "portfolio", "review","services", "contact"].map((item) => (
          <Link
            key={item}
            to={item}
            spy={true}
            smooth={true}
            duration={1000}
            className="hover:text-[#fdc448] transition-all cursor-pointer"
            onClick={closeMenu}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}

        {/* Mobile Social Icons */}
        <div className="flex items-center justify-center gap-2">
          <FaFacebookF
            size={45}
            className="bg-[#fdc448] cursor-pointer p-2 rounded-full border-2 border-transparent hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300"
          />
          <FaTwitter
            size={45}
            className="bg-[#fdc448] cursor-pointer p-2 rounded-full border-2 border-transparent hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300"
          />
          <FaYoutube
            size={45}
            className="bg-[#fdc448] cursor-pointer p-2 rounded-full border-2 border-transparent hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300"
          />
          <FaInstagram
            size={45}
            className="bg-[#fdc448] cursor-pointer p-2 rounded-full border-2 border-transparent hover:bg-black hover:text-[#fdc448] hover:border-[#fdc448] transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
