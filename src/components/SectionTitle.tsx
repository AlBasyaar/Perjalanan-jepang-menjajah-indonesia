import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 fade-in ${center ? 'text-center' : ''}`}>
      <h2 className={`font-serif font-bold mb-4 ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl max-w-3xl ${center ? 'mx-auto' : ''} ${light ? 'text-cream-light/90' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-red mt-4 ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;