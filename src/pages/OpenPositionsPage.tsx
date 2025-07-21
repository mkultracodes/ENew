import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, GraduationCap, DollarSign, FileText, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleCanvas from '../components/ui/particle-canvas';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '@/hooks/use-toast';

const OpenPositionsPage = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsApplicationOpen(true);
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('position', selectedPosition);

    try {
      const response = await fetch('https://getform.io/f/your-getform-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Application Submitted",
          description: "Thank you for applying! We'll review your application and get back to you soon.",
        });
        setIsApplicationOpen(false);
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              backgroundImage: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop)', 
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
              Open Positions
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join our team and help shape the future of technology.
            </motion.p>
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

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Openings</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore exciting opportunities to grow your career with us.
              </p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Accordion type="multiple" className="space-y-6">
                {/* Angular Developer Position - First */}
                <AccordionItem value="angular-developer" className="glass-card rounded-xl overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Angular Front-End / Full Stack Developer</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>Hybrid - AC, NJ / DC</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>Full-time</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap size={14} />
                            <span>All levels</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="text-lg font-semibold text-primary">Multiple Levels</div>
                        <div className="text-sm text-muted-foreground">$65k - $170k</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2">Requirements & Tech Stack:</p>
                        <p className="text-sm text-muted-foreground">B.S. in CS/Engineering required</p>
                        <p className="text-sm text-muted-foreground mt-1">Angular, Spring Boot, MongoDB, Python</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">About Us</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          We're currently looking for an Angular Front-End Developer who's also comfortable working across the stack when needed — especially with Python, Spring Boot, and MongoDB.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">What You'll Be Doing</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Building responsive, component-based user interfaces using Angular and TypeScript</li>
                          <li>• Collaborating with the back-end team to integrate with APIs built in Spring Boot and Python</li>
                          <li>• Writing clean, maintainable code and working with Git for version control</li>
                          <li>• Communicating closely with product and design to bring new features to life</li>
                          <li>• Working with MongoDB for data modeling and querying in a NoSQL environment</li>
                          <li>• Helping debug, test, and optimize both front-end and back-end functionality</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">What We're Looking For</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• 2+ years' experience with Angular, along with TypeScript and CSS</li>
                          <li>• Some hands-on experience with Python and Spring Boot for backend development</li>
                          <li>• Familiarity with MongoDB, or at least comfortable working with NoSQL databases</li>
                          <li>• Comfortable working independently and as part of a small, cross-functional team</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Bonus Points If You Have</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Master's degree in computer science, Mathematics or related field</li>
                          <li>• Built or maintained CI/CD pipelines</li>
                          <li>• Familiarity with authentication (OAuth)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Why You Might Like It Here</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Flexible work hours and remote-friendly setup</li>
                          <li>• You'll have the freedom to take ownership and contribute ideas</li>
                          <li>• A chance to work across the stack and grow your skill set</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Salary by Experience Level</h4>
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row sm:justify-between p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Junior (0-5 years)</span>
                            <span className="text-primary font-semibold">$65,000 – $85,000</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Mid-Level (5-10 years) <span className="text-sm text-muted-foreground">Master's preferred</span></span>
                            <span className="text-primary font-semibold">$80,000 – $120,000</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between p-3 bg-muted/30 rounded-lg">
                            <span className="font-medium">Senior (10+ years) <span className="text-sm text-muted-foreground">Master's preferred</span></span>
                            <span className="text-primary font-semibold">$110,000 – $170,000</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">*Salary ranges are location dependent</p>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <Button 
                          onClick={() => handleApply('Angular Front-End / Full Stack Developer')}
                          className="w-full sm:w-auto px-8 py-3"
                        >
                          Apply Now
                          <FileText className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Hardware Engineer Position - Second */}
                <AccordionItem value="hardware-engineer" className="glass-card rounded-xl overflow-hidden">
                  <AccordionTrigger className="px-6 py-6 hover:no-underline">
                    <div className="flex flex-col md:flex-row md:items-center justify-between w-full text-left">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Hardware & Test Engineer (Junior)</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>Atlantic City, NJ</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>Full-time</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GraduationCap size={14} />
                            <span>0-5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <div className="text-lg font-semibold text-primary">$75,000 – $92,000</div>
                        <div className="text-sm text-muted-foreground">per year</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm font-medium mb-2">Requirements:</p>
                        <p className="text-sm text-muted-foreground">B.A/B.S. in Systems/Software/Electronics Engineering</p>
                      </div>

                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          We're looking for a hands-on Hardware/Test Engineer to help us design, build, and test reliable hardware systems. You'll be working closely with our hardware, firmware, and systems teams to make sure everything we build performs as expected under real-world conditions. If you enjoy solving practical engineering problems, digging into schematics, and fine-tuning test setups, this might be a good fit.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">What You'll Be Doing</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Designing and building test setups for integrated enterprise systems</li>
                          <li>• Running electrical, thermal, and functional tests to verify hardware performance and reliability</li>
                          <li>• Writing test plans and documenting procedures clearly</li>
                          <li>• Debugging and troubleshooting issues using tools</li>
                          <li>• Working with the design team to provide feedback from testing and suggest improvements</li>
                          <li>• Automating repetitive tests using Python or other scripting tools</li>
                          <li>• Helping define and improve test coverage across hardware releases</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">What We're Looking For</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• A background in Electrical or Computer Engineering (or equivalent practical experience)</li>
                          <li>• Solid understanding of hardware fundamentals — digital/analog signals, power, timing, etc.</li>
                          <li>• Some experience with scripting or automation (Python is a plus)</li>
                          <li>• Comfortable reading schematics and interpreting datasheets</li>
                          <li>• Strong attention to detail and a systematic approach to testing and documentation</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">Nice to Have</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Prior experience with the FAA</li>
                          <li>• Familiarity with embedded systems or firmware</li>
                          <li>• Hands-on experience with environmental testing (vibration, thermal cycling, etc.)</li>
                          <li>• Experience building or supporting production test stations</li>
                        </ul>
                      </div>

                      <div className="pt-6 border-t border-border">
                        <Button 
                          onClick={() => handleApply('Hardware & Test Engineer (Junior)')}
                          className="w-full sm:w-auto px-8 py-3"
                        >
                          Apply Now
                          <FileText className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Apply for Position
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-2">
              {selectedPosition}
            </p>
          </DialogHeader>
          <form onSubmit={handleSubmitApplication} className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input 
                id="name" 
                name="name" 
                type="text" 
                required 
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                required 
                placeholder="Enter your email address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="resume">Resume/CV *</Label>
              <Input 
                id="resume" 
                name="resume" 
                type="file" 
                required 
                accept=".pdf,.doc,.docx"
                className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
              />
              <p className="text-xs text-muted-foreground">
                Please upload your resume in PDF, DOC, or DOCX format
              </p>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setIsApplicationOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default OpenPositionsPage;