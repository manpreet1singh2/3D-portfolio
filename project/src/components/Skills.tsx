import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Wrench, ChevronRight, Zap, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState('Frontend');
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const skillCategories = {
    Frontend: {
      icon: Code,
      color: 'cyber-blue',
      skills: [
        { name: 'HTML', level: 95, description: 'Semantic markup and accessibility', icon: '🌐' },
        { name: 'CSS', level: 90, description: 'Modern styling and animations', icon: '🎨' },
        { name: 'Tailwind CSS', level: 88, description: 'Utility-first framework', icon: '💨' },
        { name: 'Bootstrap', level: 85, description: 'Responsive component library', icon: '📱' },
        { name: 'JavaScript', level: 87, description: 'ES6+ and DOM manipulation', icon: '⚡' },
        { name: 'React', level: 80, description: 'Component-based architecture', icon: '⚛️' },
      ]
    },
    Backend: {
      icon: Database,
      color: 'cyber-purple',
      skills: [
        { name: 'SQL', level: 85, description: 'Database design and queries', icon: '🗄️' },
        { name: 'MySQL', level: 82, description: 'Relational database management', icon: '🐬' },
        { name: 'AWS', level: 75, description: 'Cloud services and deployment', icon: '☁️' },
      ]
    },
    'Machine Learning': {
      icon: Brain,
      color: 'cyber-pink',
      skills: [
        { name: 'Machine Learning', level: 78, description: 'Algorithms and model training', icon: '🤖' },
        { name: 'Data Mining', level: 80, description: 'Pattern recognition and analysis', icon: '⛏️' },
        { name: 'Google Colab', level: 85, description: 'ML development environment', icon: '📊' },
      ]
    },
    Tools: {
      icon: Wrench,
      color: 'cyber-green',
      skills: [
        { name: 'Git', level: 88, description: 'Version control and collaboration', icon: '🔧' },
        { name: 'GitHub', level: 90, description: 'Repository management', icon: '🐙' },
        { name: 'Figma', level: 75, description: 'UI/UX design and prototyping', icon: '🎯' },
        { name: 'LaTeX', level: 70, description: 'Document preparation system', icon: '📝' },
        { name: 'AI Prompt', level: 85, description: 'AI-assisted development', icon: '🧠' },
      ]
    }
  };

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        const currentSkills = skillCategories[activeTab as keyof typeof skillCategories].skills;
        const skillNames = currentSkills.map(skill => skill.name);
        setAnimatedSkills(skillNames);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [inView, activeTab]);

  const currentCategory = skillCategories[activeTab as keyof typeof skillCategories];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '35px 35px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              <h2 className="text-5xl lg:text-6xl font-cyber font-bold text-white cyberpunk-glow">
                TECHNICAL <span className="holographic">SKILLS.DB</span>
              </h2>
              <div className="absolute -inset-4 bg-cyber-green/5 rounded-lg blur-xl"></div>
            </div>
            <p className="text-xl text-cyber-green max-w-3xl mx-auto font-cyber">
              Comprehensive expertise across next-generation development technologies
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {/* Tab Navigation */}
            <div className={`flex flex-wrap justify-center gap-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {Object.entries(skillCategories).map(([category, data]) => {
                const IconComponent = data.icon;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`group flex items-center space-x-4 px-8 py-5 rounded-2xl font-cyber font-bold transition-all duration-500 transform hover:-translate-y-1 relative overflow-hidden ${
                      activeTab === category
                        ? `bg-gradient-to-r from-${data.color} to-${data.color}/70 text-white`
                        : 'bg-black/40 text-white/80 border border-white/20 hover:border-cyber-blue/50'
                    }`}
                  >
                    <div className={`w-8 h-8 ${activeTab === category ? 'text-white' : `text-${data.color}`} animate-neon-pulse`}>
                      <IconComponent className="w-full h-full" />
                    </div>
                    <span className="text-lg">{category}</span>
                    {activeTab === category && (
                      <>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/20 to-cyber-yellow/20 animate-pulse"></div>
                      </>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Skills Content */}
            <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 relative overflow-hidden">
                {/* Animated border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${currentCategory.color} via-cyber-purple to-cyber-pink animate-holographic`}></div>
                
                <div className="flex items-center space-x-6 mb-12">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${currentCategory.color} to-${currentCategory.color}/70 rounded-2xl flex items-center justify-center animate-neon-pulse`}>
                    <currentCategory.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-cyber font-bold text-white cyberpunk-glow">{activeTab}</h3>
                    <p className="text-white/70 font-cyber">
                      {currentCategory.skills.length} SKILLS.MASTERED
                    </p>
                    <div className={`text-${currentCategory.color} font-cyber text-sm`}>SYSTEM.ACTIVE</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {currentCategory.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`space-y-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-${currentCategory.color}/50 transition-all duration-500 group relative overflow-hidden ${
                        inView ? 'animate-slide-in-left' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                    >
                      {/* Skill header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <h4 className="font-cyber font-semibold text-white text-lg">{skill.name}</h4>
                        </div>
                        <span className={`text-${currentCategory.color} font-cyber font-bold text-xl cyberpunk-glow`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="relative">
                        <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-${currentCategory.color} to-${currentCategory.color}/70 rounded-full transition-all duration-1000 ease-out relative ${
                              animatedSkills.includes(skill.name) ? 'animate-neon-pulse' : ''
                            }`}
                            style={{
                              width: animatedSkills.includes(skill.name) ? `${skill.level}%` : '0%',
                            }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                          <div className={`w-2 h-2 bg-${currentCategory.color} rounded-full animate-ping`}></div>
                        </div>
                      </div>
                      
                      <p className="text-white/70 text-sm leading-relaxed font-display">
                        {skill.description}
                      </p>

                      {/* Hover effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-${currentCategory.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills in Action Demo */}
          <div className={`${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 rounded-3xl p-8 border border-cyber-blue/30 relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-holographic"></div>
              
              <div className="text-center space-y-6 mb-12">
                <h3 className="text-3xl font-cyber font-bold text-white cyberpunk-glow">
                  SKILLS.IN.ACTION
                </h3>
                <p className="text-white/80 font-cyber">
                  Real-world application of next-generation technical expertise
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Code,
                    title: 'Responsive Design',
                    description: 'Mobile-first approach ensuring optimal experience across all quantum devices',
                    color: 'cyber-blue'
                  },
                  {
                    icon: Database,
                    title: 'Data Management',
                    description: 'Efficient database design and optimization for scalable neural applications',
                    color: 'cyber-purple'
                  },
                  {
                    icon: Brain,
                    title: 'Smart Solutions',
                    description: 'Implementing AI and ML algorithms to solve complex dimensional problems',
                    color: 'cyber-pink'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyber-blue/50 transition-all duration-500 group relative overflow-hidden">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color}/70 rounded-xl flex items-center justify-center mb-6 animate-neon-pulse`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-cyber font-semibold text-white mb-3 text-lg">{item.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed font-display">
                      {item.description}
                    </p>
                    <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;