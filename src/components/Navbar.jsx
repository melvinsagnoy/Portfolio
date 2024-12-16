import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#header" className="hover:text-blue-400">
            Sagnoy Portfolio
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-400">
              Education
            </a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-blue-400">
              Achievements
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#about"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Achievements
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
