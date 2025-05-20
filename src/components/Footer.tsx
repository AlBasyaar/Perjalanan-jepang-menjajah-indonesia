import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryHorizontalEnd, Mail, Phone, MapPin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
          
              <span className="font-serif text-xl font-bold tracking-wide">Luka Sejarah, Semangat Bangsa</span>
            </Link>
            <p className="text-cream-light/80 mb-4">
             Situs ini bertujuan untuk mengedukasi masyarakat tentang masa pendudukan Jepang di Indonesia (1942–1945), 
             sebuah fase sejarah yang penuh tantangan dan menjadi fondasi penting dalam perjuangan meraih kemerdekaan.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/AlBasyaar" aria-label="Github" className="text-cream-light hover:text-red transition">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-light/80 hover:text-cream transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream-light/80 hover:text-cream transition">
                  Tentang
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-red mt-1 flex-shrink-0" />
                <span className="text-cream-light/80">
                  Jakarta, Indonesia
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-red mt-1 flex-shrink-0" />
                <span className="text-cream-light/80">
                 smknegeri69jkt@gmail.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-red mt-1 flex-shrink-0" />
                <span className="text-cream-light/80">
                  +62 813-8877-2645
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-light/70 text-center md:text-left mb-4 md:mb-0">
            &copy; {currentYear} Sejarah Pendudukan Jepang di Indonesia. Hak Cipta Dilindungi.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="#" className="text-cream-light/70 hover:text-cream-light transition">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-cream-light/70 hover:text-cream-light transition">
              Syarat Penggunaan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;