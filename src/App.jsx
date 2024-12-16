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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <br></br>
      <Navbar />
      <br></br>
      <Header />
      <About />
      <Skills />
      <Education />
      <Achievements />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
