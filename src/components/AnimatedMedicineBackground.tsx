
import React from 'react';
import { Pill, Stethoscope, Timer, Clipboard, Star, Heart } from 'lucide-react';

interface MedicineIconProps {
  Icon: React.ElementType;
  className: string;
  delay?: string;
}

const MedicineIcon: React.FC<MedicineIconProps> = ({ Icon, className, delay }) => (
  <div 
    className={`absolute ${className}`} 
    style={delay ? { animationDelay: delay } : undefined}
  >
    <Icon className="text-medsync-blue/30" />
  </div>
);

const AnimatedMedicineBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Medicine-related icons */}
      <MedicineIcon 
        Icon={Pill} 
        className="top-[10%] left-[15%] w-16 h-16 animate-float" 
      />
      <MedicineIcon 
        Icon={Pill} 
        className="bottom-[20%] right-[10%] w-12 h-12 animate-float" 
        delay="1s"
      />
      <MedicineIcon 
        Icon={Timer} 
        className="top-[30%] right-[20%] w-16 h-16 animate-float" 
        delay="1.5s"
      />
      <MedicineIcon 
        Icon={Timer} 
        className="bottom-[30%] left-[20%] w-10 h-10 animate-float" 
        delay="2s"
      />
      <MedicineIcon 
        Icon={Stethoscope} 
        className="top-[60%] left-[10%] w-14 h-14 animate-float" 
        delay="2.5s"
      />
      <MedicineIcon 
        Icon={Stethoscope} 
        className="bottom-[40%] right-[25%] w-12 h-12 animate-float" 
        delay="3s"
      />
      <MedicineIcon 
        Icon={Clipboard} 
        className="top-[70%] right-[15%] w-10 h-10 animate-float" 
        delay="3.5s"
      />
      <MedicineIcon 
        Icon={Heart} 
        className="top-[40%] left-[25%] w-8 h-8 animate-float" 
        delay="4s"
      />
    </div>
  );
};

export default AnimatedMedicineBackground;
