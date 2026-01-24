
import React, { useState } from 'react';
import { useStore } from '../store';
import { Link } from 'react-router-dom';
// Added ChevronRight to the imports
import { Clock, Tag, ShieldCheck, AlertCircle, Star, Play, X, Quote, CheckCircle2, Award, ExternalLink, ChevronDown, ChevronUp, HelpCircle, Landmark, ChevronRight } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-[#D4AF37]" /> : <ChevronDown className="text-gray-300 group-hover:text-[#D4AF37]" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const { state } = useStore();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const categories = ['All', 'Bridal', 'Party', 'Special'];
  const filteredServices = activeCategory === 'All' 
    ? state.services 
    : state.services.filter(s => s.category === activeCategory);

  const videoTestimonials = state.testimonials.filter(t => t.videoUrl);

  const faqs = [
    {
      question: "1. How early should I book my bridal makeup?",
      answer: "We recommend booking at least 2–3 months in advance to ensure your date is reserved. Our calendar fills up quickly during peak wedding seasons."
    },
    {
      question: "2. Do you offer a trial before the wedding day?",
      answer: "Yes, we offer a paid bridal makeup trial that allows you to experience your look beforehand and make any changes for your big day."
    },
    {
      question: "3. Is the bridal package customizable?",
      answer: "Absolutely! Each bridal package is fully customizable, including hair, makeup, saree draping, and looks for pre-wedding functions."
    },
    {
      question: "4. Will you travel to my venue?",
      answer: "Yes, we provide on-location bridal services for your comfort. Travel and accommodation charges apply depending on the distance."
    },
    {
      question: "5. Which brands do you use for makeup?",
      answer: "We use premium international makeup brands such as MAC, Huda Beauty, NARS, and more to ensure flawless, long-lasting results."
    },
    {
      question: "6. Will the makeup last all day and night?",
      answer: "Definitely. We specialize in long-wear bridal makeup that stays fresh and photo-ready from the pheras to the reception."
    },
    {
      question: "7. What hygiene measures do you follow?",
      answer: "We follow strict hygiene protocols. All tools are sanitized, and products are handled with utmost care for your safety."
    },
    {
      question: "8. Can you also do makeup for my family members?",
      answer: "Yes, we offer family makeup packages for the bride’s mother, sister, and bridesmaids so everyone looks their best."
    }
  ];

  return (
    <div className="pt-20 pb-24 bg-[#FDFCFB]">
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

      <section className="bg-white py-24 mb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">Our Artistry</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Makeup Services</h1>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg leading-relaxed font-light mb-12">
            With over 20 years of experience and 1500+ brides styled, Meerra Mevawala offers an unrivaled standard of beauty services using only premium international brands.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-10 py-3 rounded-full border text-[10px] font-bold tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#D4AF37] border-[#D4AF37] text-white shadow-xl shadow-[#D4AF37]/20' 
                    : 'bg-white border-gray-100 text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {/* Background Decorative */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5E6E8]/50 rounded-full blur-3xl"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-50 flex flex-col group hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                  <span className="text-[#D4AF37] font-bold text-lg whitespace-nowrap ml-4">{service.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-auto space-y-6">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Clock size={14} className="text-[#D4AF37]" /> {service.duration}</span>
                    <span className="flex items-center gap-2"><Tag size={14} className="text-[#D4AF37]" /> {service.category}</span>
                  </div>
                  <Link
                    to="/booking"
                    className="block w-full bg-gray-900 text-white text-center py-4 rounded-2xl font-bold text-[10px] tracking-widest hover:bg-[#D4AF37] transition-all transform hover:-translate-y-1"
                  >
                    BOOK THIS SERVICE
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Testimonials Mini Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-xs font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4">Witness the Magic</h2>
            <p className="text-3xl font-serif font-bold">Bridal Transformations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTestimonials.slice(0, 3).map((t) => (
              <div 
                key={t.id} 
                className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-video bg-gray-100"
                onClick={() => setActiveVideo(t.videoUrl!)}
              >
                <img src={t.videoThumbnail || t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white group-hover:bg-[#D4AF37] transition-all">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-6 text-white">
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-[10px] opacity-70 tracking-widest uppercase">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <HelpCircle className="text-[#D4AF37]" size={32} />
            <h2 className="text-4xl font-serif font-bold">Bridal Makeup – Frequently Asked Questions</h2>
          </div>
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
            <div className="max-w-3xl">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Terms & Conditions Section */}
        <section className="bg-gray-50 rounded-[3rem] p-10 md:p-16 border border-gray-200">
          <div className="flex items-center gap-4 mb-10">
            <AlertCircle className="text-[#D4AF37]" size={32} />
            <h2 className="text-2xl font-serif font-bold">Booking Terms & Conditions</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <ul className="space-y-4">
              {[
                "30% advance is required for a confirmed booking.",
                "All bridal trials are chargeable and by appointment only.",
                "We use HIGH-END international products exclusively for all services.",
                "Outstation Travel, Stay & Food expenses are to be borne by the client.",
                "Bookings outside Mumbai will attract a minimum 30% extra charge.",
                "Bride lenses and lashes are provided FREE; flowers are extra."
              ].map((term, i) => (
                <li key={i} className="flex gap-4 text-gray-600 text-sm">
                  <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {[
                "Waiting time exceeding one hour will be charged at hourly rates.",
                "Any accessories broken or lost during the event shall be charged extra.",
                "Full payment must be cleared prior to or on the event day via QRCODE / GPAY.",
                "Artists require a separate room or area next to/nearby the Bride's room.",
                "We do not travel by BUS or TRAIN for professional services.",
                "Clients must share exact Ready Time and Location Map 48 hours prior."
              ].map((term, i) => (
                <li key={i} className="flex gap-4 text-gray-600 text-sm">
                  <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200">
            <div className="flex items-center gap-4 mb-6">
              <Landmark className="text-[#D4AF37]" size={24} />
              <h4 className="font-serif font-bold text-lg">Official Bank Details</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Account Holder</p>
                <p className="font-bold">Mrs. Meerra Mehul Mevawala</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Bank & Branch</p>
                <p className="font-bold">IDFC First Bank, Ghatkopar East</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Account / IFSC</p>
                <p className="font-bold">10092166725 / IDFB0040159</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
              <p className="text-gray-500 text-xs">Payment is accepted via Bank Transfer, GPay, or Razorpay.</p>
              <Link to="/booking" className="text-[#D4AF37] font-bold text-[10px] tracking-widest flex items-center gap-2">
                PROCEED TO BOOKING <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
