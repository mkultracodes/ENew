import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, GraduationCap, DollarSign } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ui/particle-canvas';

const OpenPositionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

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
              backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop)', 
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
              Open Positions
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join our team and help shape the future of technology.
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

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore exciting opportunities to grow your career with us.
              </p>
            </motion.div>

            {/* Job Listing */}
            <motion.div
              className="glass-card p-8 rounded-xl max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Hardware & Test Engineer (Junior)</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} />
                    <span>Atlantic City, NJ</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock size={16} />
                    <span>Full-time</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap size={16} />
                    <span>0-5 years</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign size={16} />
                    <span>$75,000 – $92,000</span>
                  </div>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg mb-6">
                  <p className="text-sm font-medium mb-2">Requirements:</p>
                  <p className="text-sm text-muted-foreground">B.A/B.S. in Systems/Software/Electronics Engineering</p>
                </div>
              </div>

              <div className="space-y-6 text-left">
                <div>
                  <p className="text-muted-foreground leading-relaxed">
                    We're looking for a hands-on Hardware/Test Engineer to help us design, build, and test reliable hardware systems. You'll be working closely with our hardware, firmware, and systems teams to make sure everything we build performs as expected under real-world conditions. If you enjoy solving practical engineering problems, digging into schematics, and fine-tuning test setups, this might be a good fit.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">What You'll Be Doing</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Designing and building test setups for integrated enterprise systems</li>
                    <li>• Running electrical, thermal, and functional tests to verify hardware performance and reliability</li>
                    <li>• Writing test plans and documenting procedures clearly</li>
                    <li>• Debugging and troubleshooting issues using tools</li>
                    <li>• Working with the design team to provide feedback from testing and suggest improvements</li>
                    <li>• Automating repetitive tests using Python or other scripting tools</li>
                    <li>• Helping define and improve test coverage across hardware releases</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">What We're Looking For</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• A background in Electrical or Computer Engineering (or equivalent practical experience)</li>
                    <li>• Solid understanding of hardware fundamentals — digital/analog signals, power, timing, etc.</li>
                    <li>• Some experience with scripting or automation (Python is a plus)</li>
                    <li>• Comfortable reading schematics and interpreting datasheets</li>
                    <li>• Strong attention to detail and a systematic approach to testing and documentation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Nice to Have</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Prior experience with the FAA</li>
                    <li>• Familiarity with embedded systems or firmware</li>
                    <li>• Hands-on experience with environmental testing (vibration, thermal cycling, etc.)</li>
                    <li>• Experience building or supporting production test stations</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="px-6 py-3 bg-primary text-white rounded-md font-medium inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  >
                    Apply Now
                    <ArrowRight size={16} />
                  </Link>
                  <Link 
                    to="/contact"
                    className="px-6 py-3 border border-border rounded-md font-medium inline-flex items-center justify-center gap-2 hover:bg-muted/50 transition-all"
                  >
                    Ask Questions
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default OpenPositionsPage;