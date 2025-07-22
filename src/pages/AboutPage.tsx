import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Server, Database, Code, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ui/particle-canvas';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const competencies = [
    "IT Systems Architecture & Engineering",
    "Design and Deployment of Modern IT Infrastructure", 
    "Legacy System Modernization",
    "Systems Integration & Interoperability",
    "Cloud Migration & Hybrid IT Solutions",
    "Network Design and Optimization"
  ];

  const services = [
    {
      title: "Strategy & Consulting",
      description: "Detailed assessments and carefully-considered strategies to transform enterprise-level data, technology, talent, and culture for a digital-first economy.",
      icon: <LineChart className="h-10 w-10 text-primary" />
    },
    {
      title: "Architecture & Engineering",
      description: "Incorporate technical expertise and innovation to deliver quality solutions for mission-critical, legacy and transformational programs.",
      icon: <Server className="h-10 w-10 text-primary" />
    },
    {
      title: "Targeted Solutions",
      description: "The latest technological tools paired with the most innovative solutions help drive prospects to your acquisition funnel.",
      icon: <Database className="h-10 w-10 text-primary" />
    },
    {
      title: "Custom Development",
      description: "Tailored solutions designed to meet your specific business needs with a focus on efficiency, scalability, and long-term sustainability.",
      icon: <Code className="h-10 w-10 text-primary" />
    }
  ];

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
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:py-40">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)', 
              filter: 'brightness(0.5)'
            }}
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Delivering cutting-edge IT solutions for government and commercial clients
            </motion.h1>
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

        {/* Core Competencies Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Core Competencies</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
                Eyrie Networks delivers high-quality IT services with a focus on the architecture, design, and integration of modern and legacy systems. We help government and commercial clients implement scalable, secure, and future-ready technology solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {competencies.map((competency, index) => (
                  <motion.div
                    key={competency}
                    className="flex items-center gap-3 p-4 rounded-lg bg-card"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeInUp}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Check className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="text-left font-medium">{competency}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We strive to incorporate the appropriate technical expertise, process improvement, and innovation to deliver quality solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.167, delay: 0.167 + index * 0.033 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full glass-card border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-foreground/70 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;