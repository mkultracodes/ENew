
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingImages = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const images = [
    '/images/tech1.webp',
    '/images/tech2.webp',
    '/images/tech3.webp',
    '/images/tech4.webp',
    '/images/tech5.webp',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop',
  ];
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5, // Normalized to -0.5 to 0.5
        y: e.clientY / window.innerHeight - 0.5
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Function to generate random initial positions
  const getRandomPosition = (index: number) => {
    const radius = 25 + Math.random() * 20; // Distance from center
    const angle = (index / images.length) * Math.PI * 2; // Distribute evenly
    
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      scale: 0.7 + Math.random() * 0.6,
      rotation: Math.random() * 20 - 10,
      opacity: 0.7 + Math.random() * 0.3
    };
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {images.map((src, index) => {
        const position = getRandomPosition(index);
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              x: position.x + '%',
              y: position.y + '%',
              opacity: position.opacity,
              scale: position.scale,
              rotate: position.rotation,
            }}
            animate={{
              x: `calc(${position.x}% + ${mousePosition.x * -15}px)`,
              y: `calc(${position.y}% + ${mousePosition.y * -15}px)`,
              rotate: position.rotation + mousePosition.x * 5,
            }}
            transition={{
              type: 'spring',
              damping: 15,
              stiffness: 50
            }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3 + index % 4,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            >
              <img
                src={src}
                alt="Tech illustration"
                className="rounded-lg shadow-lg w-16 md:w-24 lg:w-32 object-cover"
                style={{
                  filter: 'brightness(0.9) contrast(1.1)',
                }}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingImages;
