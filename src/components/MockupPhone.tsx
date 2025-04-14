
import React from 'react';
import { cn } from '@/lib/utils';

interface MockupPhoneProps {
  className?: string;
}

const MockupPhone: React.FC<MockupPhoneProps> = ({ className }) => {
  return (
    <div className={cn("relative w-64 h-[530px] mx-auto", className)}>
      {/* Phone frame */}
      <div className="absolute inset-0 bg-black rounded-[40px] shadow-xl overflow-hidden">
        {/* Screen */}
        <div className="absolute top-3 bottom-3 left-3 right-3 bg-gradient-to-br from-medsync-purple-light via-medsync-purple to-medsync-purple-dark rounded-[32px] overflow-hidden">
          {/* Status bar */}
          <div className="h-6 w-full bg-black bg-opacity-30 flex items-center px-4">
            <div className="ml-auto flex space-x-1.5">
              <div className="w-4 h-3 bg-white opacity-80 rounded-sm"></div>
              <div className="w-3 h-3 bg-white opacity-80 rounded-full"></div>
              <div className="w-3 h-3 bg-white opacity-80 rounded-full"></div>
            </div>
          </div>
          
          {/* App Content */}
          <div className="p-4 h-full">
            {/* App Header */}
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-white bg-opacity-20"></div>
              <div className="ml-3">
                <div className="h-3 w-24 bg-white bg-opacity-20 rounded-full"></div>
                <div className="h-2 w-16 bg-white bg-opacity-10 rounded-full mt-1"></div>
              </div>
            </div>
            
            {/* Calendar widget */}
            <div className="bg-white bg-opacity-10 rounded-xl p-3 mb-4">
              <div className="flex justify-between items-center mb-2">
                <div className="h-3 w-20 bg-white bg-opacity-20 rounded-full"></div>
                <div className="h-3 w-3 bg-white bg-opacity-20 rounded-full"></div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <div key={i} className="h-2 w-full bg-white bg-opacity-10 rounded-full"></div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square rounded-full flex items-center justify-center ${
                      i === 15 ? 'bg-medsync-teal text-xs' : 'bg-white bg-opacity-10'
                    }`}
                  >
                    {i === 15 && <div className="h-2 w-2 bg-white rounded-full"></div>}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Medication reminders */}
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white bg-opacity-10 rounded-xl p-3 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <div className="h-4 w-4 bg-white bg-opacity-30 rounded-sm"></div>
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="h-2.5 w-24 bg-white bg-opacity-20 rounded-full"></div>
                    <div className="h-2 w-16 bg-white bg-opacity-10 rounded-full mt-1"></div>
                  </div>
                  <div className="h-5 w-5 rounded-full bg-white bg-opacity-20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default MockupPhone;
