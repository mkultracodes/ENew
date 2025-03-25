
import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Database, LineChart, Server } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Machine Learning",
      description: "Creating custom ML models for classification, regression, and clustering tasks."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "ML Engineering",
      description: "Building robust ML pipelines with TensorFlow, PyTorch and scikit-learn."
    },
    {
      icon: <LineChart className="h-8 w-8 text-primary" />,
      title: "Natural Language Processing",
      description: "Implementing text analysis, sentiment analysis and language generation."
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "Deep Learning",
      description: "Developing neural networks for complex pattern recognition tasks."
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Engineering",
      description: "Creating ETL pipelines and data infrastructure for AI applications."
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "AI Consulting",
      description: "Providing guidance on AI implementation and best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-muted-foreground">
            As an AI engineer with a passion for creating intelligent solutions, I bring expertise in machine learning, deep learning, and data science to solve complex problems and drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold">My Journey</h3>
            <p className="text-lg text-muted-foreground">
              With a background in computer science and mathematics, I've spent the past several years building AI systems that provide real value. From startups to established enterprises, I've worked across diverse domains including healthcare, finance, and e-commerce.
            </p>
            <p className="text-lg text-muted-foreground">
              My approach combines technical excellence with a focus on practical applications. I believe in creating AI solutions that are not only powerful but also interpretable, ethical, and aligned with business objectives.
            </p>
            <div className="pt-4">
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium inline-block shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See My Work
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl hover:shadow-2xl transition-all"
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
