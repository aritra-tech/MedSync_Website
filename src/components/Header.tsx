
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleJoinWaitlist = () => {
    // Scroll to download section when Join Waitlist is clicked
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update header background based on scroll position
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['features', 'benefits', 'download'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || 'hero';
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-500 ${
            isScrolled ? 'scale-90' : 'scale-100'
          }`}>
            MedSync
          </span>
        </Link>
        
        <nav className={`hidden md:flex items-center space-x-8 ${
          isScrolled ? 'text-gray-800' : 'text-gray-700'
        }`}>
          <a 
            href="#features" 
            className={`text-sm font-medium transition-colors relative group ${
              activeSection === 'features' ? 'text-blue-600' : 'hover:text-blue-500'
            }`}
          >
            Features
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
              activeSection === 'features' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </a>
          <a 
            href="#benefits" 
            className={`text-sm font-medium transition-colors relative group ${
              activeSection === 'benefits' ? 'text-blue-600' : 'hover:text-blue-500'
            }`}
          >
            Benefits
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
              activeSection === 'benefits' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </a>
          <a 
            href="#download" 
            className={`text-sm font-medium transition-colors relative group ${
              activeSection === 'download' ? 'text-blue-600' : 'hover:text-blue-500'
            }`}
          >
            Download
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
              activeSection === 'download' ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></span>
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button 
            className={`secondary-gradient-button transition-all duration-300 hover:scale-110 hover:shadow-lg ${
              isScrolled ? 'shadow-sm' : 'shadow-md'
            }`} 
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
        </div>
        
        {/* Mobile menu button with animation */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className={`text-gray-700 hover:bg-gray-100 transition-all duration-300 ${isMobileMenuOpen ? 'bg-blue-50' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
              }`}></span>
              <span className={`absolute top-1/2 left-0 block w-6 h-0.5 bg-current transform transition-opacity duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute top-1/2 left-0 block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
              }`}></span>
            </div>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu with enhanced animations */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-500 ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className={`text-sm font-medium py-2 px-4 rounded-md transition-all duration-300 ${
              activeSection === 'features' ? 'bg-blue-50 text-blue-600 translate-x-2' : 'hover:bg-gray-50 hover:text-blue-500 hover:translate-x-2'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className={`text-sm font-medium py-2 px-4 rounded-md transition-all duration-300 ${
              activeSection === 'benefits' ? 'bg-blue-50 text-blue-600 translate-x-2' : 'hover:bg-gray-50 hover:text-blue-500 hover:translate-x-2'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#download" 
            className={`text-sm font-medium py-2 px-4 rounded-md transition-all duration-300 ${
              activeSection === 'download' ? 'bg-blue-50 text-blue-600 translate-x-2' : 'hover:bg-gray-50 hover:text-blue-500 hover:translate-x-2'
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download
          </a>
          <Button 
            className="secondary-gradient-button w-full justify-center transition-transform hover:scale-105" 
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
