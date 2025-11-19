import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import avidaLogo from 'figma:asset/5d3ed355421be243023ab0df0213b609d1b2e55f.png';

interface FooterProps {
  currentPage?: string;
  setCurrentPage?: (page: string) => void;
}

export function Footer({ currentPage = 'home', setCurrentPage }: FooterProps) {
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
  };

  return (
    <footer className="relative bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <p className="text-gray-500 uppercase tracking-wide">
            © {new Date().getFullYear()} AVILDA Executive Talent. All rights reserved.
          </p>
          <div className="flex gap-8 text-gray-500 uppercase tracking-wide">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}