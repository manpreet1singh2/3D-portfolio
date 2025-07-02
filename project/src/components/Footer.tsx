import React from 'react';
import { Zap, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/manpreet1singh2',
      label: 'GitHub',
      color: 'cyber-blue'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/manpreet-singh-0148ab179',
      label: 'LinkedIn',
      color: 'cyber-purple'
    },
    {
      icon: Mail,
      href: 'mailto:dimplebrar13@gmail.com',
      label: 'Email',
      color: 'cyber-pink'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-cyber-blue/30 text-white relative overflow-hidden">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Zap className="w-10 h-10 text-cyber-blue animate-neon-pulse" />
                <div className="absolute inset-0 w-10 h-10 bg-cyber-blue/20 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="font-cyber font-bold text-2xl cyberpunk-glow">MANPREET SINGH</span>
                <div className="text-cyber-blue font-cyber text-sm">DEVELOPER.EXE</div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed font-display">
              Building innovative quantum web solutions with passion and precision. 
              Always learning, always creating, always pushing the boundaries of what's possible.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 md:text-center">
            <h3 className="font-cyber font-semibold text-lg cyberpunk-glow">QUICK.LINKS</h3>
            <div className="grid grid-cols-2 gap-3">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-white/70 hover:text-cyber-blue transition-colors duration-300 text-left md:text-center font-cyber hover:cyberpunk-glow"
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-6 md:text-right">
            <h3 className="font-cyber font-semibold text-lg cyberpunk-glow">CONNECT.NETWORK</h3>
            <div className="flex space-x-4 md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-12 h-12 bg-black/60 hover:bg-gradient-to-br hover:from-${social.color} hover:to-${social.color}/70 rounded-lg flex items-center justify-center transition-all duration-500 transform hover:-translate-y-1 border border-white/10 hover:border-${social.color}/50`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 animate-neon-pulse" />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-3 text-white/70 hover:text-cyber-blue transition-colors duration-300 group font-cyber"
            >
              <span>BACK.TO.TOP</span>
              <div className="w-8 h-8 border-2 border-current rounded-full flex items-center justify-center group-hover:animate-bounce">
                <ArrowUp className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm font-cyber">
              © {currentYear} MANPREET.SINGH. ALL.RIGHTS.RESERVED.
            </p>
            <div className="flex items-center space-x-2 text-white/60 text-sm font-cyber">
              <span>MADE.WITH</span>
              <Heart className="w-4 h-4 text-cyber-pink animate-pulse" />
              <span>AND</span>
              <Zap className="w-4 h-4 text-cyber-blue animate-neon-pulse" />
              <span>BY.MANPREET.SINGH</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;