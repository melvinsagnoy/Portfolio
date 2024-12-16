// src/components/Skills.jsx
import React from 'react';
import { Code, Briefcase, User } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      category: 'Backend Development', 
      items: ['C', 'C++', 'C#', 'Python'],
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    { 
      category: 'Web Development', 
      items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Flask', 'React'],
      icon: <Briefcase className="w-8 h-8 text-green-600" />
    },
    { 
      category: 'Mobile Development', 
      items: ['React Native'],
      icon: <User className="w-8 h-8 text-purple-600" />
    },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-8">
          <Code className="w-10 h-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all group"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-4">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    className="text-gray-600 flex items-center"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;