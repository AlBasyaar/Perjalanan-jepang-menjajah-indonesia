import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, GalleryHorizontalEnd } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy text-white shadow-lg py-3' : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl font-bold tracking-wide">Sejarah Masuknya Jepang ke Indonesia</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition hover:text-cream-light ${isActive ? 'border-b-2 border-red' : ''}`
              }
            >
              Beranda
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `font-medium transition hover:text-cream-light ${isActive ? 'border-b-2 border-red' : ''}`
              }
            >
              Tentang
            </NavLink>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-navy text-white py-4 shadow-lg animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            <NavLink 
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `py-2 px-4 font-medium transition hover:bg-navy-light rounded ${isActive ? 'bg-navy-light' : ''}`
              }
            >
              Beranda
            </NavLink>
            <NavLink 
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `py-2 px-4 font-medium transition hover:bg-navy-light rounded ${isActive ? 'bg-navy-light' : ''}`
              }
            >
              Tentang
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;