
import React from 'react';
import { Check } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    "Never miss an important medication",
    "Reduce anxiety about forgetting appointments",
    "Improved medication adherence",
    "Save time with automatic scheduling",
    "Share your schedule with caregivers",
    "Track health trends over time"
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              {/* Background elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-medsync-purple/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-medsync-blue/10 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white rounded-3xl p-8 shadow-xl max-w-md mx-auto">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-medsync-purple to-medsync-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Improved Health Outcomes</h3>
                  <p className="text-gray-600">Consistent medication adherence leads to better health management.</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-medium mb-3">Studies show that medication adherence can:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                        <Check size={12} className="text-green-600" />
                      </span>
                      <span className="text-sm text-gray-700">Reduce hospitalization risk by up to 40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                        <Check size={12} className="text-green-600" />
                      </span>
                      <span className="text-sm text-gray-700">Improve treatment effectiveness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-100 rounded-full p-1 mr-2 mt-0.5">
                        <Check size={12} className="text-green-600" />
                      </span>
                      <span className="text-sm text-gray-700">Lead to better long-term health outcomes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-medsync-purple to-medsync-blue-dark">
                How MedSync Benefits You
              </span>
            </h2>
            
            <p className="text-gray-600 mb-8">
              MedSync is designed to eliminate the stress of managing medications and appointments, giving you peace of mind and better health outcomes.
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-medsync-purple to-medsync-blue rounded-full flex items-center justify-center mr-3 mt-1">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
