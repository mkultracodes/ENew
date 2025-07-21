
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Code, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

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

  const contracts = [
    {
      title: "Systems Engineering and Technical Innovative Solutions (SETIS)",
      contractNumber: "693KA8-22-D-00020",
      description: "The SETIS contract provides the FAA with advanced systems engineering and innovative technical solutions to modernize the National Airspace System (NAS). This includes support for research, system architecture, integration, test and evaluation, and emerging technologies. Our role under SETIS reflects our commitment to delivering forward-thinking, mission-critical engineering services to ensure the safety and efficiency of U.S. aviation.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Program Support Services (PSS)",
      contractNumber: "693KA921D00004",
      description: "The PSS contract supports the FAA in executing complex program and project management initiatives across its lines of business. Services include strategic planning, financial analysis, acquisition support, and business process improvement. Through this contract, we contribute to the effective oversight and implementation of major FAA programs that advance national aviation priorities.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Air Traffic Engineering and Program Support II (ATEPS II)",
      contractNumber: "693KA9-18-D-00012",
      description: "ATEPS II delivers vital engineering and program management support for air traffic systems and infrastructure. This includes technical analysis, system design, requirements development, and implementation planning. Our work under ATEPS II directly supports the FAA's mission to enhance air traffic operations and ensure the continuous improvement of the air traffic management system.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Current Contracts Section */}
        <motion.div
          className="mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Current Contracts</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our ongoing partnerships with the FAA demonstrate our commitment to advancing aviation technology and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contracts.map((contract, index) => (
              <motion.div
                key={contract.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full glass-card border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <AspectRatio ratio={16 / 9}>
                      <img
                        src={contract.image}
                        alt={contract.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </AspectRatio>
                  </div>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight">{contract.title}</CardTitle>
                    <p className="text-sm text-muted-foreground font-mono">
                      Contract awarded: {contract.contractNumber}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-foreground/70 text-sm leading-relaxed">
                      {contract.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
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
  );
};

export default Services;
