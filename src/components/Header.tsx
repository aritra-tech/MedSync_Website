
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medsync-blue-light to-medsync-blue-dark transition-all duration-300 ${
            isScrolled ? 'scale-95' : 'scale-100'
          }`}>
            MedSync
          </span>
        </Link>
        
        <nav className={`hidden md:flex items-center space-x-8 ${
          isScrolled ? 'text-gray-800' : 'text-gray-700'
        }`}>
          <a href="#features" className="text-sm font-medium hover:text-medsync-blue transition-colors relative group">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medsync-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-medsync-blue transition-colors relative group">
            Benefits
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medsync-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#download" className="text-sm font-medium hover:text-medsync-blue transition-colors relative group">
            Download
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medsync-blue transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button 
            className={`secondary-gradient-button transition-transform hover:scale-105 ${
              isScrolled ? 'shadow-sm' : 'shadow-md'
            }`} 
            onClick={handleJoinWaitlist}
          >
            Join Waitlist
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-sm font-medium text-gray-700 hover:text-medsync-blue transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className="text-sm font-medium text-gray-700 hover:text-medsync-blue transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#download" 
            className="text-sm font-medium text-gray-700 hover:text-medsync-blue transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download
          </a>
          <Button 
            className="secondary-gradient-button w-full justify-center" 
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
