import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  side?: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  side = 'left' 
}) => {
  return (
    <div className={`relative mx-4 ${side === 'left' ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'} md:w-5/12 mb-10 fade-in`}>
      {/* Dot */}
      <div className="absolute top-0 -left-[17px] md:-left-[17px] w-8 h-8 bg-red rounded-full z-10 border-4 border-cream flex items-center justify-center">
        <span className="text-xs font-bold text-white">{year}</span>
      </div>
      
      {/* Content */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red">
        <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;