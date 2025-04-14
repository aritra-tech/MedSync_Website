
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Mail } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-medsync-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-medsync-purple to-medsync-blue-dark">
              Coming Soon to Android
            </span>
          </h2>
          
          <p className="text-gray-600 mb-10 text-lg">
            MedSync is currently in development for Android devices. Join our waitlist to be the first to know when it's available.
          </p>
          
          <div className="bg-white shadow-xl rounded-2xl p-8 mb-10">
            <div className="flex items-center justify-center mb-6">
              <Smartphone size={32} className="text-medsync-purple mr-2" />
              <h3 className="text-2xl font-bold">Android App Coming Soon</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Be among the first to experience MedSync when it launches. Sign up for our waitlist to receive early access.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              />
              <Button className="primary-gradient-button">
                <Mail size={16} className="mr-2" />
                Join Waitlist
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="text-medsync-purple font-bold text-lg mb-2">Step 1</div>
              <h3 className="font-medium mb-2">Join the Waitlist</h3>
              <p className="text-gray-600 text-sm">Sign up to be notified when MedSync launches on the Google Play Store.</p>
            </div>
            
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="text-medsync-blue font-bold text-lg mb-2">Step 2</div>
              <h3 className="font-medium mb-2">Get Early Access</h3>
              <p className="text-gray-600 text-sm">Selected users will receive early access to test the app before official release.</p>
            </div>
            
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="text-medsync-teal font-bold text-lg mb-2">Step 3</div>
              <h3 className="font-medium mb-2">Download & Enjoy</h3>
              <p className="text-gray-600 text-sm">Install MedSync from the Google Play Store and start managing your medications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
