import React from 'react';
import { User } from 'lucide-react';
import profileImage from '../assets/profile.jpg'; // Replace with your image filename

const Header = () => {
  return (
    <header
      id="header"
      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-16 shadow-lg"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="relative">
          <img
            src={profileImage} // Image from assets folder
            alt="Melvin P. Sagnoy"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white"
          />
          <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 border-white animate-pulse"></div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold mt-4 sm:mt-6 mb-2 sm:mb-4 tracking-tight text-center">
          MELVIN P. SAGNOY
        </h1>
        <p className="text-lg sm:text-xl opacity-80 text-center flex items-center gap-2">
          <User className="w-4 h-4 sm:w-5 sm:h-5" /> IT Enthusiast | PHILNITS Passer
        </p>
      </div>
    </header>
  );
};

export default Header;
