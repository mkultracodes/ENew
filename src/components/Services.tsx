
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Code, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "Strategy & Consulting",
      description: "Detailed assessments and carefully-considered strategies to transform enterprise-level data, technology, talent, and culture for a digital-first economy.",
      icon: <LineChart className="h-10 w-10 text-primary" />,
      link: "/services#strategy"
    },
    {
      title: "Architecture & Engineering",
      description: "Incorporate technical expertise and innovation to deliver quality solutions for mission-critical, legacy and transformational programs.",
      icon: <Server className="h-10 w-10 text-primary" />,
      link: "/services#architecture"
    },
    {
      title: "Targeted Solutions",
      description: "The latest technological tools paired with the most innovative solutions help drive prospects to your acquisition funnel.",
      icon: <Database className="h-10 w-10 text-primary" />,
      link: "/services#solutions"
    },
    {
      title: "Custom Development",
      description: "Tailored solutions designed to meet your specific business needs with a focus on efficiency, scalability, and long-term sustainability.",
      icon: <Code className="h-10 w-10 text-primary" />,
      link: "/services#development"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
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
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full glass-card border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={service.link} 
                    className="text-primary flex items-center gap-1 text-sm font-medium hover:underline"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/services"
            className="px-6 py-3 bg-primary text-white rounded-md font-medium inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            View All Services <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
