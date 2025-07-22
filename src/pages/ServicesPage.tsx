
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import ParticleCanvas from '../components/ui/particle-canvas';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col"
    >
      <ParticleCanvas />
      <Navbar />
      <main>
        <section className="relative pt-32 pb-20 md:py-40">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: 'url(/src/assets/airplane-banner.jpg)', 
              filter: 'brightness(0.5)'
            }}
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive IT solutions tailored to your business needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/contact"
                className="px-6 py-3 bg-primary text-white rounded-md font-medium inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
        
        <Services />
        
        {/* NAICS Codes Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">NAICS Codes</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                Our services align with the following North American Industry Classification System codes
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.div
                  className="p-6 rounded-lg bg-card border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.167, delay: 0.033 }}
                >
                  <div className="text-2xl font-bold text-primary mb-2">541330</div>
                  <div className="font-medium">Engineering Services</div>
                </motion.div>
                
                <motion.div
                  className="p-6 rounded-lg bg-card border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.167, delay: 0.067 }}
                >
                  <div className="text-2xl font-bold text-primary mb-2">488190</div>
                  <div className="font-medium">Other Support Activities For Air Transportation</div>
                </motion.div>
                
                <motion.div
                  className="p-6 rounded-lg bg-card border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.167, delay: 0.1 }}
                >
                  <div className="text-2xl font-bold text-primary mb-2">541512</div>
                  <div className="font-medium">Computer Systems Design Services</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default ServicesPage;
