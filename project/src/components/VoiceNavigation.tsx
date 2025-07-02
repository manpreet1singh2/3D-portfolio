import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceNavigation = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      setIsSupported(true);
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(command);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onerror = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const handleVoiceCommand = (command: string) => {
    console.log('Voice command:', command);
    
    if (command.includes('home') || command.includes('top')) {
      document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('about')) {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('project') || command.includes('work')) {
      document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('skill')) {
      document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('experience')) {
      document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('contact')) {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleListening = () => {
    if (!recognition) return;

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  if (!isSupported) return null;

  return (
    <button
      onClick={toggleListening}
      className={`fixed bottom-6 right-6 z-50 p-4 backdrop-blur-md rounded-full border transition-all duration-300 group ${
        isListening
          ? 'bg-cyber-green/20 border-cyber-green/60 animate-neon-pulse'
          : 'bg-cyber-blue/10 border-cyber-blue/30 hover:border-cyber-blue/60'
      }`}
      aria-label="Voice navigation"
      style={{
        boxShadow: isListening
          ? '0 0 30px rgba(0, 255, 0, 0.5), inset 0 0 30px rgba(0, 255, 0, 0.1)'
          : '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)'
      }}
    >
      {isListening ? (
        <MicOff className="w-6 h-6 text-cyber-green animate-pulse" />
      ) : (
        <Mic className="w-6 h-6 text-cyber-blue group-hover:scale-110 transition-transform duration-300" />
      )}
    </button>
  );
};

export default VoiceNavigation;