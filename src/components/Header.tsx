
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, Bell, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const handleJoinWaitlist = () => {
    // Scroll to download section when Join Waitlist is clicked
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medsync-blue-light to-medsync-blue-dark">
            MedSync
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-medsync-blue transition-colors">
            Features
          </a>
          <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-medsync-blue transition-colors">
            Benefits
          </a>
          <a href="#download" className="text-sm font-medium text-gray-700 hover:text-medsync-blue transition-colors">
            Download
          </a>
        </nav>
        
        <div className="hidden md:block">
          <Button className="secondary-gradient-button" onClick={handleJoinWaitlist}>
            Join Waitlist
          </Button>
        </div>
        
        {/* Mobile menu icon */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
