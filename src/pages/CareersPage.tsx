
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ui/particle-canvas';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const CareersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop)', 
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
              Careers
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Interested? We can't wait to meet you! Come apply and join the team.
            </motion.p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-6">Openings</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We are continuously looking for new talent and are happy to announce some open positions. 
                Please include your desired position in the subject line and attach your resume.
              </p>
              <p className="text-muted-foreground mt-2">
                P.S. – Let us know how you heard about us!
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="glass-card border-none shadow-xl mb-12">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center">Check back in soon!</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  <p>There are currently no job openings at this time.</p>
                  <p className="mt-4">We're always interested in connecting with talented professionals. Feel free to send your resume to careers@eyrienetworks.com for future opportunities.</p>
                </CardContent>
              </Card>

              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Why Work With Us?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Dynamic Environment</h4>
                      <p className="text-muted-foreground">Work in a fast-paced, innovative environment where your ideas are valued and implemented.</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Growth Opportunities</h4>
                      <p className="text-muted-foreground">Continuous learning and advancement opportunities to help you grow professionally.</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Work-Life Balance</h4>
                      <p className="text-muted-foreground">We value your personal time and promote a healthy balance between work and life.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Collaborative Culture</h4>
                      <p className="text-muted-foreground">Work with talented professionals in a collaborative and supportive team environment.</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Impactful Work</h4>
                      <p className="text-muted-foreground">Contribute to meaningful projects that make a real difference for our clients.</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-xl">
                      <h4 className="font-bold mb-2">Inclusive Workplace</h4>
                      <p className="text-muted-foreground">We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>
                    </div>
                  </div>
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

export default CareersPage;
