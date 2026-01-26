import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-24 right-6 z-[150] transition-all duration-500 transform ${
      isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
    }`}>
      <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-white text-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl border border-gray-100 hover:bg-[#D4AF37] hover:text-white hover:scale-110 transition-all duration-300 group"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} className="group-hover:animate-bounce" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;