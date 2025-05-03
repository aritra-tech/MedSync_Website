
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4 animate-fade-in">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medsync-purple to-medsync-blue-dark">
                MedSync
              </span>
            </div>
            <p className="text-gray-600 max-w-xs mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Your personal medication and appointment management companion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold mb-3 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-medsync-blue-dark to-medsync-teal">Product</h3>
              <ul className="space-y-2">
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a href="#features" className="text-gray-600 hover:text-medsync-purple text-sm">Features</a>
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a href="#benefits" className="text-gray-600 hover:text-medsync-purple text-sm">Benefits</a>
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a href="#download" className="text-gray-600 hover:text-medsync-purple text-sm">Download</a>
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="font-semibold mb-3 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-medsync-blue-dark to-medsync-teal">Support</h3>
              <ul className="space-y-2">
                <li className="transition-all duration-300 hover:translate-x-1">
                  <Link 
                    to="/privacy" 
                    className="text-gray-600 hover:text-medsync-purple text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <Link 
                    to="/terms" 
                    className="text-gray-600 hover:text-medsync-purple text-sm"
                  >
                    Terms
                  </Link>
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a 
                    href="mailto:aritrarick2002@gmail.com" 
                    className="text-gray-600 hover:text-medsync-purple text-sm inline-flex items-center gap-1"
                  >
                    Feedback <Mail className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100">
          <p className="text-gray-600 text-sm text-center animate-fade-in flex items-center justify-center">
            © {new Date().getFullYear()} MedSync. All rights reserved. 
            <Heart className="h-3 w-3 text-medsync-purple ml-1 animate-pulse-slow" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
