import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center">
      <Navbar />
      <div className="w-full max-w-screen-lg px-4">
        <Header />
        <About />
        <Skills />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
