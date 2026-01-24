
import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="bg-white py-24 mb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">Beauty Insights</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">The Beauty Journal</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Curated tips, industry trends, and professional secrets from the desk of Meerra Mevawala.
          </p>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5E6E8]/50 rounded-full blur-3xl"></div>
      </section>

      {/* Placeholder Content */}
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-[3rem] p-16 md:p-32 border border-gray-100 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-20 h-20 bg-[#F5E6E8] rounded-full flex items-center justify-center mx-auto mb-8">
              <BookOpen className="text-[#D4AF37]" size={40} />
            </div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Journal is Being Curated</h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-10">
              We are currently crafting high-quality articles, tutorials, and trend reports to help you master the art of beauty. Check back soon for our first edition.
            </p>
            <div className="flex items-center justify-center gap-2 text-[#D4AF37]">
              <Sparkles size={16} />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Launching Soon</span>
              <Sparkles size={16} />
            </div>
          </div>
          
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
