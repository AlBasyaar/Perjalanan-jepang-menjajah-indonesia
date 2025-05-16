import React from 'react';
import { ChevronDown } from 'lucide-react';
import bg1 from '../assets/bg1.jpg'

interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  overlay?: boolean;
  height?: 'small' | 'medium' | 'large' | 'full';
  buttons?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  image = 'https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  overlay = true,
  height = 'large',
  buttons
}) => {
  const getHeightClass = () => {
    switch (height) {
      case 'small': return 'min-h-[40vh]';
      case 'medium': return 'min-h-[60vh]';
      case 'full': return 'min-h-screen';
      default: return 'min-h-[80vh]';
    }
  };
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`relative flex items-center justify-center ${getHeightClass()}`}
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-navy/70"></div>
      )}
      
      <div className="container-custom relative z-10 text-center text-white">
        <h1 className="mb-6 font-serif animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {subtitle}
          </p>
        )}
        
        {buttons && (
          <div className="space-x-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            {buttons}
          </div>
        )}
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={42} />
      </button>
    </div>
  );
};

export default Hero;