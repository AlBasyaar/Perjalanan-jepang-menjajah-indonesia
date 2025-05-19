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
    <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
      {imageSrc && (
        <div className="h-56 flex items-center justify-center bg-white pt-4 px-4">
          <img 
            src={imageSrc} 
            alt={title} 
            className="object-contain h-full w-auto mx-auto transition-transform duration-700 hover:scale-105"
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