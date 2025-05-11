
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 border-t border-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4 animate-fade-in">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 hover:scale-105 transition-transform cursor-pointer">
                MedSync
              </span>
            </div>
            <p className="text-gray-600 max-w-xs mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Your personal medication and appointment management companion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="font-semibold mb-3 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Product</h3>
              <ul className="space-y-2">
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a href="#features" className="text-gray-600 hover:text-blue-600 text-sm">Features</a>
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a href="#benefits" className="text-gray-600 hover:text-blue-600 text-sm">Benefits</a>
                </li>
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a href="#download" className="text-gray-600 hover:text-blue-600 text-sm">Download</a>
                </li>
              </ul>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h3 className="font-semibold mb-3 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500">Support</h3>
              <ul className="space-y-2">
                <li className="transition-all duration-300 hover:translate-x-1">
                  <a 
                    href="mailto:aritrarick2002@gmail.com" 
                    className="text-gray-600 hover:text-blue-600 text-sm relative group"
                  >
                    Feedback
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-100">
          <p className="text-gray-600 text-sm text-center animate-fade-in">
            © {new Date().getFullYear()} MedSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
