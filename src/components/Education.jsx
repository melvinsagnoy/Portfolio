// src/components/Education.jsx
import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    { period: '2021 - Present', degree: 'BS in Information Technology', school: 'University of Cebu Main Campus' },
    { period: '2019 - 2021', degree: 'SHS', school: 'University of Cebu Pri Campus' },
    { period: '2015 - 2019', degree: 'Junior High', school: 'Abellana National School' },
    { period: '2009 - 2015', degree: 'Elementary', school: 'Lahug Elementary School' },
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-8">
          <GraduationCap className="w-10 h-10 text-blue-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
            >
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4 group-hover:animate-pulse"></div>
                <p className="text-sm text-gray-500 font-medium">{edu.period}</p>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;