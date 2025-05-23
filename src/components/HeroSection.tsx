
import React from 'react';
import { Button } from '@/components/ui/button';
import MockupPhone from './MockupPhone';
import { Bell, Calendar, Clock } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handleJoinWaitlist = () => {
    // Scroll to download section when Join Waitlist is clicked
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    // Scroll to features section when Learn More is clicked
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-20 pb-28 bg-white">
      {/* Enhanced background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-30%] right-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-blue-50 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
              <span className="block">Never Miss Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 animate-pulse-slow">
                Medications Again
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              MedSync helps you track medications and appointments with timely reminders, all in one simple Android app.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-md shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl" 
                onClick={handleJoinWaitlist}
              >
                Join Waitlist
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110" 
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2 transition-transform hover:scale-110 hover:bg-blue-200 hover:rotate-6">
                  <Bell size={20} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-600 text-center">Smart Reminders</span>
              </div>
              <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2 transition-transform hover:scale-110 hover:bg-blue-200 hover:rotate-6">
                  <Calendar size={20} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-600 text-center">Appointment Tracking</span>
              </div>
              <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2 transition-transform hover:scale-110 hover:bg-blue-200 hover:rotate-6">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <span className="text-sm text-gray-600 text-center">Schedule Manager</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-200 to-blue-400 rounded-full opacity-50 blur-lg animate-pulse-slow"></div>
              <MockupPhone className="animate-float hover:animate-none relative" />
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 -left-16 w-12 h-12 rounded-full bg-blue-300/30 animate-ping" style={{ animationDuration: '3s' }}></div>
              <div className="absolute bottom-1/3 -right-8 w-8 h-8 rounded-full bg-blue-400/30 animate-ping" style={{ animationDelay: '1s', animationDuration: '2.5s' }}></div>
              <div className="absolute top-2/3 -left-12 w-10 h-10 rounded-full bg-blue-200/20 animate-ping" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
