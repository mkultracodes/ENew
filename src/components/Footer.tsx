
import { Link } from 'react-router-dom';
import { Linkedin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/lovable-uploads/178f4ecb-9d40-41a2-9b3c-7a8504421103.png" 
                alt="Eyrie Networks Logo" 
                className="h-8 md:h-10 w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)' }}
              />
            </Link>
            <p className="text-white/80 max-w-md mt-4">
              Our mission at Eyrie Networks is to provide customers with high quality IT Services that include architecture, design, and integration of new or modernization of legacy IT solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(202) 525-6460</span>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/eyrie-networks/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Eyrie Networks. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Minority Owned, Small Disadvantaged Business (SDB)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
