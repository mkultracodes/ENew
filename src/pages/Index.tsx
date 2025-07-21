
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Careers from '../components/Careers';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ui/particle-canvas';

const Index = () => {
  console.log('Index component rendering');
  
  useEffect(() => {
    console.log('Index component mounted');
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col w-full overflow-x-hidden"
      >
        <ParticleCanvas />
        <Navbar />
        <main className="flex-1 w-full">
          <Hero />
          <Services />
          <About />
          <Careers />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
