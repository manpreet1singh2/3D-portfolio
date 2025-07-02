import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Star, Filter, Zap, Code, Database } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: "MoneyDouble - Smart Financial Calculator",
      description: "A futuristic financial calculator that computes investment doubling time using the Rule of 72, featuring real-time visualizations and an immersive cyberpunk UI deployed on Vercel.",
      longDescription: "MoneyDouble revolutionizes personal finance planning with cutting-edge calculations and stunning visual feedback. Built with modern JavaScript and advanced CSS animations, it features dynamic computations, holographic displays, and smooth micro-interactions that make financial planning an engaging experience.",
      tech: ["HTML", "CSS", "JavaScript", "Vercel", "WebGL"],
      category: "Web Development",
      image: "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800",
      links: {
        live: "#",
        github: "https://github.com/manpreet1singh2",
        vercel: "#"
      },
      featured: true,
      status: "Completed",
      icon: Zap,
      color: "cyber-blue"
    },
    {
      id: 2,
      title: "E-commerce Website UI Prototype",
      description: "A next-generation e-commerce UI prototype with cyberpunk aesthetics, featuring holographic product cards, neural navigation systems, and quantum shopping cart layouts.",
      longDescription: "This revolutionary e-commerce prototype showcases the future of online shopping with immersive 3D product displays, AI-powered recommendations, and seamless user interactions. Built with accessibility and performance in mind, optimized for all device configurations.",
      tech: ["HTML", "Tailwind CSS", "Three.js", "GSAP"],
      category: "UI/UX",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      links: {
        live: "#",
        github: "https://github.com/manpreet1singh2"
      },
      featured: false,
      status: "Completed",
      icon: Code,
      color: "cyber-purple"
    },
    {
      id: 3,
      title: "Gyaan Glitch - Educational Blog Platform",
      description: "An AI-powered educational blog platform with neural search capabilities, quantum content delivery, and immersive knowledge visualization systems.",
      longDescription: "Gyaan Glitch represents the future of educational content delivery with advanced search algorithms, personalized learning paths, and interactive knowledge graphs. Features include real-time collaboration, AI content curation, and adaptive learning systems.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "AI"],
      category: "Web Development",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      links: {
        live: "#",
        github: "https://github.com/manpreet1singh2"
      },
      featured: false,
      status: "Completed",
      icon: Database,
      color: "cyber-pink"
    }
  ];

  const categories = ['All', 'Web Development', 'UI/UX', 'Machine Learning'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = projects.find(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              <h2 className="text-5xl lg:text-6xl font-cyber font-bold text-white cyberpunk-glow">
                FEATURED <span className="holographic">PROJECTS.EXE</span>
              </h2>
              <div className="absolute -inset-4 bg-cyber-purple/5 rounded-lg blur-xl"></div>
            </div>
            <p className="text-xl text-cyber-purple max-w-3xl mx-auto font-cyber">
              Innovative solutions showcasing next-generation development and creative problem-solving
            </p>
          </div>

          {/* Featured Project Holographic Display */}
          {featuredProject && (
            <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 rounded-3xl p-8 border border-cyber-blue/30 overflow-hidden">
                {/* Animated border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-holographic"></div>
                
                <div className="absolute top-6 right-6">
                  <div className="flex items-center space-x-2 bg-cyber-yellow/20 text-cyber-yellow px-4 py-2 rounded-full text-sm font-cyber font-medium border border-cyber-yellow/30 animate-neon-pulse">
                    <Star className="w-4 h-4" />
                    <span>FEATURED</span>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br from-${featuredProject.color} to-${featuredProject.color}/70 rounded-xl flex items-center justify-center animate-neon-pulse`}>
                          <featuredProject.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-cyber font-bold text-white cyberpunk-glow">
                            {featuredProject.title}
                          </h3>
                          <div className="text-cyber-blue font-cyber text-sm">SYSTEM.ACTIVE</div>
                        </div>
                      </div>
                      <p className="text-white/90 leading-relaxed font-display">
                        {featuredProject.longDescription}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {featuredProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-cyber-blue/10 text-cyber-blue rounded-full text-sm font-cyber font-medium border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-6">
                      {featuredProject.links.live && (
                        <button className="group relative bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white px-8 py-4 rounded-full font-cyber font-bold transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                          <span className="relative z-10 flex items-center space-x-3">
                            <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
                            <span>LIVE DEMO</span>
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </button>
                      )}
                      {featuredProject.links.github && (
                        <button className="group border-2 border-cyber-blue hover:border-cyber-purple text-cyber-blue hover:text-cyber-purple px-8 py-4 rounded-full font-cyber font-bold transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden">
                          <span className="relative z-10 flex items-center space-x-3">
                            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                            <span>SOURCE CODE</span>
                          </span>
                          <div className="absolute inset-0 bg-cyber-purple/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-3xl blur-2xl animate-pulse"></div>
                    <div className="relative overflow-hidden rounded-3xl border border-cyber-blue/30">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-blue/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-cyber-green/20 text-cyber-green px-3 py-1 rounded-full text-xs font-cyber font-medium border border-cyber-green/30">
                        ONLINE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filter System */}
          <div className={`flex flex-wrap justify-center gap-4 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-4 rounded-full font-cyber font-bold transition-all duration-500 transform hover:-translate-y-1 flex items-center space-x-3 relative overflow-hidden ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyber-purple to-cyber-pink text-white'
                    : 'bg-black/40 text-white/80 border border-cyber-purple/30 hover:border-cyber-purple/60'
                }`}
              >
                <Filter className="w-5 h-5" />
                <span>{category}</span>
                {activeFilter === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-yellow opacity-30 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <div
                key={project.id}
                className={`group bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-cyber-blue/50 transition-all duration-500 transform hover:-translate-y-2 relative ${
                  inView ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {/* Animated border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${project.color} via-cyber-purple to-cyber-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-cyber font-medium ${
                      project.status === 'Completed'
                        ? 'bg-cyber-green/20 text-cyber-green border border-cyber-green/30'
                        : 'bg-cyber-yellow/20 text-cyber-yellow border border-cyber-yellow/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-8 h-8 bg-gradient-to-br from-${project.color} to-${project.color}/70 rounded-lg flex items-center justify-center`}>
                      <project.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-cyber font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className={`text-xs text-${project.color} font-cyber font-medium bg-${project.color}/10 px-2 py-1 rounded-full border border-${project.color}/30`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed font-display">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-white/70 rounded text-xs font-cyber font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 pt-2">
                    {project.links.live && (
                      <button className={`flex-1 bg-gradient-to-r from-${project.color} to-${project.color}/70 hover:from-${project.color}/70 hover:to-${project.color} text-white text-center py-3 rounded-lg font-cyber font-semibold transition-all duration-300 transform hover:-translate-y-1 text-sm flex items-center justify-center space-x-2`}>
                        <ExternalLink className="w-4 h-4" />
                        <span>LIVE</span>
                      </button>
                    )}
                    {project.links.github && (
                      <button className="flex-1 border border-white/20 hover:border-cyber-blue/50 text-white/80 hover:text-cyber-blue text-center py-3 rounded-lg font-cyber font-semibold transition-all duration-300 transform hover:-translate-y-1 text-sm flex items-center justify-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>CODE</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;