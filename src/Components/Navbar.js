// src/Navbar.js
import React from "react";

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-black text-indigo-700">Logo</h1>
        <button className="md:hidden" onClick={toggleMenu}>
          <span className="text-gray-600">☰</span>
        </button>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="#home" className="text-gray-600 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
