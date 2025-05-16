import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  description, 
  icon, 
  imageSrc 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 fade-in">
      {imageSrc && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-6">
        {icon && (
          <div className="text-red mb-4">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-3 text-navy">
          {title}
        </h3>
        
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;