import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AcademicAchievements from './components/AcademicAchievements';
import QuizLegacyWall from './components/QuizLegacyWall';
import ProjectShowcase from './components/ProjectShowcase';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import DimensionalPulse from './components/DimensionalPulse';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showMainSite, setShowMainSite] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowMainSite(true);
  };

  return (
    <div className="min-h-screen bg-cosmic text-white font-inter overflow-x-hidden">
      {showSplash && (
        <DimensionalPulse onComplete={handleSplashComplete} />
      )}
      
      {showMainSite && (
        <>
          <ParticleBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <AcademicAchievements />
            <QuizLegacyWall />
            <ProjectShowcase />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;