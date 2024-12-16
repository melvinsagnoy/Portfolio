import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold"> 
            <a href="#header" className="hover:text-blue-400">Sagnoy Portfolio</a>
          </div>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-400">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-400">Education</a>
          </li>
          <li>
            <a href="#achievements" className="hover:text-blue-400">Achievements</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
