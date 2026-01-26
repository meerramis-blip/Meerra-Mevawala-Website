import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { useStore } from '../store';

const PinterestIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M8 20c.4.3 1.1.2 1.4-.2l1.6-4.5c.1-.4.3-.6.5-.6s.4.2.5.6c.1.4 1 3.5 1.1 3.9.1.4.5.7.9.7 2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4c0 1.1.4 2.1 1.1 2.8.2.2.3.5.2.7l-.5 1.4c-.1.2-.3.3-.5.3-.3 0-.6-.1-.8-.3C7.4 15.1 7 13.6 7 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6c-1.1 0-2.1-.4-2.8-1.1L8 20z" />
  </svg>
);

const Footer: React.FC = () => {
  const { state } = useStore();
  const { settings } = state;

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="mb-8">
              <img 
                src="logo.png" 
                alt="Meerra Mevawala Logo" 
                className="h-24 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expert Makeup Artistry & CIDESCO Certified Media Makeup Artist & Cosmetologist. Creating timeless beauty and professional masters in Mumbai.
            </p>
            {/* Social Icons - Set in one line */}
            <div className="flex items-center gap-3 md:gap-4">
              <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all" aria-label="Instagram"><Instagram size={18} /></a>
              <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all" aria-label="Facebook"><Facebook size={18} /></a>
              <a href={settings.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all" aria-label="YouTube"><Youtube size={18} /></a>
              <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all" aria-label="Twitter"><Twitter size={18} /></a>
              <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={settings.pinterestUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all" aria-label="Pinterest"><PinterestIcon size={18} /></a>
              <a href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all" aria-label="WhatsApp"><MessageCircle size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-[#D4AF37]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Makeup Services</Link></li>
              <li><Link to="/academy" className="hover:text-white transition-colors">Academy</Link></li>
              <li><a href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent("Hi, I'd like to book an appointment.")}`} className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-8 text-[#D4AF37]">Contact Us</h4>
            <ul className="space-y-6 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#D4AF37] shrink-0" />
                <span className="leading-relaxed">{settings.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#D4AF37] shrink-0" />
                <span>{settings.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#D4AF37] shrink-0" />
                <span>{settings.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-[10px] text-gray-500 font-medium tracking-[0.2em] uppercase">
          <p className="mb-2">© {new Date().getFullYear()} {settings.brandName}. All Rights Reserved.</p>
          {/* Developer Credit */}
          <p className="mb-6">
            Developed by : <a href="https://www.mehulmevawalla.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline transition-colors">Mehul Mevawalla</a>
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;