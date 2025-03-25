
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={18} />, href: 'mailto:contact@aiportfolio.com', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-muted/30">
          <div className="md:col-span-2">
            <motion.a 
              href="#home" 
              className="text-2xl font-bold inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              AI<span className="text-primary">Engineer</span>
            </motion.a>
            <p className="text-muted-foreground max-w-md">
              Building intelligent solutions that combine cutting-edge AI technology with practical applications to solve real-world problems.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background text-foreground hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors animated-link inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground space-y-3">
              <p>San Francisco, CA</p>
              <p>
                <a 
                  href="mailto:contact@aiportfolio.com" 
                  className="hover:text-foreground transition-colors animated-link inline-block"
                >
                  contact@aiportfolio.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+15551234567" 
                  className="hover:text-foreground transition-colors animated-link inline-block"
                >
                  +1 (555) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} AI Engineer Portfolio. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors mr-4 animated-link inline-block">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors animated-link inline-block">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
