
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { Sparkles, GraduationCap, Star, ArrowRight, Play, X, Quote, History, Award, Heart, User } from 'lucide-react';
import SEO from '../components/SEO';
import { EditableSection } from '../components/EditorGuide';

const Home: React.FC = () => {
  const { state } = useStore();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoTestimonials = state.testimonials.filter(t => t.videoUrl);
  const specialServices = state.services.filter(s => s.id === 's5' || s.id === 's6');

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Best Bridal Makeup Artist & Academy in Mumbai"
        description="Meerra Mevawala is Mumbai's top bridal makeup artist and founder of MIS Academy. Specializing in luxury HD bridal makeup and CIDESCO certified courses in Ghatkopar East."
      />
      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-in fade-in duration-300">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-8 right-8 text-white hover:text-[#D4AF37] transition-colors"
          >
            <X size={40} />
          </button>
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src={`${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <EditableSection label="Hero Section" file="Home.tsx" variable="Hero Content">
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697728c3c1fa0c5ebdb42d8b.png?q=80&w=2071&auto=format&fit=crop"
              alt="Luxury Makeup Artistry in Mumbai"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 max-w-5xl">
            <div className="mb-6 inline-block animate-in fade-in slide-in-from-top duration-1000">
              <span className="text-xs font-bold tracking-[0.5em] text-[#D4AF37] uppercase">Top Rated Makeup Artist Mumbai</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 tracking-tight animate-in fade-in slide-in-from-bottom duration-1000">
              Luxury Bridal <br /> Makeup & Academy
            </h1>
            <p className="text-sm md:text-base font-bold mb-12 text-gray-300 tracking-[0.3em] uppercase animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              Makeup Artist & Cosmetologist <span className="mx-2 text-[#D4AF37]">•</span> Professional Artist Mumbai
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              <Link
                to="/booking"
                className="bg-[#D4AF37] text-white px-12 py-5 rounded-full font-bold tracking-widest text-[10px] hover:bg-white hover:text-black transition-all transform hover:scale-105 shadow-2xl shadow-[#D4AF37]/40"
              >
                BOOK YOUR BRIDAL LOOK
              </Link>
              <Link
                to="/academy"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full font-bold tracking-widest text-[10px] hover:bg-white hover:text-black transition-all"
              >
                JOIN THE ACADEMY
              </Link>
            </div>
          </div>
        </section>
      </EditableSection>

      {/* Legacy Highlights */}
      <EditableSection label="Legacy Highlights" file="Home.tsx" variable="Stats Row">
        <section className="py-12 bg-gray-900 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-4">
              <History className="text-[#D4AF37]" size={40} />
              <div>
                <p className="text-white font-serif font-bold text-xl">20+ Years</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Experience in Mumbai</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Award className="text-[#D4AF37]" size={40} />
              <div>
                <p className="text-white font-serif font-bold text-xl">Award Winning</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Best Artist 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <GraduationCap className="text-[#D4AF37]" size={40} />
              <div>
                <p className="text-white font-serif font-bold text-xl">CIDESCO Certified</p>
                <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">Media Makeup Artist & Cosmetologist</p>
              </div>
            </div>
          </div>
        </section>
      </EditableSection>

      {/* Services Highlights */}
      <EditableSection label="Services List" file="constants.ts" variable="INITIAL_STATE.services">
        <section className="py-24 bg-[#FDFCFB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-4">Bridal Makeup Services</h2>
              <p className="text-4xl font-serif font-bold text-gray-900">Luxury Bridal Transformations</p>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {state.services.slice(0, 3).map((service) => (
                <div key={service.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-6 aspect-[4/5] rounded-2xl">
                    <img
                      src={service.image}
                      alt={`${service.title} - Bridal Makeup Artist Mumbai`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-[#D4AF37] transition-colors uppercase">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link to="/services" className="text-[#D4AF37] text-xs font-bold tracking-widest flex items-center">
                    VIEW SERVICE DETAILS <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </EditableSection>

      {/* Academy Highlights */}
      <EditableSection label="Academy Highlights" file="constants.ts" variable="INITIAL_STATE.courses">
        <section className="py-24 bg-[#F5E6E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974?q=80&w=1935&auto=format&fit=crop"
                    alt="Professional Makeup School Mumbai"
                    className="rounded-2xl shadow-2xl relative z-10"
                  />
                  <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#D4AF37] -z-0 rounded-2xl"></div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <GraduationCap className="text-[#D4AF37] mb-6" size={48} />
                <h2 className="text-4xl font-serif font-bold mb-6">International Makeup School Mumbai</h2>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  Step into the professional world of beauty with our internationally recognized certification programs at <strong>Meerras International School of Makeup (MIS)</strong>. From bridal expertise to editorial trends, learn from industry leaders in Ghatkopar East, Mumbai.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center space-x-3 text-gray-700">
                    <span className="text-sm font-medium">Hands-on International Curriculum certified training</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700">
                    <span className="text-sm font-medium">Govt. of Maharashtra approved certification</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700">
                    <span className="text-sm font-medium">Placement assistance with top beauty brands</span>
                  </li>
                </ul>
                <Link
                  to="/academy"
                  className="inline-block bg-[#D4AF37] text-white px-10 py-4 rounded-full font-bold text-[10px] tracking-widest hover:bg-[#B89830] transition-colors shadow-lg shadow-[#D4AF37]/30"
                >
                  EXPLORE COURSES IN MUMBAI
                </Link>
              </div>
            </div>
          </div>
        </section>
      </EditableSection>

      {/* Testimonials Highlights */}
      <EditableSection label="Testimonials" file="constants.ts" variable="INITIAL_STATE.testimonials">
        <section className="py-24 bg-[#FDFCFB] overflow-hidden border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-4">Reviews & Transformations</h2>
              <p className="text-4xl font-serif font-bold text-gray-900">What Our Brides Say</p>
              <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {videoTestimonials.map((t) => (
                <div 
                  key={t.id} 
                  className="relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-2xl bg-gray-100"
                  onClick={() => setActiveVideo(t.videoUrl!)}
                >
                  <div className="aspect-[9/16] overflow-hidden">
                    <img 
                      src={t.videoThumbnail || t.image} 
                      alt={`${t.name} - Bridal Review`} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:via-black/40 transition-all duration-500"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#D4AF37]/90 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-[#D4AF37]/40 relative">
                      <Play fill="currentColor" size={32} className="ml-1" />
                      <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] animate-ping opacity-20"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                      <Quote size={20} fill="currentColor" className="opacity-50" />
                      <div className="flex">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" className="text-[#D4AF37]" />)}
                      </div>
                    </div>
                    <h4 className="text-2xl font-serif font-bold mb-1">{t.name}</h4>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-300 opacity-80">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </EditableSection>
    </div>
  );
};

export default Home;
