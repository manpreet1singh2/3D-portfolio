import React from 'react';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Download, MapPin, Languages, Zap, Brain, Code2 } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor's in Computer Science Engineering",
      institution: "Chandigarh University",
      period: "2022 - Present",
      status: "Pursuing",
      icon: Brain,
    },
    {
      degree: "Master Diploma in Computer Information & System Management",
      institution: "Excel Net Computers",
      period: "2021 - 2022",
      status: "Completed",
      icon: Code2,
    },
  ];

  const achievements = [
    {
      title: "Silver Medal - Software Testing",
      organization: "NPTEL",
      year: "2024",
      color: "cyber-blue",
    },
    {
      title: "Silver Medal - Data Mining",
      organization: "NPTEL", 
      year: "2024",
      color: "cyber-purple",
    },
    {
      title: "HTML, CSS, and JavaScript Certification",
      organization: "Coursera",
      year: "2023",
      color: "cyber-pink",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              <h2 className="text-5xl lg:text-6xl font-cyber font-bold text-white cyberpunk-glow">
                ABOUT <span className="holographic">ME.EXE</span>
              </h2>
              <div className="absolute -inset-4 bg-cyber-blue/5 rounded-lg blur-xl"></div>
            </div>
            <p className="text-xl text-cyber-blue max-w-3xl mx-auto font-cyber">
              Passionate about creating innovative solutions through advanced technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Section */}
            <div className={`space-y-8 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-cyber-blue/30 overflow-hidden">
                  {/* Animated border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-holographic"></div>
                  
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center animate-neon-pulse">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute inset-0 w-20 h-20 border-2 border-cyber-blue/50 rounded-full animate-ping"></div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-cyber font-bold text-white cyberpunk-glow">MANPREET SINGH</h3>
                      <p className="text-cyber-blue font-cyber font-medium text-lg">Full Stack Developer</p>
                      <div className="text-cyber-purple font-cyber text-sm">SYSTEM.ONLINE</div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-white/90 leading-relaxed font-display">
                      I'm Manpreet Singh, a Computer Science Engineering student at Chandigarh University, 
                      driven by a passion for solving complex problems with <span className="text-cyber-blue font-semibold">cutting-edge technology</span>. 
                      From building responsive web applications at TryCyfer Technologies to mastering 
                      <span className="text-cyber-purple font-semibold"> machine learning algorithms</span>, 
                      I blend technical prowess with creative innovation.
                    </p>
                    
                    <p className="text-white/90 leading-relaxed font-display">
                      Fluent in English, Hindi, and Punjabi, I combine technical expertise with excellent 
                      communication to drive innovation and create <span className="text-cyber-pink font-semibold">meaningful solutions</span> 
                      that push the boundaries of what's possible in the digital realm.
                    </p>
                  </div>

                  {/* Quick Info with cyber styling */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                    <div className="flex items-center space-x-3 p-3 bg-cyber-blue/10 rounded-lg border border-cyber-blue/20">
                      <MapPin className="w-5 h-5 text-cyber-blue animate-neon-pulse" />
                      <span className="text-white/90 font-cyber">Chandigarh, India</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-cyber-purple/10 rounded-lg border border-cyber-purple/20">
                      <Languages className="w-5 h-5 text-cyber-purple animate-neon-pulse" />
                      <span className="text-white/90 font-cyber">EN | HI | PU</span>
                    </div>
                  </div>

                  <button className="group relative bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink text-white px-8 py-4 rounded-full font-cyber font-bold transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
                    <span className="relative z-10 flex items-center space-x-3">
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      <span>DOWNLOAD CV</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Education & Achievements */}
            <div className={`space-y-8 ${inView ? 'animate-slide-in-right' : 'opacity-0'}`}>
              {/* Education Timeline */}
              <div className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-cyber-purple/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-purple via-cyber-pink to-cyber-blue animate-holographic"></div>
                
                <h3 className="text-2xl font-cyber font-bold text-white mb-8 flex items-center cyberpunk-glow">
                  <GraduationCap className="w-7 h-7 text-cyber-purple mr-3 animate-neon-pulse" />
                  EDUCATION.LOG
                </h3>
                
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-cyber-purple/50">
                      <div className="absolute w-6 h-6 bg-cyber-purple rounded-full -left-3 top-1 animate-neon-pulse flex items-center justify-center">
                        <edu.icon className="w-3 h-3 text-white" />
                      </div>
                      <div className="space-y-2 bg-cyber-purple/5 p-4 rounded-lg border border-cyber-purple/20">
                        <h4 className="font-cyber font-semibold text-white">{edu.degree}</h4>
                        <p className="text-cyber-purple font-cyber font-medium">{edu.institution}</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-white/70 font-cyber">{edu.period}</p>
                          <span className={`px-3 py-1 rounded-full text-xs font-cyber font-medium ${
                            edu.status === 'Pursuing' 
                              ? 'bg-cyber-yellow/20 text-cyber-yellow border border-cyber-yellow/30'
                              : 'bg-cyber-green/20 text-cyber-green border border-cyber-green/30'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-cyber-pink/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-pink via-cyber-yellow to-cyber-green animate-holographic"></div>
                
                <h3 className="text-2xl font-cyber font-bold text-white mb-8 flex items-center cyberpunk-glow">
                  <Award className="w-7 h-7 text-cyber-pink mr-3 animate-neon-pulse" />
                  ACHIEVEMENTS.DB
                </h3>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`flex items-start space-x-4 p-6 bg-${achievement.color}/5 rounded-xl border border-${achievement.color}/20 hover:border-${achievement.color}/40 transition-all duration-300 group`}>
                      <div className={`w-12 h-12 bg-gradient-to-br from-${achievement.color} to-${achievement.color}/70 rounded-full flex items-center justify-center flex-shrink-0 animate-neon-pulse`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-cyber font-semibold text-white group-hover:text-cyber-blue transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <p className="text-white/70 text-sm font-cyber">{achievement.organization}</p>
                        <p className={`text-${achievement.color} text-sm font-cyber font-medium`}>
                          {achievement.year}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;