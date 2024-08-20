import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-orange-600 text-2xl font-bold">Web Developer</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto text-lg`}>
          <ul className="text-white md:flex md:space-x-8">
            <li>
              <div className="relative inline-flex items-center group cursor-pointer">
                <i className="fa-solid fa-arrow-down mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-600" ></i>
                <a href="#expertise" className="mr-2">Expertise</a>
              </div>
            </li>
            <li>
            <div className="relative inline-flex items-center group cursor-pointer">
                <i className="fa-solid fa-arrow-down mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-600" ></i>
                <a href="#proyects" className="mr-2">Projects</a>
              </div>
            </li>
            <li>
            <div className="relative inline-flex items-center group cursor-pointer">
                <i className="fa-solid fa-arrow-down mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-orange-600" ></i>
                <a href="#contact" className="mr-2">Contact</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
