
import React from 'react';
import { useStore } from '../store';
import { ExternalLink, Sparkles, Quote, ArrowRight, Heart } from 'lucide-react';

const Blog: React.FC = () => {
  const { state } = useStore();
  
  // Placeholder for the external GHL blog link - user can update this
  const ghlBlogUrl = "https://www.meerramevawala.com/blog"; 

  return (
    <div className="pt-20 min-h-screen bg-[#FDFCFB]">
      {/* Top Part: External Blog CTA */}
      <section className="relative py-32 md:py-48 overflow-hidden bg-white">
        {/* Subtle Luxury Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5E6E8]/20 -skew-x-12 translate-x-1/4"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 border border-[#D4AF37]/30 rounded-full animate-in fade-in slide-in-from-top duration-700">
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase">The Art of Beauty</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-gray-900 mb-8 tracking-tighter leading-tight">
            The Meerra Mevawala <br className="hidden md:block" /> Journal
          </h1>
          
          <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl mb-12 font-light leading-relaxed">
            Discover professional secrets, latest trends, and in-depth beauty insights directly from our exclusive journal.
          </p>

          <a 
            href={ghlBlogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 bg-gray-900 text-white px-12 py-6 rounded-2xl font-bold text-xs tracking-[0.3em] hover:bg-[#D4AF37] transition-all shadow-2xl shadow-gray-200"
          >
            <span>CLICK HERE TO SEE MY BLOG POSTS</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-all">
              <ExternalLink size={16} />
            </div>
          </a>
        </div>
      </section>

      {/* Second Part: Testimonial Gallery Section */}
      <section id="testimonials" className="py-32 bg-[#FDFCFB] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-xs font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4">Voices of Beauty</h2>
              <p className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Love Stories & Bridal Transformations
              </p>
            </div>
            <div className="flex items-center gap-4 text-gray-400 font-medium text-sm border-b border-gray-100 pb-2">
              <Heart size={18} className="text-[#D4AF37]" />
              <span>Captured Moments of Pure Elegance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {state.testimonials.map((t, idx) => (
              <div 
                key={t.id} 
                className={`group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm hover:shadow-2xl transition-all duration-700 ${
                  idx % 2 === 1 ? 'md:translate-y-12' : ''
                }`}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={t.videoThumbnail || t.image} 
                    alt={t.lookTitle || t.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* Luxury Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end">
                  <Quote className="text-[#D4AF37] mb-6 transform -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 delay-100" size={32} />
                  
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {t.lookTitle || "Signature Transformation"}
                    </h3>
                    <p className="text-gray-400 text-xs italic line-clamp-3 mb-6">
                      "{t.content}"
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-white/10">
                      <span className="text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase">{t.role}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-1 h-1 rounded-full bg-[#D4AF37]"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Static Caption (Visible when not hovered) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/90 backdrop-blur-md border-t border-gray-50 transform group-hover:translate-y-full transition-transform duration-500">
                   <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mb-1">{t.role}</p>
                   <h4 className="text-lg font-serif font-bold text-gray-900">{t.lookTitle || t.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-32 text-center">
            <div className="inline-block p-12 bg-white rounded-[3rem] border border-gray-100 shadow-sm max-w-2xl">
              <h3 className="text-2xl font-serif font-bold mb-4">Share Your Experience</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Were you part of our transformations? We'd love to feature your story and artwork here.
              </p>
              <a 
                href={`https://wa.me/${state.settings.whatsappNumber.replace(/\D/g, '')}?text=Hi Meerra, I'd like to share my testimonial/transformation for your blog gallery.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-bold text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-3 hover:text-[#D4AF37] transition-colors"
              >
                SUBMIT YOUR LOOK <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
