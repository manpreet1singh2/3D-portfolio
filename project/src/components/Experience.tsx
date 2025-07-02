import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, ExternalLink, CheckCircle, Zap, Code, Database } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = {
    company: "TryCyfer Technologies",
    role: "Front-End and Back-End Developer Intern",
    period: "October 2024 - December 2024",
    location: "Remote",
    description: "Mastered next-generation web development technologies and contributed to revolutionary web applications, gaining hands-on experience in full-stack development and collaborative quantum software engineering practices.",
    achievements: [
      "Mastered HTML, CSS, Bootstrap, JavaScript, and SQL for responsive neural web development",
      "Built responsive designs optimized for all device configurations and quantum browsers",
      "Contributed to three major web applications: Wheelstovet, mytra.ai, and AP Associate",
      "Collaborated effectively using Git, Jira, and GitHub for version control and project management",
      "Implemented modern UI/UX principles for enhanced user experience and neural interfaces",
      "Developed database solutions and backend integrations with AI optimization"
    ],
    projects: [
      {
        name: "Wheelstovet",
        description: "Next-gen e-commerce platform for automotive parts with neural recommendations",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "SQL"],
        icon: Code,
        color: "cyber-blue"
      },
      {
        name: "mytra.ai",
        description: "AI-driven solution for business optimization and quantum analytics",
        tech: ["React", "JavaScript", "SQL", "AI Integration"],
        icon: Zap,
        color: "cyber-purple"
      },
      {
        name: "AP Associate",
        description: "Business application for process automation and neural management",
        tech: ["HTML", "CSS", "JavaScript", "Database Design"],
        icon: Database,
        color: "cyber-pink"
      }
    ],
    tools: ["Git", "Jira", "GitHub", "VS Code", "MySQL Workbench"],
    skills: ["Team Collaboration", "Agile Development", "Code Review", "Problem Solving"]
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '45px 45px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              <h2 className="text-5xl lg:text-6xl font-cyber font-bold text-white cyberpunk-glow">
                PROFESSIONAL <span className="holographic">EXPERIENCE.LOG</span>
              </h2>
              <div className="absolute -inset-4 bg-cyber-yellow/5 rounded-lg blur-xl"></div>
            </div>
            <p className="text-xl text-cyber-yellow max-w-3xl mx-auto font-cyber">
              Hands-on experience in full-stack development and collaborative quantum software engineering
            </p>
          </div>

          {/* Main Experience Card */}
          <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-gradient-to-br from-cyber-yellow/10 to-cyber-orange/10 rounded-3xl p-8 border border-cyber-yellow/30 overflow-hidden">
              {/* Animated border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-yellow via-cyber-orange to-cyber-pink animate-holographic"></div>
              
              {/* Company Info Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
                <div className="flex items-start space-x-6 mb-6 lg:mb-0">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyber-yellow to-cyber-orange rounded-2xl flex items-center justify-center animate-neon-pulse">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 border-2 border-cyber-yellow/50 rounded-2xl animate-ping"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-cyber font-bold text-white cyberpunk-glow">
                      {experience.role}
                    </h3>
                    <p className="text-2xl text-cyber-yellow font-cyber font-semibold">
                      {experience.company}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 mt-3 text-white/80 font-cyber">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-cyber-yellow animate-neon-pulse" />
                        <span>{experience.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                        <MapPin className="w-5 h-5 text-cyber-yellow animate-neon-pulse" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-cyber-green/20 text-cyber-green px-6 py-3 rounded-full text-sm font-cyber font-medium border border-cyber-green/30 animate-neon-pulse">
                  MISSION.COMPLETED
                </div>
              </div>

              {/* Description */}
              <div className="mb-12">
                <p className="text-white/90 leading-relaxed text-lg font-display">
                  {experience.description}
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-12">
                <h4 className="text-2xl font-cyber font-bold text-white mb-8 flex items-center cyberpunk-glow">
                  <CheckCircle className="w-6 h-6 text-cyber-green mr-3 animate-neon-pulse" />
                  KEY.ACHIEVEMENTS
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {experience.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 p-6 bg-black/40 rounded-xl border border-white/10 hover:border-cyber-green/50 transition-all duration-500 group ${
                        inView ? 'animate-slide-in-left' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                    >
                      <CheckCircle className="w-6 h-6 text-cyber-green flex-shrink-0 mt-0.5 animate-neon-pulse" />
                      <p className="text-white/90 text-sm leading-relaxed font-display group-hover:text-white transition-colors duration-300">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Worked On */}
              <div className="mb-12">
                <h4 className="text-2xl font-cyber font-bold text-white mb-8 cyberpunk-glow">
                  PROJECTS.CONTRIBUTED
                </h4>
                <div className="grid md:grid-cols-3 gap-8">
                  {experience.projects.map((project, index) => (
                    <div
                      key={index}
                      className={`bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-${project.color}/50 transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden ${
                        inView ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      {/* Project icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-br from-${project.color} to-${project.color}/70 rounded-xl flex items-center justify-center animate-neon-pulse`}>
                          <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <ExternalLink className={`w-5 h-5 text-${project.color} hover:text-white transition-colors cursor-pointer group-hover:rotate-45 transition-transform duration-300`} />
                      </div>
                      
                      <h5 className="font-cyber font-semibold text-white text-lg mb-3 group-hover:text-cyber-blue transition-colors duration-300">
                        {project.name}
                      </h5>
                      <p className="text-white/80 text-sm mb-6 leading-relaxed font-display">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 bg-${project.color}/10 text-${project.color} rounded-full text-xs font-cyber font-medium border border-${project.color}/30`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Hover effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Skills */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-cyber font-bold text-white mb-6 cyberpunk-glow">
                    TOOLS.TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-cyber-blue/10 text-cyber-blue rounded-full text-sm font-cyber font-medium border border-cyber-blue/30 hover:border-cyber-blue/60 transition-all duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-cyber font-bold text-white mb-6 cyberpunk-glow">
                    PROFESSIONAL.SKILLS
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-cyber-purple/10 text-cyber-purple rounded-full text-sm font-cyber font-medium border border-cyber-purple/30 hover:border-cyber-purple/60 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="bg-black/60 backdrop-blur-xl p-12 rounded-3xl border border-white/10 relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-holographic"></div>
              
              <h3 className="text-3xl font-cyber font-bold text-white mb-6 cyberpunk-glow">
                READY.FOR.NEW.CHALLENGES
              </h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto font-display leading-relaxed">
                With solid experience in full-stack development and a passion for quantum learning, 
                I'm excited to contribute to innovative projects and grow with forward-thinking teams 
                in the next-generation tech ecosystem.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white px-12 py-5 rounded-full font-cyber font-bold text-lg transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <Zap className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>LET'S WORK TOGETHER</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;