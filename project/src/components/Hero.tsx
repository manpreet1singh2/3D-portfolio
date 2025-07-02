import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, Zap, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Architect of Next-Gen Web Solutions";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating cyber elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-cyber-blue/30 rounded-lg animate-float rotate-45">
        <div className="w-full h-full bg-cyber-blue/10 animate-neon-pulse"></div>
      </div>
      <div className="absolute top-40 right-20 w-32 h-32 border border-cyber-purple/30 rounded-full animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-full h-full bg-cyber-purple/10 rounded-full animate-neon-pulse"></div>
      </div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border border-cyber-pink/30 rounded-lg animate-float" style={{ animationDelay: '4s' }}>
        <Cpu className="w-full h-full text-cyber-pink/50 p-2 animate-neon-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 animate-fade-in-up">
          {/* Holographic name display */}
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-cyber font-bold leading-tight">
                <span className="block text-white cyberpunk-glow animate-cyber-glitch">
                  MANPREET SINGH
                </span>
                <span className="block holographic text-transparent bg-clip-text min-h-[1.2em] mt-4">
                  {displayText}
                  <span className="animate-blink border-r-4 border-cyber-blue ml-2"></span>
                </span>
              </h1>
              
              {/* Glitch overlay effect */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyber-blue animate-cyber-glitch opacity-30"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-cyber-pink animate-cyber-glitch opacity-30" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            
            <div className="relative">
              <p className="text-2xl sm:text-3xl text-cyber-blue font-cyber font-medium animate-neon-pulse">
                Redefining Innovation with Code & Creativity
              </p>
              <div className="absolute -inset-4 bg-cyber-blue/5 rounded-lg blur-xl"></div>
            </div>
          </div>

          {/* Enhanced description with cyber styling */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-black/40 backdrop-blur-md border border-cyber-blue/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink"></div>
              <p className="text-lg text-white/90 leading-relaxed font-display">
                Computer Science Engineering student and visionary developer intern with expertise in 
                <span className="text-cyber-blue font-semibold"> cutting-edge web development</span>, 
                <span className="text-cyber-purple font-semibold"> machine learning</span>, and 
                <span className="text-cyber-pink font-semibold"> immersive digital experiences</span>. 
                Transforming complex problems into elegant solutions that push the boundaries of what's possible.
              </p>
            </div>
          </div>

          {/* Futuristic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white px-10 py-5 rounded-full font-cyber font-bold text-lg transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 30px rgba(0, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Zap className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                <span>DIVE INTO MY WORK</span>
                <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative border-2 border-cyber-blue hover:border-cyber-pink text-cyber-blue hover:text-cyber-pink px-10 py-5 rounded-full font-cyber font-bold text-lg transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)'
              }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <Code className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span>CONNECT NOW</span>
              </span>
              <div className="absolute inset-0 bg-cyber-pink/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 pt-8">
            {[
              { icon: Github, href: 'https://github.com/manpreet1singh2', color: 'cyber-blue' },
              { icon: Linkedin, href: 'https://linkedin.com/in/manpreet-singh-0148ab179', color: 'cyber-purple' },
              { icon: Mail, href: 'mailto:dimplebrar13@gmail.com', color: 'cyber-pink' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-black/20 backdrop-blur-md rounded-full border border-white/10 hover:border-cyber-blue/60 transition-all duration-500 hover:-translate-y-2"
                style={{
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.2), inset 0 0 20px rgba(0, 255, 255, 0.05)',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <social.icon className={`w-7 h-7 text-white group-hover:text-${social.color} group-hover:scale-125 transition-all duration-300 animate-neon-pulse`} />
                <div className="absolute inset-0 bg-cyber-blue/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
            ))}
          </div>

          {/* Holographic stats display */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12">
            {[
              { label: 'Projects', value: '3+', color: 'cyber-blue' },
              { label: 'Skills', value: '10+', color: 'cyber-purple' },
              { label: 'Experience', value: '3mo', color: 'cyber-pink' },
              { label: 'Certifications', value: '3', color: 'cyber-green' }
            ].map((stat, index) => (
              <div
                key={index}
                className="relative bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 group hover:border-cyber-blue/50 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-3xl font-cyber font-bold text-${stat.color} cyberpunk-glow`}>
                  {stat.value}
                </div>
                <div className="text-white/70 font-cyber text-sm mt-1">
                  {stat.label}
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-purple/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Futuristic scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-blue hover:text-cyber-purple transition-all duration-300 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
            </div>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:scale-110 transition-transform duration-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;