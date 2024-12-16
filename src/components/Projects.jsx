import React, { useState } from 'react';
import { Briefcase, Code, Github } from 'lucide-react';
import roadGuardScreenshot1 from '../assets/1/1.jpg';
import roadGuardScreenshot2 from '../assets/1/2.jpg';
import roadGuardScreenshot3 from '../assets/1/3.jpg';
import meetingRoomScreenshot1 from '../assets/2/1.png';
import meetingRoomScreenshot2 from '../assets/2/2.png';
import meetingRoomScreenshot3 from '../assets/2/3.png';
import h1 from '../assets/3/1.jpg';
import h2 from '../assets/3/2.jpg';
import h3 from '../assets/3/3.jpg';
import s1 from '../assets/4/1.png';
import s2 from '../assets/4/2.png';
import s3 from '../assets/4/3.png';
import c1 from '../assets/5/1.png';
import c2 from '../assets/5/2.png';
import c3 from '../assets/5/3.png';
import meetingRoomicon from '../assets/2/4.png';
import icon from '../assets/1/icon.png';
import hicon from '../assets/3/4.png';
import sicon from '../assets/4/4.png';
import cicon from '../assets/5/4.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'RoadGuard',
      description:
        'A Capstone Project called A road safety alert mobile app in Cebu City. Users can post road safety alerts, and when a post reaches the desired number of upvotes, it automatically pins the hazard on a real-time map.',
      technologies: ['React Native', 'Firebase', 'Mapbox', 'Node.js'],
      githubLink: 'https://github.com/melvinsagnoy/ROADGUARD_FINAL_CAPSTONE.git', // Add GitHub link
      screenshots: [roadGuardScreenshot1, roadGuardScreenshot2, roadGuardScreenshot3],
      backgroundImage: icon,
      moreInfo:
        'RoadGuard helps users navigate safely by identifying road hazards in real-time. It integrates Firebase for real-time updates, Mapbox for mapping, and leverages user interaction to highlight hazards with a crowdsourcing approach.',
    },
    {
      title: 'Meeting Room Booking System',
      description:
        'A web application built using ASP.NET MVC for managing meeting room reservations, developed as part of the Alliance Jumpstart Program.',
      technologies: ['ASP.NET MVC', 'Entity Framework', 'SQL Server'],
      githubLink: 'https://github.com/angiealba/Group1_MeetingRoomBooking.git', // Add GitHub link
      screenshots: [meetingRoomScreenshot1, meetingRoomScreenshot2, meetingRoomScreenshot3],
      backgroundImage: meetingRoomicon,
      moreInfo:
        'The Meeting Room Booking System allows organizations to manage room bookings efficiently. Key features include:\n\n' +
        '- **Settings & Preferences**: Customize meeting room availability, user roles, and permissions.\n' +
        '- **Booking Summary**: View and manage all active, upcoming, and past bookings.\n' +
        '- **Reports & Analytics**: Generate insightful reports to track room utilization and booking trends.',
    },
    {
      title: 'Health Monitoring App',
      description:
        'An IoT-based system designed to monitor the health of elders. The system includes a wearable device for tracking vital signs and a mobile application for real-time monitoring.',
      technologies: ['React Native', 'IoT', 'Firebase'],
      githubLink: 'https://github.com/username/health-monitoring-app', // Add GitHub link
      screenshots: [h1, h2, h3], // Add screenshots here when available
      backgroundImage: hicon, // Use a relevant image for the background if available
      moreInfo:
        'The Health Monitoring App is an IoT-based solution aimed at ensuring the well-being of elders. It integrates wearable technology to measure vital signs, such as heart rate and blood pressure, and syncs this data with a mobile application. Features include:\n\n' +
        '- **Real-Time Health Monitoring**: Tracks vital signs and updates the app in real-time.\n' +
        '- **Data Analytics**: Provides health trend reports and insights over time for better decision-making.\n' +
        '- **Cloud Integration**: Uses Firebase to store and process data securely.',
    }, 
    {
      title: 'SITIN-MONITORING APP',
      description:
        'A web application built using PHP, HTML, and Tailwind CSS that allows students to reserve PCs for sit-in sessions at school, ensuring efficient utilization of resources.',
      technologies: ['PHP', 'HTML', 'Tailwind CSS'],
      githubLink: 'https://github.com/username/SITIN-Monitoring.git', // Add GitHub link
      screenshots: [s1, s2, s3], // Update with relevant screenshots
      backgroundImage: sicon, // Use a relevant image for the background if available
      moreInfo:
        'The SITIN-MONITORING APP is designed to streamline the reservation process for PCs in educational institutions. Key features include:\n\n' +
        '- **Settings & Preferences**: Configure PC availability, user roles, and reservation rules.\n' +
        '- **Reservation Summary**: View, manage, and update all active, upcoming, and completed reservations.\n' +
        '- **Reports & Analytics**: Generate detailed insights on PC utilization and student activity trends.',
    },    
    {
      title: 'Crimeless',
  description:
    'A mobile application designed for real-time emergency alerts to locate and dispatch responders during emergencies, ensuring swift action and safety.',
  technologies: ['React Native', 'PHP', 'SQL', 'Google Maps API'],
  githubLink: 'https://github.com/username/Crimeless.git', // Add GitHub link
      screenshots: [c1, c2, c3], // Update with relevant screenshots
      backgroundImage: cicon, // Use a relevant image for the background if available
      moreInfo:
        'The SITIN-MONITORING APP is designed to streamline the reservation process for PCs in educational institutions. Key features include:\n\n' +
        '- **Settings & Preferences**: Configure PC availability, user roles, and reservation rules.\n' +
        '- **Reservation Summary**: View, manage, and update all active, upcoming, and completed reservations.\n' +
        '- **Reports & Analytics**: Generate detailed insights on PC utilization and student activity trends.',
    }
    
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center mb-8">
          <Briefcase className="w-10 h-10 text-indigo-600 mr-4" />
          <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer relative`}
              onClick={() => openModal(project)}
              style={{
                backgroundImage: project.backgroundImage ? `url(${project.backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay for more opacity */}
              {project.backgroundImage && (
                <div className="absolute inset-0 bg-black bg-opacity-80 rounded-xl"></div>
              )}

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-indigo-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-200 mb-4">{project.description}</p>
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-2 mt-2"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </a>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full h-[80vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
            >
              Close
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="text-gray-700 mb-4 whitespace-pre-line">{selectedProject.moreInfo}</p>

            {/* Display GitHub Link in Modal */}
            {selectedProject.githubLink && (
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-2 mb-4"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}

            {/* Display Screenshots */}
            {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
              <div className="mb-4 space-y-4">
                {selectedProject.screenshots.map((screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`${selectedProject.title} Screenshot ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
