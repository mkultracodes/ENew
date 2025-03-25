
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
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
    <section id="hero" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=2070&auto=format&fit=crop)', 
          filter: 'brightness(0.5)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Our Business Is Helping You Grow Yours
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Our mission at Eyrie Networks is to provide customers with high quality IT Services that include architecture, design, and integration of new or modernization of legacy IT solutions.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/services"
                className="px-6 py-3 bg-primary text-white rounded-md font-medium inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Our Services
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-md font-medium hover:bg-white/20 transition-all"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
