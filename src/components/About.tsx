
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    {
      title: "Value",
      description: "Take the time to understand our customers and their needs"
    },
    {
      title: "Staff",
      description: "Recruit and retain the best talent. Quickly assess customer needs and match them with the proper team to ensure max success"
    },
    {
      title: "Determination",
      description: "Continually strive to understand and meet new requirements and objectives"
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic young company specializing in FAA contracting, made up of enthusiastic teams who offer effective and creative solutions to advance aviation technology and safety for our valued government clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-muted-foreground">
              Eyrie Networks, LLC is a Minority Owned, Small Disadvantaged Business (SDB) that was founded in 2018, specializing in Federal Aviation Administration (FAA) contracting and aviation technology solutions.
            </p>
            <p className="text-muted-foreground">
              Our mission is to be the preferred partner for the FAA, providing the best proactive and innovative solutions for aviation safety and technology advancement. We strive for solutions that are affordable and highly available, maintainable, secure, and extensible within the aviation ecosystem.
            </p>
            <p className="text-muted-foreground">
              Our specialized approach to FAA contracting transcends technology trends and incorporates optimal solutions for the unique challenges of aviation infrastructure and air traffic management systems.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass-card p-6 rounded-xl"
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex gap-4">
                    <div className="mt-1">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Expertise</h4>
              <p className="text-muted-foreground text-xl">
                We strive to incorporate the appropriate technical expertise, process improvement, and innovation to deliver quality solutions.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Distinctive Ability</h4>
              <p className="text-muted-foreground">
                Our customers have openly reported that they contact Eyrie Networks because of our distinctive ability to quickly assess their needs and offer innovative solutions that routinely exceed their expectations.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-4">Agile Approach</h4>
              <p className="text-muted-foreground">
                Due to the agile nature of our business model, our teams are able to quickly adapt to the client's dynamic environment to ensure that we deliver the solutions that they need to successfully achieve their goals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
