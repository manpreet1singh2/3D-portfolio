import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 dark:bg-neutral-950/80 backdrop-blur-xl border-b border-cyber-blue/30' 
        : 'bg-transparent'
    }`}
    style={{
      boxShadow: scrolled ? '0 0 30px rgba(0, 255, 255, 0.2)' : 'none'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Futuristic Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <Zap className="w-10 h-10 text-cyber-blue animate-neon-pulse" />
              <div className="absolute inset-0 w-10 h-10 bg-cyber-blue/20 rounded-full animate-ping"></div>
            </div>
            <div>
              <span className="font-cyber font-bold text-2xl text-white cyberpunk-glow">
                MANPREET
              </span>
              <div className="text-xs text-cyber-blue font-cyber tracking-widest">
                SINGH.EXE
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-white/80 hover:text-cyber-blue px-4 py-2 text-sm font-cyber font-medium transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-cyber-blue/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover:w-full"></div>
                  <div className="absolute inset-0 border border-transparent group-hover:border-cyber-blue/30 rounded-lg transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyber-blue p-3 transition-all duration-300 relative group"
            >
              <div className="absolute inset-0 bg-cyber-blue/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {isOpen ? (
                <X className="w-6 h-6 relative z-10 animate-cyber-glitch" />
              ) : (
                <Menu className="w-6 h-6 relative z-10" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyber-blue/30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white/80 hover:text-cyber-blue block px-4 py-3 text-base font-cyber font-medium w-full text-left transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-cyber-blue/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-cyber-blue transition-all duration-300 group-hover:w-full transform -translate-y-1/2"></div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;