import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import avidaLogo from 'figma:asset/5d3ed355421be243023ab0df0213b609d1b2e55f.png';

interface NavigationProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export function Navigation({ currentPage = 'home', setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (currentPage !== 'home' && setCurrentPage) {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const navigateToPage = (page: string) => {
    if (setCurrentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about', action: () => navigateToPage('about-firm') },
    { label: 'Capabilities', id: 'firm', action: () => navigateToPage('firm') },
    { label: 'Leadership', id: 'leadership', action: () => navigateToPage('leadership') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${ 
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-white'
    }`}>
      {/* Navy blue top line - AVILDA signature */}
      <div className={`absolute top-0 left-0 right-0 transition-all duration-500 ${
        scrolled ? 'h-0.5' : 'h-1'
      } bg-[#2d356b]`} />
      
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={avidaLogo} 
              alt="AVILDA Executive Talent" 
              className="h-8 w-auto cursor-pointer"
              onClick={() => {
                if (setCurrentPage) setCurrentPage('about-firm');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-28 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={item.action}
                className="relative text-xs text-gray-700 hover:text-[#2d356b] transition-colors duration-300 uppercase tracking-[0.2em] group"
                whileHover={{ y: -1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#2d356b] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>
          
          {/* Contact Button - Right Side */}
          <motion.a
            href="mailto:anthony@oneavilda.com"
            className="hidden md:block px-10 py-3 bg-[#2d356b] text-white text-xs uppercase tracking-[0.2em] hover:bg-black transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.a>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-[#2d356b] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-8 py-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="block w-full text-left py-4 text-gray-700 hover:text-[#2d356b] transition-all text-xs uppercase tracking-[0.2em] border-b border-gray-100"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="mailto:anthony@oneavilda.com"
                className="block w-full text-left py-4 mt-2 bg-[#2d356b] text-white text-xs uppercase tracking-[0.2em] px-6 hover:bg-black transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}