// src/ToggleMenu.js
import React from "react";

const ToggleMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={toggleMenu}
    >
      <div className="absolute right-0 bg-white w-64 h-full shadow-lg">
        <button className="text-gray-600 p-4" onClick={toggleMenu}>
          ✖
        </button>
        <ul className="flex flex-col space-y-4 p-4">
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
    </div>
  );
};

export default ToggleMenu;
