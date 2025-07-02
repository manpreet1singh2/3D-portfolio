import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberBackground from './components/CyberBackground';
import VoiceNavigation from './components/VoiceNavigation';

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for cyberpunk aesthetic

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-black dark:bg-neutral-950 text-white transition-colors duration-500 relative overflow-x-hidden">
      <CyberBackground />
      
      {/* Futuristic theme toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-4 bg-black/20 dark:bg-cyber-blue/10 backdrop-blur-md rounded-full border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300 group neon-border"
        aria-label="Toggle theme"
        style={{
          boxShadow: darkMode 
            ? '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)' 
            : '0 0 20px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(139, 92, 246, 0.1)'
        }}
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-cyber-yellow group-hover:rotate-180 transition-transform duration-500 animate-neon-pulse" />
        ) : (
          <Moon className="w-6 h-6 text-cyber-purple group-hover:-rotate-12 transition-transform duration-500 animate-neon-pulse" />
        )}
      </button>

      <VoiceNavigation />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;