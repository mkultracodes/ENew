
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const About = () => {
  const valuesRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [valuesIndex, setValuesIndex] = useState(0);
  const [cardsIndex, setCardsIndex] = useState(0);
  const isMobile = useIsMobile();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    {
      title: "Principle",
      description: "Take the time to understand our customers and their needs"
    },
    {
      title: "Staff",
      description: "Recruit and retain the best talent. Quickly assess customer needs and match them with the proper team to ensure maximum success"
    },
    {
      title: "Determination",
      description: "Continually strive to understand and meet new requirements and objectives"
    }
  ];

  const cards = [
    {
      title: "Expertise",
      description: "We strive to incorporate the appropriate technical expertise, process improvement, and innovation to deliver quality solutions."
    },
    {
      title: "Distinctive Ability",
      description: "Our customers have openly reported that they contact Eyrie Networks because of our distinctive ability to quickly assess their needs and offer innovative solutions that routinely exceed their expectations."
    },
    {
      title: "Agile Approach",
      description: "Due to the agile nature of our business model, our teams are able to quickly adapt to the client's dynamic environment to ensure that we deliver the solutions that they need to successfully achieve their goals."
    }
  ];

  // Auto-scroll for values section on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setValuesIndex((prev) => (prev + 1) % values.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, values.length]);

  // Auto-scroll for cards section on mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCardsIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, cards.length]);

  // Scroll to the correct card when index changes
  useEffect(() => {
    if (!isMobile || !valuesRef.current) return;
    const scrollWidth = valuesRef.current.scrollWidth / values.length;
    valuesRef.current.scrollTo({ left: scrollWidth * valuesIndex, behavior: 'smooth' });
  }, [valuesIndex, isMobile, values.length]);

  useEffect(() => {
    if (!isMobile || !cardsRef.current) return;
    const scrollWidth = cardsRef.current.scrollWidth / cards.length;
    cardsRef.current.scrollTo({ left: scrollWidth * cardsIndex, behavior: 'smooth' });
  }, [cardsIndex, isMobile, cards.length]);

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
            <div 
              ref={valuesRef}
              className="flex md:block gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none no-visible-scrollbar md:space-y-4"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="glass-card p-6 rounded-xl min-w-[85vw] sm:min-w-[300px] md:min-w-0 md:w-full flex-shrink-0 md:flex-shrink snap-center"
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
            {/* Mobile indicators */}
            {isMobile && (
              <div className="flex justify-center gap-2 md:hidden">
                {values.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setValuesIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === valuesIndex ? 'bg-primary' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            )}
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
          <div 
            ref={cardsRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory md:snap-none no-visible-scrollbar"
          >
            {cards.map((card, index) => (
              <div 
                key={card.title}
                className="glass-card p-6 rounded-xl min-w-[85vw] sm:min-w-[300px] md:min-w-0 flex-shrink-0 md:flex-shrink snap-center"
              >
                <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
          {/* Mobile indicators */}
          {isMobile && (
            <div className="flex justify-center gap-2 mt-4 md:hidden">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCardsIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === cardsIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
