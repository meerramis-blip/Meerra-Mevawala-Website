
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 z-[100] animate-in slide-in-from-bottom-10 fade-in duration-700">
      <div className="max-w-4xl mx-auto bg-gray-900/95 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center shrink-0">
          <ShieldCheck className="text-[#D4AF37]" size={24} />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <h4 className="text-white font-serif font-bold text-lg mb-1">Cookie Preferences</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            We use cookies to enhance your experience, analyze site traffic, and serve luxury content tailored to you. 
            By clicking "Accept All", you agree to our use of cookies as described in our{' '}
            <Link to="/cookie-policy" className="text-[#D4AF37] hover:underline">Cookie Policy</Link>.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="flex-grow md:flex-none px-6 py-3 rounded-full text-[10px] font-bold tracking-widest text-gray-400 hover:text-white transition-colors"
          >
            DECLINE
          </button>
          <button 
            onClick={handleAccept}
            className="flex-grow md:flex-none px-8 py-3 rounded-full text-[10px] font-bold tracking-widest bg-[#D4AF37] text-white hover:bg-white hover:text-gray-900 transition-all shadow-lg shadow-[#D4AF37]/20"
          >
            ACCEPT ALL
          </button>
        </div>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors md:hidden"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
