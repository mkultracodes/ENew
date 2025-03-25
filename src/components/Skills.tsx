
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 95 },
        { name: 'Keras', level: 85 },
        { name: 'Computer Vision', level: 80 },
        { name: 'NLP', level: 88 },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'C++', level: 65 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Feature Engineering', level: 85 },
        { name: 'Big Data (Spark)', level: 75 },
      ],
    },
    {
      title: 'MLOps & Development',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'AWS/GCP/Azure', level: 80 },
        { name: 'REST API Development', level: 85 },
      ],
    },
  ];

  const technologies = [
    "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Pandas", "NumPy", 
    "OpenCV", "Matplotlib", "Seaborn", "Plotly", "Hugging Face", "Spark",
    "AWS SageMaker", "Google AI Platform", "Azure ML", "Docker", "Kubernetes",
    "Git", "CUDA", "Flask", "Django", "FastAPI", "SQLAlchemy", "MongoDB",
    "PostgreSQL", "Airflow", "MLflow", "DVC", "Streamlit", "Weights & Biases"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground">
            My technical skills and areas of expertise in artificial intelligence and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
            >
              <motion.h3 
                className="text-2xl font-bold"
                variants={fadeInUp}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="space-y-2"
                    variants={fadeInUp}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold text-center mb-10">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 glass-card rounded-lg text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + (index % 10) * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
