
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useStore } from '../store';

const Navbar: React.FC = () => {
  const { state } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Makeup', path: '/services' },
    { name: 'Academy', path: '/academy' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <img 
                src="logo.png" 
                alt="Meerra Mevawala" 
                className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105 brightness-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  const parent = (e.target as HTMLImageElement).parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-xl font-serif font-bold tracking-widest text-[#D4AF37]">MEERRA MEVAWALA</span>';
                  }
                }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold tracking-[0.2em] transition-colors hover:text-[#D4AF37] ${
                  isActive(link.path) ? 'text-[#D4AF37]' : 'text-gray-600'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-[#D4AF37] text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.15em] hover:bg-gray-900 transition-all shadow-lg shadow-[#D4AF37]/20"
            >
              BOOK NOW
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-6 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-4 text-xs font-bold tracking-widest border-b border-gray-50 ${
                  isActive(link.path) ? 'text-[#D4AF37] bg-gray-50' : 'text-gray-600'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-8 bg-[#D4AF37] text-white px-6 py-4 rounded-xl font-bold tracking-widest text-xs"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
