
import { useRef, useEffect } from "react";

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
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    // Set canvas size to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 20); // Responsive count
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const dirX = Math.random() * 0.2 - 0.1;
        const dirY = Math.random() * 0.2 - 0.1;
        const color = `rgba(66, 153, 225, ${Math.random() * 0.5 + 0.1})`;
        const speed = Math.random() * 0.5 + 0.1;
        const alpha = Math.random() * 0.5 + 0.1;

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
    
    // Draw particles on canvas
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update particle position
        particle.x += particle.dirX * particle.speed;
        particle.y += particle.dirY * particle.speed;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.dirX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.dirY *= -1;
        }
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
            const opacity = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(66, 153, 225, ${opacity * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Initialize
    setCanvasSize();
    createParticles();
    draw();
    
    // Handle resize
    window.addEventListener("resize", () => {
      setCanvasSize();
      createParticles();
    });
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40"
    />
  );
};

export default ParticleCanvas;
