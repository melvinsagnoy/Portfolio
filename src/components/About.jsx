// src/components/About.jsx
import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <section  id="about" className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center mb-8">
          <User className="w-10 h-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-lg shadow-md">
          I am an IT enthusiast with a strong foundation in programming, front-end development, and database management. As a PHILNITS IT Passport exam passer and participant in the Jumpstart Program at Alliance Software Inc., I enjoy solving real-world problems through technology.
        </p>
      </div>
    </section>
  );
};

export default About;