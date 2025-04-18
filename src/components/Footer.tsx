
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-medsync-purple to-medsync-purple-dark">
                MedSync
              </span>
            </div>
            <p className="text-gray-600 max-w-xs mb-4">
              Your personal medication and appointment management companion.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-600 hover:text-medsync-purple text-sm">Features</a></li>
                <li><a href="#benefits" className="text-gray-600 hover:text-medsync-purple text-sm">Benefits</a></li>
                <li><a href="#download" className="text-gray-600 hover:text-medsync-purple text-sm">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/privacy" 
                    className="text-gray-600 hover:text-medsync-purple text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/terms" 
                    className="text-gray-600 hover:text-medsync-purple text-sm"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <a 
                    href="mailto:aritrarick2002@gmail.com" 
                    className="text-gray-600 hover:text-medsync-purple text-sm inline-flex items-center gap-1"
                  >
                    Feedback <Mail className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100">
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} MedSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
