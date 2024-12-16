import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-12 px-4 sm:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center mb-8">
          <User className="w-10 h-10 text-indigo-600 mb-4 sm:mb-0 sm:mr-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
            About Me
          </h2>
        </div>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
          I am an IT enthusiast with a strong foundation in programming, front-end development, and database management. 
          As a PHILNITS IT Passport exam passer and participant in the Jumpstart Program at Alliance Software Inc., 
          I enjoy solving real-world problems through technology.
        </p>
      </div>
    </section>
  );
};

export default About;
