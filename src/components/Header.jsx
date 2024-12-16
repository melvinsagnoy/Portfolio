// src/components/Header.jsx
import React from 'react';
import { User } from 'lucide-react';
import profileImage from '../assets/profile.jpg'; // Replace with your image filename

const Header = () => {
  return (
    <header id = "header" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 shadow-lg">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="relative">
        <img
          src={profileImage} // Image from assets folder
          alt="Melvin P. Sagnoy"
          className="w-32 h-32 rounded-full border-4 border-white"
        />
          <div className="absolute bottom-0 right-0 bg-green-500 w-8 h-8 rounded-full border-4 border-white animate-pulse"></div>
        </div>
        <h1 className="text-5xl font-extrabold mt-6 mb-4 tracking-tight text-center">
          MELVIN P. SAGNOY
        </h1>
        <p className="text-xl opacity-80 text-center flex items-center gap-2">
          <User className="w-5 h-5" /> IT Enthusiast | PHILNITS Passer
        </p>
      </div>
    </header>
  );
};

export default Header;