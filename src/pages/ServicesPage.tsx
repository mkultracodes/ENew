
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ui/particle-canvas';
import { Server, Database, Code, LineChart } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      id: "strategy",
      title: "Strategy & Consulting",
      description: "Detailed assessments and carefully-considered strategies to transform enterprise-level data, technology, talent, and culture for a digital-first economy.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      details: [
        "Concept of Operations",
        "Enterprise Technology",
        "Cloud Migrations",
        "Customer Experience",
        "Data & Analytics"
      ]
    },
    {
      id: "architecture",
      title: "Architecture & Engineering",
      description: "Incorporate technical expertise and innovation to deliver quality solutions for mission-critical, legacy and transformational programs for the Federal government.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      icon: <Server className="h-10 w-10 text-primary" />,
      details: [
        "Enterprise Architecture",
        "Requirements Development",
        "Systems Integration & Implementation",
        "Service Oriented Architecture",
        "Cloud Deployments & Security",
        "Technical Writing & Editing"
      ]
    },
    {
      id: "solutions",
      title: "Targeted Solutions",
      description: "The latest technological tools paired with the most innovative solutions help drive prospects to your acquisition funnel.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      icon: <Database className="h-10 w-10 text-primary" />,
      details: [
        "Website Development",
        "Software Development",
        "Custom Implementations",
        "Mobile Solutions",
        "Emerging Technologies",
        "Digital Delivery"
      ]
    },
    {
      id: "development",
      title: "Custom Development",
      description: "Tailored solutions designed to meet your specific business needs with a focus on efficiency, scalability, and long-term sustainability.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop",
      icon: <Code className="h-10 w-10 text-primary" />,
      details: [
        "Full-stack Development",
        "API Integration",
        "Legacy System Modernization",
        "Database Design & Optimization",
        "DevOps Implementation",
        "Quality Assurance"
      ]
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
        <section className="relative pt-32 pb-20 md:py-40">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop)', 
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
              className="text-xl text-white/90 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our expertise in quality IT services enables us to help you and your business reach peak performance.
            </motion.p>
          </div>
        </section>
        
        <section className="py-24">
          <div className="container mx-auto px-4">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`mb-24 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row gap-12 items-center`}
              >
                <motion.div 
                  className="md:w-1/2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-xl overflow-hidden shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="md:w-1/2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    {service.icon}
                    <h2 className="text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <div className="glass-card p-6 rounded-xl">
                    <h3 className="text-xl font-bold mb-4">What We Offer</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="bg-primary/10 p-1 rounded-full mt-1">
                            <svg className="h-3 w-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default ServicesPage;
