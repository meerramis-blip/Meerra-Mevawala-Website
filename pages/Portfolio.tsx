
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, Trophy, Award, ExternalLink, ArrowRight, Heart, Camera, Star, Crown } from 'lucide-react';

type Category = 'Professional' | 'Brides' | 'Students' | 'Awards';

interface PortfolioItem {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  image: string;
  size?: 'normal' | 'large' | 'tall';
}

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('Professional');

  const portfolioItems: PortfolioItem[] = [
    // PROFESSIONAL WORK
    { id: 'p1', category: 'Professional', title: 'Miss Earth 2021', subtitle: 'Editorial Makeup for PNI Magazine', image: 'https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=1964&auto=format&fit=crop', size: 'large' },
    { id: 'p2', category: 'Professional', title: 'Lakme Fashion Week', subtitle: 'Backstage High-Fashion Artistry', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop' },
    { id: 'p3', category: 'Professional', title: 'Miss Eco International', subtitle: 'Stars Cosmetics Core Team', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop', size: 'tall' },
    { id: 'p4', category: 'Professional', title: 'Bharat Icon Awards', subtitle: 'Celebrity Styling', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1935&auto=format&fit=crop' },
    
    // BRIDES
    { id: 'b1', category: 'Brides', title: 'The Royal Wedding', subtitle: 'Traditional Red Bridal Glory', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop', size: 'large' },
    { id: 'b2', category: 'Brides', title: 'Contemporary Elegance', subtitle: 'Pastel Reception Look', image: 'https://images.unsplash.com/photo-1595475253508-37299092413e?q=80&w=2070&auto=format&fit=crop', size: 'tall' },
    { id: 'b3', category: 'Brides', title: 'South Indian Grace', subtitle: 'Sari Draping & Traditional Glam', image: 'https://images.unsplash.com/photo-1621184414184-0155f0ce820a?q=80&w=1974&auto=format&fit=crop' },
    { id: 'b4', category: 'Brides', title: 'Minimalist Bride', subtitle: 'Dewy Finish & Nude Tones', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop' },

    // STUDENTS
    { id: 's1', category: 'Students', title: 'Editorial Assessment', subtitle: 'By Batch of 2023', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2070&auto=format&fit=crop', size: 'large' },
    { id: 's2', category: 'Students', title: 'SFX & Prosthetics', subtitle: 'Cinematic Makeup Module', image: 'https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=2070&auto=format&fit=crop' },
    { id: 's3', category: 'Students', title: 'Bridal Masterclass', subtitle: 'Practical Training Sessions', image: 'https://images.unsplash.com/photo-1503910361307-44301bd23c59?q=80&w=1974&auto=format&fit=crop', size: 'tall' },
    { id: 's4', category: 'Students', title: 'Portfolio Day', subtitle: 'Student Final Projects', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2001&auto=format&fit=crop' },

    // AWARDS
    { id: 'a1', category: 'Awards', title: 'Best Woman Entrepreneur', subtitle: 'RBI Bank 2022', image: 'https://images.unsplash.com/photo-1578351649704-955a82b090b4?q=80&w=1974&auto=format&fit=crop', size: 'large' },
    { id: 'a2', category: 'Awards', title: 'CIDESCO Certification', subtitle: 'Zurich International Standard', image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop' },
    { id: 'a3', category: 'Awards', title: 'National Beauty Award', subtitle: 'Most Creative Makeup Artist', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=1974&auto=format&fit=crop', size: 'tall' },
  ];

  const filteredItems = portfolioItems.filter(item => item.category === activeTab);

  const tabs: { id: Category; label: string; icon: any }[] = [
    { id: 'Professional', label: 'WORK DONE BY MEERRA', icon: Camera },
    { id: 'Brides', label: 'BRIDES BY MEERRA', icon: Heart },
    { id: 'Students', label: 'STUDENTS WORK', icon: GraduationCap },
    { id: 'Awards', label: 'ACHIEVEMENTS', icon: Trophy },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FDFCFB]">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#D4AF37] uppercase mb-4 block">Visual Legacy</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-gray-900 mb-8 tracking-tighter">Artistry in Motion</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            A curated collection of transformations, professional milestones, and the rising talent of our international academy.
          </p>
        </div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F5E6E8]/30 rounded-full blur-3xl"></div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-24 z-40 bg-white/95 backdrop-blur-md border-y border-gray-100 py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-center items-center min-w-max gap-4 sm:gap-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-3 transition-all duration-500 ${
                  activeTab === tab.id 
                    ? 'text-gray-900' 
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                  activeTab === tab.id ? 'bg-[#D4AF37] text-white shadow-lg' : 'bg-gray-50 group-hover:bg-gray-100'
                }`}>
                  <tab.icon size={18} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] whitespace-nowrap">
                  {tab.label}
                </span>
                {activeTab === tab.id && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] ml-1"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`relative break-inside-avoid overflow-hidden rounded-[2rem] group bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer ${
                item.size === 'large' ? 'aspect-[4/5]' : item.size === 'tall' ? 'aspect-[2/3]' : 'aspect-square'
              }`}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Subtle Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-2 block">{item.category}</span>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{item.subtitle}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTAs based on Category */}
        <div className="mt-24 text-center">
          {activeTab === 'Brides' && (
            <div className="bg-[#F5E6E8] p-16 rounded-[3rem] shadow-xl relative overflow-hidden max-w-4xl mx-auto">
              <Crown className="text-[#D4AF37] mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-serif font-bold mb-6">Become a Meerra Mevawala Bride</h2>
              <p className="text-gray-600 mb-10 max-w-xl mx-auto">Every bride has a story. Let us help you tell yours through the art of luxury makeup and traditional draping.</p>
              <Link to="/booking" className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-[10px] tracking-widest hover:bg-[#D4AF37] transition-all shadow-xl shadow-gray-200">
                BOOK YOUR CONSULTATION
              </Link>
            </div>
          )}

          {activeTab === 'Students' && (
            <div className="bg-gray-900 p-16 rounded-[3rem] shadow-xl relative overflow-hidden max-w-4xl mx-auto text-white">
              <GraduationCap className="text-[#D4AF37] mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-serif font-bold mb-6">Create Your Own Portfolio</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">Join the next batch at MIS and learn to create professional looks that command attention in the international beauty industry.</p>
              <Link to="/academy" className="bg-[#D4AF37] text-white px-12 py-5 rounded-full font-bold text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-xl shadow-[#D4AF37]/20">
                EXPLORE COURSES
              </Link>
            </div>
          )}

          {activeTab === 'Awards' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                { title: 'Best Woman Entrepreneur', year: '2022', icon: Trophy },
                { title: 'CIDESCO Switzerland', year: 'Expert', icon: Award },
                { title: 'ISO 9001:2015', year: 'Certified', icon: Star },
                { title: '15+ Jury Roles', year: 'Global', icon: Crown },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-[#D4AF37] transition-all">
                  <div className="w-16 h-16 bg-[#FDFCFB] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-white transition-all text-[#D4AF37]">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-[10px] font-bold text-[#D4AF37] tracking-[0.2em]">{item.year}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Instagram Feed Style CTA */}
      <section className="py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-serif font-bold mb-8 flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-gray-200"></span>
            FOLLOW THE JOURNEY @MEERRAMEVAWALA
            <span className="w-12 h-px bg-gray-200"></span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://instagram.com/meerramevawala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden w-24 h-24 sm:w-40 sm:h-40 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
              <img src="https://images.unsplash.com/photo-1594465919760-441fe5908ab0?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Insta" />
            </a>
            <a 
              href="https://instagram.com/meerramevawala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden w-24 h-24 sm:w-40 sm:h-40 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
              <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Insta" />
            </a>
            <a 
              href="https://instagram.com/meerramevawala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden w-24 h-24 sm:w-40 sm:h-40 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
              <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Insta" />
            </a>
            <a 
              href="https://instagram.com/meerramevawala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:block group relative overflow-hidden w-40 h-40 rounded-2xl"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all z-10"></div>
              <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&h=200&auto=format&fit=crop" className="w-full h-full object-cover transition-transform group-hover:scale-110" alt="Insta" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
