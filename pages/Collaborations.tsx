import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Handshake, 
  Heart, 
  Camera, 
  Sparkles, 
  ShieldPlus, 
  GraduationCap, 
  Globe, 
  Users, 
  ArrowRight,
  MessageCircle,
  Gem,
  Palette,
  BookOpen,
  Tv
} from 'lucide-react';
import { useStore } from '../store';
import SEO from '../components/SEO';

const CollaborationCard: React.FC<{ 
  title: string; 
  icon: any; 
  items: string[]; 
  description: string;
  delay?: string;
}> = ({ title, icon: Icon, items, description, delay = "0" }) => (
  <div className={`bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-2xl transition-all duration-500 group animate-in fade-in slide-in-from-bottom-8`} style={{ animationDelay: `${delay}ms` }}>
    <div className="w-16 h-16 bg-[#F5E6E8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-all duration-500">
      <Icon className="text-[#D4AF37] group-hover:text-white" size={32} />
    </div>
    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed mb-8">{description}</p>
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"></div>
          <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const Collaborations: React.FC = () => {
  const { state } = useStore();
  const cleanPhone = state.settings.whatsappNumber.replace(/\D/g, '');

  const collaborationSections = [
    {
      title: "Bridal & Wedding",
      icon: Heart,
      description: "Official makeup collaborations for luxury weddings, high-end campaigns, and exclusive bridal styled shoots.",
      items: [
        "Luxury wedding planners",
        "Bridal fashion designers",
        "Jewellery brands",
        "Wedding photographers",
        "Bridal stylists"
      ]
    },
    {
      title: "Fashion & Editorial",
      icon: Camera,
      description: "Professional makeup services for fashion, editorial, and commercial projects demanding international standards.",
      items: [
        "Fashion designers",
        "Apparel & bridal wear brands",
        "Editorial shoots",
        "Fashion campaigns"
      ]
    },
    {
      title: "Beauty & Skincare",
      icon: Sparkles,
      description: "Brand-aligned makeup artistry and educational collaborations for premium global beauty companies.",
      items: [
        "Professional makeup brands",
        "Skincare & haircare brands",
        "Product launches",
        "Brand demonstrations"
      ]
    },
    {
      title: "Aesthetic & Wellness",
      icon: ShieldPlus,
      description: "Integrated beauty collaborations combining medical skin health with professional makeup artistry.",
      items: [
        "Dermatology clinics",
        "Aesthetic & skin clinics",
        "Luxury salons & spas"
      ]
    },
    {
      title: "Academic & Training",
      icon: GraduationCap,
      description: "Guest faculty roles, academic partnerships, and professional training modules for elite institutions.",
      items: [
        "Makeup & fashion institutes",
        "Media & styling colleges",
        "International cert bodies"
      ]
    },
    {
      title: "Media & Platforms",
      icon: Globe,
      description: "Featured makeup artist and beauty expert collaborations for leading lifestyle and wedding publications.",
      items: [
        "Fashion & beauty magazines",
        "Wedding platforms",
        "Digital beauty media"
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#FDFCFB]">
      <SEO 
        title="Collaborations & Brand Associations"
        description="Meerra Mevawala collaborates with select luxury brands, designers, and institutions to maintain excellence in the beauty industry."
      />

      {/* Hero Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-[#F5E6E8] rounded-full">
            <Handshake size={16} className="text-[#D4AF37]" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase">Strategic Partnerships</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-gray-900 mb-8 tracking-tighter leading-tight">
            Collaborations & <br className="hidden md:block" /> Brand Associations
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
            Meerra Mevawala is known for refined artistry, disciplined training, and industry-aligned standards. We collaborate with select professionals who share our commitment to excellence.
          </p>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto opacity-30"></div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5E6E8]/10 -skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collaborationSections.map((section, idx) => (
            <CollaborationCard 
              key={idx} 
              title={section.title} 
              icon={section.icon} 
              items={section.items} 
              description={section.description}
              delay={(idx * 100).toString()}
            />
          ))}
        </div>

        {/* Selective Influencer Row */}
        <div className="mt-16 bg-white p-12 rounded-[3rem] border border-gray-50 shadow-sm flex flex-col md:flex-row items-center gap-12 group hover:shadow-xl transition-all duration-500">
          <div className="w-20 h-20 bg-[#D4AF37] rounded-3xl flex items-center justify-center text-white shrink-0 shadow-xl shadow-[#D4AF37]/20">
            <Users size={40} />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-3xl font-serif font-bold mb-4">Selective Influencer Collaborations</h3>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              Collaborations are undertaken selectively with creators and professionals whose values align with quality, authenticity, and education. We prioritize meaningful partnerships that resonate with our brand's luxury identity.
            </p>
          </div>
          <div className="shrink-0">
             <div className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase bg-[#F5E6E8] px-6 py-2 rounded-full">
               Boutique Selection
             </div>
          </div>
        </div>
      </section>

      {/* Work With Us CTA */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Sparkles className="text-[#D4AF37] mx-auto mb-8" size={64} />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-white tracking-tight">Work With Us</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            For paid collaborations, brand associations, training partnerships, or professional projects, please get in touch with our team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Meerra, I'm reaching out from [Company Name] to discuss a potential collaboration/brand association.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-[#D4AF37] text-white px-12 py-6 rounded-2xl font-bold text-[10px] tracking-[0.4em] hover:bg-white hover:text-gray-900 transition-all shadow-2xl shadow-[#D4AF37]/20"
            >
              CONNECT ON WHATSAPP <MessageCircle size={16} className="group-hover:animate-bounce" />
            </a>
            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-2xl font-bold text-[10px] tracking-[0.4em] hover:bg-white hover:text-gray-900 transition-all"
            >
              VISIT CONTACT PAGE
            </Link>
          </div>

          <p className="mt-16 text-[10px] text-gray-500 font-bold tracking-[0.4em] uppercase">
            Collaborations are curated to maintain the highest standards of professionalism and brand integrity.
          </p>
        </div>

        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5E6E8] rounded-full blur-[120px]"></div>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;