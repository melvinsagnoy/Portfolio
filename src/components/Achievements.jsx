import React, { useState } from 'react';
import { Award } from 'lucide-react';

// Import images directly
import allianceJumpstart from '../assets/alliance-jumpstart.jpg';
import philnitsPass from '../assets/philnits-pass.png';
import ccnaIntro from '../assets/ccna-intro.png';
import ccnaSwitching from '../assets/ccna-switching.png';
import embeddedIot from '../assets/embedded-iot.png';

const Achievements = () => {
  const achievements = [
    { title: 'Alliance Jumpstart Program Completer', image: allianceJumpstart },
    { title: 'PHILNITS IT Passport Passer', image: philnitsPass },
    { title: 'CCNA: Introduction to Network (CISCO)', image: ccnaIntro },
    { title: 'Badge - CCNA Switching, Routing, Wireless', image: ccnaSwitching },
    { title: 'Certificate: Embedded System and IoT Project Exhibit', image: embeddedIot },
  ];

  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const openModal = (achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section id="achievements" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center mb-8">
          <Award className="w-10 h-10 text-green-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">Achievements</h2>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <ul className="space-y-4">
            {achievements.map((ach, index) => (
              <li
                key={index}
                className="flex justify-between items-center text-gray-700 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
                onClick={() => openModal(ach)}
              >
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                  {ach.title}
                </div>
                <span className="text-blue-500 hover:underline text-sm">
                  See here
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-bold mb-4">{selectedAchievement.title}</h3>
            <img
              src={selectedAchievement.image}
              alt={selectedAchievement.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
