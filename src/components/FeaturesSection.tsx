
import React from 'react';
import { Bell, Calendar, Clock } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay?: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description, color, delay = "0s" }) => {
  return (
    <div 
      className="gradient-card group p-6 transition-all duration-500 hover:shadow-xl hover:translate-y-[-10px] animate-fade-in" 
      style={{ animationDelay: delay }}
    >
      <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 transition-all duration-300 group-hover:pl-1">{title}</h3>
      <p className="text-gray-600 transition-all duration-300 group-hover:pl-1">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Bell size={24} className="text-white" />,
      title: "Medication Reminders",
      description: "Get timely notifications for your medication schedule, with customizable reminders.",
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      delay: "0.2s"
    },
    {
      icon: <Calendar size={24} className="text-white" />,
      title: "Appointment Tracking",
      description: "Manage all your medical appointments in one place with alerts and location details.",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      delay: "0.4s"
    },
    {
      icon: <Clock size={24} className="text-white" />,
      title: "Medication History",
      description: "View complete history of your medications and adherence patterns.",
      color: "bg-gradient-to-br from-blue-600 to-blue-400",
      delay: "0.6s"
    }
  ];

  return (
    <section id="features" className="py-20 relative bg-gradient-to-b from-white to-blue-50">
      <div className="absolute inset-0 bg-blue-gradient opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-blue-500 animate-pulse-slow">
              Powerful Features
            </span>
          </h2>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-blue-300 mb-6 rounded-full animate-pulse-slow"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            MedSync combines intuitive design with powerful features to help you manage your health journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
