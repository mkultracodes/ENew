
import { useRef, useEffect, useState } from "react";

type Particle = {
  x: number;
  y: number;
  dirX: number;
  dirY: number;
  size: number;
  speed: number;
  color: string;
  alpha: number;
};

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    let hoverParticles: Particle[] = [];
    
    // Set canvas size to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 15); // More particles
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 3 + 0.5; // Varied sizes
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dirX = Math.random() * 0.4 - 0.2; // Faster movement
        const dirY = Math.random() * 0.4 - 0.2;
        
        // Color variations with primary blue as base
        const colorVariation = Math.floor(Math.random() * 30);
        const color = `rgba(${13 + colorVariation}, ${110 + colorVariation}, ${253 - colorVariation}, ${Math.random() * 0.6 + 0.2})`;
        
        const speed = Math.random() * 0.8 + 0.2;
        const alpha = Math.random() * 0.6 + 0.2;

        particles.push({
          x,
          y,
          dirX,
          dirY,
          size,
          speed,
          color,
          alpha
        });
      }
    };
    
    // Create hover effect particles
    const createHoverParticles = (x: number, y: number) => {
      const count = 8;
      hoverParticles = [];
      
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 / count) * i;
        const speed = 2 + Math.random() * 2;
        
        hoverParticles.push({
          x,
          y,
          dirX: Math.cos(angle) * speed,
          dirY: Math.sin(angle) * speed,
          size: 2 + Math.random() * 3,
          speed,
          color: `rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3})`,
          alpha: 1
        });
      }
    };
    
    // Draw particles on canvas
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw regular particles
      particles.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Apply force toward mouse when hovering
        if (isHovering) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            particle.dirX += (dx / distance) * force * 0.02;
            particle.dirY += (dy / distance) * force * 0.02;
          }
        }
        
        // Add some randomness to movement
        if (Math.random() > 0.97) {
          particle.dirX += (Math.random() - 0.5) * 0.04;
          particle.dirY += (Math.random() - 0.5) * 0.04;
        }
        
        // Dampen velocity over time for natural movement
        particle.dirX *= 0.99;
        particle.dirY *= 0.99;
        
        // Update particle position
        particle.x += particle.dirX * particle.speed;
        particle.y += particle.dirY * particle.speed;
        
        // Boundary check with bounce effect
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.dirX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.dirY *= -1;
        }
      });
      
      // Draw hover particles
      hoverParticles = hoverParticles.filter(particle => {
        particle.alpha -= 0.02; // Fade out
        if (particle.alpha <= 0) return false;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(/[\d\.]+\)$/g, `${particle.alpha})`);
        ctx.fill();
        
        // Update hover particle position
        particle.x += particle.dirX;
        particle.y += particle.dirY;
        particle.dirX *= 0.97; // Slow down
        particle.dirY *= 0.97;
        
        return true;
      });
      
      // Draw connections between particles
      connectParticles();
      
      animationFrameId = window.requestAnimationFrame(draw);
    };
    
    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            ctx.strokeStyle = `rgba(13, 110, 253, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create burst particles on mouse move
      if (Math.random() > 0.92) {
        createHoverParticles(e.clientX, e.clientY);
      }
    };
    
    // Mouse enter/leave handlers
    const handleMouseEnter = () => {
      setIsHovering(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    
    // Initialize
    setCanvasSize();
    createParticles();
    draw();
    
    // Add event listeners
    window.addEventListener("resize", setCanvasSize);
    window.addEventListener("resize", createParticles);
    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseenter", handleMouseEnter);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("resize", createParticles);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseenter", handleMouseEnter);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mousePosition, isHovering]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
    />
  );
};

export default ParticleCanvas;
