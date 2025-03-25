
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "NeuralSense",
      description: "A computer vision system that recognizes emotions from facial expressions, built with TensorFlow and OpenCV.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      tags: ["Computer Vision", "TensorFlow", "Python", "OpenCV"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "LanguageForge",
      description: "An NLP platform that generates human-like text, utilizing transformer-based architecture and fine-tuning techniques.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
      tags: ["NLP", "PyTorch", "Transformers", "Python"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "DataInsight",
      description: "A data analytics platform that uses machine learning to predict trends and provide actionable insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["Machine Learning", "Data Science", "Python", "Pandas"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "RecommendAI",
      description: "A recommendation system that personalizes user experiences based on behavior and preferences.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
      tags: ["Recommender Systems", "Python", "TensorFlow", "Flask"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">
            A selection of my recent work in artificial intelligence and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-xl overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeInUp}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium animated-link"
          >
            View more projects on GitHub <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
