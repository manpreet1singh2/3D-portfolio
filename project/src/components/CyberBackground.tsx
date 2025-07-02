import React, { useEffect, useRef } from 'react';

const CyberBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: CyberParticle[] = [];
    let connections: Connection[] = [];

    class CyberParticle {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      opacity: number;
      color: string;
      glowIntensity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.speedZ = (Math.random() - 0.5) * 5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.color = this.getRandomCyberColor();
        this.glowIntensity = Math.random() * 20 + 10;
      }

      getRandomCyberColor(): string {
        const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffff00', '#ff6600', '#8b5cf6'];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z += this.speedZ;

        // 3D perspective effect
        const perspective = 1000;
        const scale = perspective / (perspective + this.z);
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.z > 1000) this.z = 0;
        if (this.z < 0) this.z = 1000;

        // Pulsing effect
        this.glowIntensity = 10 + Math.sin(Date.now() * 0.005 + this.x * 0.01) * 10;
      }

      draw() {
        const perspective = 1000;
        const scale = perspective / (perspective + this.z);
        const projectedX = this.x * scale;
        const projectedY = this.y * scale;
        const projectedSize = this.size * scale;

        ctx.save();
        ctx.globalAlpha = this.opacity * scale;
        
        // Create glowing effect
        const gradient = ctx.createRadialGradient(
          projectedX, projectedY, 0,
          projectedX, projectedY, projectedSize * 3
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, this.color + '80');
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedSize * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    class Connection {
      particle1: CyberParticle;
      particle2: CyberParticle;
      opacity: number;

      constructor(p1: CyberParticle, p2: CyberParticle) {
        this.particle1 = p1;
        this.particle2 = p2;
        this.opacity = 0;
      }

      update() {
        const dx = this.particle1.x - this.particle2.x;
        const dy = this.particle1.y - this.particle2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          this.opacity = (150 - distance) / 150 * 0.5;
        } else {
          this.opacity = 0;
        }
      }

      draw() {
        if (this.opacity <= 0) return;

        const perspective = 1000;
        const scale1 = perspective / (perspective + this.particle1.z);
        const scale2 = perspective / (perspective + this.particle2.z);
        
        const x1 = this.particle1.x * scale1;
        const y1 = this.particle1.y * scale1;
        const x2 = this.particle2.x * scale2;
        const y2 = this.particle2.y * scale2;

        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient line
        const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
        gradient.addColorStop(0, this.particle1.color);
        gradient.addColorStop(1, this.particle2.color);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        
        ctx.restore();
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new CyberParticle());
      }
    };

    const createConnections = () => {
      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          connections.push(new Connection(particles[i], particles[j]));
        }
      }
    };

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      connections.forEach(connection => {
        connection.update();
        connection.draw();
      });

      // Add matrix-like digital rain effect
      if (Math.random() < 0.1) {
        ctx.save();
        ctx.fillStyle = '#00ff0040';
        ctx.font = '12px monospace';
        const char = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(char, Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    createConnections();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
      createConnections();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
};

export default CyberBackground;