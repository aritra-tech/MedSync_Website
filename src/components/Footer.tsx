
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 border-t border-gray-200">
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
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-medsync-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-medsync-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-medsync-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
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
                <li><a href="#" className="text-gray-600 hover:text-medsync-purple text-sm">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">Contact</h3>
              <ul className="space-y-2">
                <li><a href="mailto:aritrarick2002@gmail.com" className="text-gray-600 hover:text-medsync-purple text-sm">Email Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-medsync-purple text-sm">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center md:text-left">
          <div className="md:flex md:justify-between md:items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} MedSync. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex justify-center md:justify-end space-x-6">
                <li><a href="#" className="text-gray-600 hover:text-medsync-purple text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-medsync-purple text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-medsync-purple text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
