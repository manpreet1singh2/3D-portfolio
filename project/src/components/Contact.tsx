import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle, Zap, MessageSquare } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentiment, setSentiment] = useState<'neutral' | 'positive' | 'negative'>('neutral');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Simple sentiment analysis simulation
  const analyzeSentiment = (text: string) => {
    const positiveWords = ['great', 'awesome', 'excellent', 'amazing', 'love', 'fantastic', 'wonderful', 'brilliant'];
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'horrible', 'worst', 'disappointing'];
    
    const words = text.toLowerCase().split(' ');
    const positiveCount = words.filter(word => positiveWords.includes(word)).length;
    const negativeCount = words.filter(word => negativeWords.includes(word)).length;
    
    if (positiveCount > negativeCount) return 'positive';
    if (negativeCount > positiveCount) return 'negative';
    return 'neutral';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus('sending');
    
    // Simulate form submission with AI processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSentiment('neutral');
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time sentiment analysis for message field
    if (name === 'message') {
      setSentiment(analyzeSentiment(value));
    }
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dimplebrar13@gmail.com',
      href: 'mailto:dimplebrar13@gmail.com',
      color: 'cyber-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-11-1518384',
      href: 'tel:+911115183844',
      color: 'cyber-purple'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chandigarh, India',
      href: '#',
      color: 'cyber-pink'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/manpreet1singh2',
      color: 'cyber-blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/manpreet-singh-0148ab179',
      color: 'cyber-purple'
    }
  ];

  const getSentimentColor = () => {
    switch (sentiment) {
      case 'positive': return 'cyber-green';
      case 'negative': return 'cyber-pink';
      default: return 'cyber-blue';
    }
  };

  const getSentimentText = () => {
    switch (sentiment) {
      case 'positive': return 'POSITIVE.TONE.DETECTED';
      case 'negative': return 'NEGATIVE.TONE.DETECTED';
      default: return 'NEUTRAL.TONE.DETECTED';
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black via-neutral-900 to-black relative overflow-hidden">
      {/* Cyber grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className="space-y-16">
          {/* Section Header */}
          <div className={`text-center space-y-6 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              <h2 className="text-5xl lg:text-6xl font-cyber font-bold text-white cyberpunk-glow">
                GET IN <span className="holographic">TOUCH.EXE</span>
              </h2>
              <div className="absolute -inset-4 bg-cyber-pink/5 rounded-lg blur-xl"></div>
            </div>
            <p className="text-xl text-cyber-pink max-w-3xl mx-auto font-cyber">
              Ready to bring your ideas to life? Let's discuss your next quantum project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`space-y-8 ${inView ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                {/* Animated border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-holographic"></div>
                
                <h3 className="text-2xl font-cyber font-bold text-white mb-8 cyberpunk-glow">
                  LET'S.CONNECT
                </h3>
                <p className="text-white/80 leading-relaxed mb-12 font-display">
                  I'm always open to discussing new opportunities, innovative projects, or just having a chat about 
                  next-generation technology and quantum development. Feel free to reach out through the neural network!
                </p>

                {/* Contact Info */}
                <div className="space-y-6 mb-12">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className={`group flex items-center space-x-6 p-6 bg-black/40 rounded-xl border border-white/10 hover:border-${item.color}/50 transition-all duration-500 transform hover:-translate-y-1 ${
                        item.href === '#' ? 'cursor-default' : ''
                      }`}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color}/70 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-neon-pulse`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <p className="font-cyber font-semibold text-white text-lg">{item.label}</p>
                        <p className={`text-${item.color} group-hover:text-white transition-colors duration-300 font-cyber`}>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-cyber font-semibold text-white mb-6 text-lg cyberpunk-glow">FOLLOW.ME</h4>
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group w-16 h-16 bg-gradient-to-br from-${social.color} to-${social.color}/70 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:scale-110 animate-neon-pulse`}
                      >
                        <social.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI-Powered Contact Form */}
            <div className={`${inView ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="bg-black/60 backdrop-blur-xl p-8 rounded-3xl border border-white/10 relative overflow-hidden">
                {/* Animated border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-blue animate-holographic"></div>
                
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyber-pink to-cyber-purple rounded-xl flex items-center justify-center animate-neon-pulse">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-cyber font-bold text-white cyberpunk-glow">
                      SEND.MESSAGE
                    </h3>
                    <div className="text-cyber-pink font-cyber text-sm">AI.POWERED.FORM</div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-cyber font-medium text-white/90 mb-3">
                        FULL.NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 bg-black/40 text-white placeholder-white/50 font-cyber ${
                          errors.name
                            ? 'border-cyber-pink focus:border-cyber-pink focus:ring-cyber-pink/20'
                            : 'border-white/20 focus:border-cyber-blue focus:ring-cyber-blue/20'
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-cyber-pink flex items-center font-cyber">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-cyber font-medium text-white/90 mb-3">
                        EMAIL.ADDRESS *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 bg-black/40 text-white placeholder-white/50 font-cyber ${
                          errors.email
                            ? 'border-cyber-pink focus:border-cyber-pink focus:ring-cyber-pink/20'
                            : 'border-white/20 focus:border-cyber-blue focus:ring-cyber-blue/20'
                        }`}
                        placeholder="your.email@quantum.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-cyber-pink flex items-center font-cyber">
                          <AlertCircle className="w-4 h-4 mr-2" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-cyber font-medium text-white/90 mb-3">
                      SUBJECT *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 bg-black/40 text-white placeholder-white/50 font-cyber ${
                        errors.subject
                          ? 'border-cyber-pink focus:border-cyber-pink focus:ring-cyber-pink/20'
                          : 'border-white/20 focus:border-cyber-blue focus:ring-cyber-blue/20'
                      }`}
                      placeholder="What's this quantum message about?"
                    />
                    {errors.subject && (
                      <p className="mt-2 text-sm text-cyber-pink flex items-center font-cyber">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label htmlFor="message" className="block text-sm font-cyber font-medium text-white/90">
                        MESSAGE *
                      </label>
                      {formData.message && (
                        <div className={`text-xs font-cyber px-3 py-1 rounded-full bg-${getSentimentColor()}/20 text-${getSentimentColor()} border border-${getSentimentColor()}/30`}>
                          {getSentimentText()}
                        </div>
                      )}
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 resize-none bg-black/40 text-white placeholder-white/50 font-cyber ${
                        errors.message
                          ? 'border-cyber-pink focus:border-cyber-pink focus:ring-cyber-pink/20'
                          : 'border-white/20 focus:border-cyber-blue focus:ring-cyber-blue/20'
                      }`}
                      placeholder="Tell me about your quantum project or neural idea..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-2 text-sm text-cyber-pink flex items-center font-cyber">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full py-5 px-8 rounded-xl font-cyber font-bold text-lg transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center space-x-3 relative overflow-hidden ${
                      formStatus === 'sending'
                        ? 'bg-white/20 cursor-not-allowed'
                        : formStatus === 'success'
                        ? 'bg-gradient-to-r from-cyber-green to-cyber-green/70'
                        : formStatus === 'error'
                        ? 'bg-gradient-to-r from-cyber-pink to-cyber-pink/70'
                        : 'bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink'
                    } text-white`}
                  >
                    {formStatus === 'sending' && (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>TRANSMITTING...</span>
                      </>
                    )}
                    {formStatus === 'success' && (
                      <>
                        <CheckCircle className="w-6 h-6" />
                        <span>MESSAGE.TRANSMITTED!</span>
                      </>
                    )}
                    {formStatus === 'error' && (
                      <>
                        <AlertCircle className="w-6 h-6" />
                        <span>TRANSMISSION.FAILED</span>
                      </>
                    )}
                    {formStatus === 'idle' && (
                      <>
                        <Send className="w-6 h-6" />
                        <span>SEND.MESSAGE</span>
                      </>
                    )}
                    
                    {formStatus === 'idle' && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink to-cyber-yellow opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;