
import React from 'react';
import { Bell, Calendar, Clock } from 'lucide-react';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description, color }) => {
  return (
    <div className="gradient-card p-6 transition-all duration-300 hover:shadow-xl">
      <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Bell size={24} className="text-white" />,
      title: "Medication Reminders",
      description: "Get timely notifications for your medication schedule, with customizable reminders.",
      color: "bg-gradient-to-br from-medsync-blue-light to-medsync-blue-dark"
    },
    {
      icon: <Calendar size={24} className="text-white" />,
      title: "Appointment Tracking",
      description: "Manage all your medical appointments in one place with alerts and location details.",
      color: "bg-gradient-to-br from-medsync-blue to-medsync-teal"
    },
    {
      icon: <Clock size={24} className="text-white" />,
      title: "Medication History",
      description: "View complete history of your medications and adherence patterns.",
      color: "bg-gradient-to-br from-medsync-blue-dark to-medsync-blue-light"
    }
  ];

  return (
    <section id="features" className="py-20 relative bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="absolute inset-0 bg-blue-gradient opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-medsync-blue-dark to-medsync-blue-light">
              Powerful Features
            </span>
          </h2>
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
