"use client";
import Link from "next/link";
import Image from "next/image";
import { LogoImg } from "../utilis/Images";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add scroll listener to change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src={LogoImg}
            className="w-36 h-auto object-contain"
            alt="Logo"
          />
        </Link>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute font-bold  md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-transform duration-300 md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8 rtl:space-x-reverse ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0 ${
            menuOpen ? "block" : "hidden md:block"
          } text-center md:text-left`}
        >
          <li>
            <Link
              href="/#home"
              className={`block py-2 px-4 rounded hover:text-sky-400 ${
                isScrolled ? "text-gray-900" : "text-black"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`block py-2 px-4 rounded hover:text-sky-400 ${
                isScrolled ? "text-gray-900" : "text-black"
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`block py-2 px-4 rounded hover:text-sky-400 ${
                isScrolled ? "text-gray-900" : "text-black"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`block py-2 px-4 rounded hover:text-sky-400 ${
                isScrolled ? "text-gray-900" : "text-black"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
