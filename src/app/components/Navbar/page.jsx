
"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Hamburger from '../../../../public/assets/hamburger.svg';
import Close from '../../../../public/assets/close.svg';
import NavLink from "../Navlinks";

const navLinks = [
  { title: "About", path: "/AboutSection" },
  { title: "Projects", path: "/ProjectSection" },
  { title: "Contact", path: "/Contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const toggleNavbar = () => setNavbarOpen(!navbarOpen);

  return (
    <header>
    <nav className="fixed top-0 left-0 right-0 z-30 bg-[#121212] bg-opacity-90 border-b border-[#33353F] shadow-md w-full mx-auto">
      <div className="container mx-auto flex items-center justify-between px-12 py-3 lg:py-4">
      <Link href={'/'}><h2 className='text-2xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
      AW.</h2></Link>
        <div className="block md:hidden">
          <button
            onClick={toggleNavbar}
            className="flex items-center px-3 py-2 transition-colors duration-300"
          >
            {navbarOpen ? (
              <Image src={Close} alt="" className="h-6 w-6" />
            ) : (
              <Image src={Hamburger} alt=""  className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`absolute top-0 left-0 right-0 bg-[#121212] bg-opacity-90 md:static md:bg-transparent md:flex md:items-center md:space-x-8 md:mt-0 mt-16 ${
            navbarOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
            {navLinks.map((link, index) => (
              <li key={index} className="text-center md:text-left">
                <NavLink
                  href={link.path}
                  title={link.title}
                  className="text-white hover:text-[#ff6347] transition-colors duration-300"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;




