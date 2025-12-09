import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styled from "styled-components";
import LogoImg from "../../assets/header/logo.png";
import ChevronDown from "/src/assets/header/chevron-down.svg";
import menuConfig from "../../config/menuConfig";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeTimeout = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMouseEnter = (menuTitle) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setActiveDropdown(menuTitle);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleChildClick = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const Logo = styled.img`
    width: 95.33px;
    height: 67px;
  `;
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div
        className="
           mx-auto px-4 py-3
          flex flex-row items-center justify-between
          flex-nowrap
          w-full
        "
      >
        <Link to="/" className="cursor-pointer flex-shrink-0">
          <Logo src={LogoImg} alt="Logo" />
        </Link>
        <button
          className="lg:hidden flex-shrink-0 text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="flex-shrink-0">
          <Link
            to="/contact"
            className="border border-black text-black px-4 py-2 hover:bg-black hover:text-white transition whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>

        <nav
          className="
    hidden lg:flex items-center justify-center
    gap-10 xl:gap-12 lg:gap-6
    font-medium text-gray-700
    whitespace-nowrap flex-nowrap
    absolute left-1/2 -translate-x-1/2
    px-2
  "
        >
          {menuConfig.map((menu, index) => {
            const hasChildren =
              Array.isArray(menu.children) && menu.children.length > 0;
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.title)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={menu.path}
                  className="flex items-center hover:text-black transition font-inter cursor-pointer whitespace-nowrap text-[15px] xl:text-base"
                >
                  {menu.title}
                  {hasChildren && (
                    <img src={ChevronDown} alt="Dropdown" className="ml-1" />
                  )}
                </Link>

                {hasChildren && activeDropdown === menu.title && (
                  <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                    {menu.children.map((child, i) => (
                      <Link
                        key={i}
                        to={child.path}
                        onClick={handleChildClick}
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700 font-inter whitespace-nowrap"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3 text-gray-700 font-medium">
            {menuConfig.map((menu, index) => {
              const hasChildren =
                Array.isArray(menu.children) && menu.children.length > 0;
              return (
                <div key={index} className="flex flex-col">
                  <Link
                    to={menu.path}
                    onClick={() => !hasChildren && setIsOpen(false)}
                    className="flex items-center justify-between hover:text-black transition py-2"
                  >
                    {menu.title}
                    {hasChildren && (
                      <img src={ChevronDown} alt="Dropdown" className="ml-2" />
                    )}
                  </Link>

                  {hasChildren && (
                    <div className="ml-4 mt-2 flex flex-col space-y-1">
                      {menu.children.map((child, i) => (
                        <Link
                          key={i}
                          to={child.path}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-600 hover:text-black transition py-1"
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
