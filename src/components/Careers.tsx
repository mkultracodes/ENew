
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, GraduationCap, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

const Careers = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  useEffect(() => {
    // Load Tally script when dialog opens and clean up when it closes
    if (isApplicationOpen) {
      // Remove any existing Tally script to ensure fresh load
      const existingScript = document.querySelector('script[src*="tally.so"]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.src = "https://tally.so/widgets/embed.js";
      script.onload = () => {
        // Ensure Tally embeds are loaded after script loads
        if (typeof (window as any).Tally !== 'undefined') {
          (window as any).Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    }
  }, [isApplicationOpen]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsApplicationOpen(true);
  };

  return (
    <>
      <section id="careers" className="py-24 bg-background">
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
                      <h3 className="text-xl md:text-2xl font-bold mb-2">Full Stack Developer</h3>
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
                          <span>All levels</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className="text-lg font-semibold text-blue-600">$65,000 - $170,000</div>
                      <div className="text-sm text-muted-foreground">Multiple levels</div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Requirements:</p>
                      <p className="text-sm text-muted-foreground">U.S. citizenship</p>
                      <p className="text-sm text-muted-foreground">B.S. in CS/Engineering</p>
                      <p className="text-sm text-muted-foreground">Linux experience</p>
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium">Tech Stack:</p>
                        <div className="ml-2 space-y-1">
                          <p className="text-sm text-muted-foreground">• Database: MariaDB, MySQL, MS SQL Server, Oracle, PostGres, MongoDB</p>
                          <p className="text-sm text-muted-foreground">• Application Layer: ColdFusion, PHP, Java, Python, NodeJS</p>
                          <p className="text-sm text-muted-foreground">• UI/UX: ExtJS, Angular, React (MVVM/MVC frameworks)</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">About Us</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        We're looking for a Full Stack Developer capable of producing clean, readable, functional code at the database, application server and client layers. You should have the ability to work with one or more technologies from each layer of our tech stack.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">What You'll Be Doing</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Working with databases like MariaDB, MySQL, MS SQL Server, Oracle, PostGres, or MongoDB</li>
                        <li>• Building application server logic using ColdFusion, PHP, Java, Python, or NodeJS</li>
                        <li>• Creating responsive user interfaces with ExtJS, Angular, React or similar MVVM/MVC frameworks</li>
                        <li>• Working in Linux environments and managing deployments</li>
                        <li>• Writing clean, maintainable code and working with version control systems</li>
                        <li>• Collaborating with team members to deliver functional solutions</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">What We're Looking For</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Experience with full stack development: 10+ years (B.S. degree) or 2+ years (Master's degree)</li>
                        <li>• Proficiency with one or more database technologies (MariaDB, MySQL, MS SQL Server, Oracle, PostGres, MongoDB)</li>
                        <li>• Experience with application layer technologies (ColdFusion, PHP, Java, Python, or NodeJS)</li>
                        <li>• Hands-on experience with UI frameworks (ExtJS, Angular, React) following MVVM or MVC patterns</li>
                        <li>• Linux system experience and command line proficiency</li>
                        <li>• Comfortable working independently and as part of a cross-functional team</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Bonus Points If You Have</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Master's degree in computer science, mathematics, engineering or related field</li>
                        <li>• Built or maintained CI/CD pipelines</li>
                        <li>• Familiarity with authentication (OAuth)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Why You Might Like It Here</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• You'll have the freedom to take ownership and contribute ideas</li>
                        <li>• A chance to work across the stack and grow your skill set</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Salary by Experience Level</h4>
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:justify-between p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium">Junior Level (0-5 years)</span>
                          <span className="text-primary font-semibold">$65,000 – $85,000</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium">Mid-Level (5-10 years)</span>
                          <span className="text-primary font-semibold">$80,000 – $110,000</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:justify-between p-3 bg-muted/30 rounded-lg">
                          <span className="font-medium">Senior (10+ years)</span>
                          <span className="text-primary font-semibold">$110,000 – $170,000</span>
                        </div>
                      </div>
                      
                    </div>

                    <div className="pt-6 border-t border-border">
                      <Button 
                        onClick={() => handleApply('Full Stack Developer')}
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
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Requirements:</p>
                      <p className="text-sm text-muted-foreground">U.S. citizenship</p>
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

      {/* Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="w-[95vw] max-w-[600px] h-[95vh] overflow-hidden p-0 flex flex-col">
          <DialogHeader className="p-4 sm:p-6 pb-0 flex-shrink-0">
            <DialogTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <FileText className="h-5 w-5" />
              Apply for Position
            </DialogTitle>
            <p className="text-sm text-muted-foreground mt-2">
              {selectedPosition}
            </p>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto">
            <iframe 
              key={`tally-${selectedPosition}-${isApplicationOpen}`}
              data-tally-src="https://tally.so/embed/w29dJA?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="100%" 
              style={{ minHeight: '600px' }}
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0} 
              title="Application"
              className="w-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Careers;
