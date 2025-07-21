
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

        {/* Current Contracts Section */}
        <motion.div
          className="mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Current Contracts</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our ongoing partnerships with the FAA demonstrate our commitment to advancing aviation technology and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full glass-card border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">SETIS</CardTitle>
                  <p className="text-sm text-muted-foreground font-mono">693KA8-22-D-00020</p>
                  <p className="text-sm text-muted-foreground">Systems Engineering and Technical Innovative Solutions</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 text-sm">
                    The SETIS contract provides the FAA with advanced systems engineering and innovative technical solutions to modernize the National Airspace System (NAS). This includes support for research, system architecture, integration, test and evaluation, and emerging technologies. Our role under SETIS reflects our commitment to delivering forward-thinking, mission-critical engineering services to ensure the safety and efficiency of U.S. aviation.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full glass-card border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">FAA Program Support Services (PSS)</CardTitle>
                  <p className="text-sm text-muted-foreground font-mono">693KA921D00004</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 text-sm">
                    The PSS contract supports the FAA in executing complex program and project management initiatives across its lines of business. Services include strategic planning, financial analysis, acquisition support, and business process improvement. Through this contract, we contribute to the effective oversight and implementation of major FAA programs that advance national aviation priorities.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full glass-card border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">ATEPS II</CardTitle>
                  <p className="text-sm text-muted-foreground font-mono">693KA9-18-D-00012</p>
                  <p className="text-sm text-muted-foreground">Air Traffic Engineering and Program Support II</p>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground/70 text-sm">
                    ATEPS II delivers vital engineering and program management support for air traffic systems and infrastructure. This includes technical analysis, system design, requirements development, and implementation planning. Our work under ATEPS II directly supports the FAA's mission to enhance air traffic operations and ensure the continuous improvement of the air traffic management system.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Services;
