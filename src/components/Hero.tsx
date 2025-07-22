
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero = () => {
  const controls = useAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();
  
  const images = [
    'https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  ];

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(slideInterval);
    };
  }, [controls, images.length]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="hero" 
      className={`relative flex items-center overflow-hidden ${
        isMobile ? 'min-h-[100svh] py-24' : 'h-screen'
      }`}
    >
      {/* Dynamic background slider */}
      {images.map((image, index) => (
        <motion.div 
          key={index}
          className="absolute inset-0 bg-cover bg-center z-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1.05 : 1
          }}
          transition={{ 
            opacity: { duration: 1.5 },
            scale: { duration: 8 }
          }}
          style={{ 
            backgroundImage: `url(${image})`, 
            filter: 'brightness(0.4)'
          }}
        />
      ))}
      
      {/* Floating elements that react to mouse position */}
      {!isMobile && (
        <div className="absolute inset-0 z-1 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20 backdrop-blur-sm"
              style={{
                width: 20 + Math.random() * 60,
                height: 20 + Math.random() * 60,
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                x: mousePosition.x * (i % 2 === 0 ? -20 : 20),
                y: mousePosition.y * (i % 3 === 0 ? -20 : 20),
                opacity: 0.4 + Math.random() * 0.6
              }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 50
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            We Build the Systems<br />That Move You Forward
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Eyrie Networks delivers high-quality services with a focus on the architecture, design, and integration of modern and legacy systems. We help government and commercial clients implement scalable, secure, and future-ready technology solutions<br />
            That move you forward.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-y-3 md:gap-y-0 gap-x-3 sm:gap-x-4 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-auto"
            >
              <Link 
                to="/services"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-primary text-white rounded-md font-medium inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all text-sm sm:text-base"
              >
                Our Services
                <ArrowRight size={isMobile ? 14 : 16} />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-auto"
            >
              <Link
                to="/contact"
                className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md font-medium hover:bg-white/20 transition-all text-sm sm:text-base"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated scroll indicator - hidden on very small screens */}
          <motion.div 
            className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center hidden sm:flex"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 1, 0.4], 
              y: [0, 10, 0] 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <span className="text-white/80 text-xs sm:text-sm mb-2">Scroll to explore</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white rounded-full mt-2"
                animate={{ 
                  y: [0, 12, 0] 
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
