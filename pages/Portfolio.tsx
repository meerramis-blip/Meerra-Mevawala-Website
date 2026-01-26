import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, Trophy, Award, ExternalLink, ArrowRight, Heart, Camera, Star, Crown, Instagram, Plus, MessageCircle, Medal } from 'lucide-react';
import { useStore } from '../store';

type Category = 'Professional' | 'Brides' | 'Students' | 'Awards';

interface PortfolioItem {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  image: string;
  size?: 'normal' | 'large' | 'tall';
}

// Curated 12 high-quality professional work items
const PROFESSIONAL_WORKS = [
  { id: 'pw-1', title: 'Editorial Masterclass', subtitle: 'Fashion Week Look', image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b067c82b00b.jfif' },
  { id: 'pw-2', title: 'Celestial Glow', subtitle: 'Signature Bridal Prep', image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/6975d397eb392b4b7242cac3.jpeg' },
  { id: 'pw-3', title: 'Editorial Red', subtitle: 'PNI Magazine Cover', image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b107082b00a.jfif' },
  { id: 'pw-4', title: 'Golden Hour', subtitle: 'Luxury Reception Glam', image: 'https://images.unsplash.com/photo-1522338228048-3506018615c1?q=80&w=800&auto=format&fit=crop' },
  { id: 'pw-5', title: 'Modern Traditional', subtitle: 'Contemporary Bridal', image: 'https://images.unsplash.com/photo-1595475253508-37299092413e?q=80&w=800&auto=format&fit=crop' },
  { id: 'pw-6', title: 'Royal Heritage', subtitle: 'Traditional Indian Elegance', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop' },
  { id: 'pw-7', title: 'The Dewy Look', subtitle: 'Minimalist Editorial', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop' },
  { id: 'pw-8', title: 'High Definition Art', subtitle: 'HD Professional Finish', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop' },
  { id: 'pw-9', title: 'Velvet Softness', subtitle: 'Classic Wedding Glam', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop' },
  { id: 'pw-10', title: 'Runway Ready', subtitle: 'Backstage Chronicles', image: 'https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=800&auto=format&fit=crop' },
  { id: 'pw-11', title: 'Timeless Beauty', subtitle: 'Maturity & Grace', image: 'https://images.unsplash.com/photo-1503910361307-44301bd23c59?q=80&w=800&auto=format&fit=crop' },
  { id: 'pw-12', title: 'Cinematic Finish', subtitle: 'Film & Media Masterwork', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop' },
];

// Curated 12 bridal high-quality works
const BRIDE_WORKS = [
  { id: 'bw-1', title: 'Traditional Red', subtitle: 'Royal Bridal Glow', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-2', title: 'Pastel Dream', subtitle: 'Soft Reception Look', image: 'https://images.unsplash.com/photo-1595475253508-37299092413e?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-3', title: 'Sari Draping', subtitle: 'South Indian Grace', image: 'https://images.unsplash.com/photo-1621184414184-0155f0ce820a?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-4', title: 'Modern Bride', subtitle: 'Dewy Finish & Nude Tones', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-5', title: 'Bridal Sangeet', subtitle: 'Sparkling Glamour', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-6', title: 'Mehendi Look', subtitle: 'Vibrant & Natural', image: 'https://images.unsplash.com/photo-1515688594583-b0fe057204f3?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-7', title: 'Reception Glow', subtitle: 'High-End Artistry', image: 'https://images.unsplash.com/photo-1516584227406-fc053b47c9af?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-8', title: 'Classic Indian', subtitle: 'Heritage Look', image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-9', title: 'Contemporary Glam', subtitle: 'Bridal Portfolios', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-10', title: 'Cocktail Night', subtitle: 'Sleek & Sophisticated', image: 'https://images.unsplash.com/photo-1525129498994-5805ec7859d3?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-11', title: 'Haldi Glow', subtitle: 'Fresh & Radiant', image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=800&auto=format&fit=crop' },
  { id: 'bw-12', title: 'The Grand Entry', subtitle: 'Final Touch-ups', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop' },
];

// Curated 12 student works for a luxury editorial look
const STUDENT_WORKS = [
  { id: 'sw-1', title: 'Editorial Assessment', subtitle: 'Batch of 2023 - High Fashion', image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-2', title: 'SFX Artistry', subtitle: 'Cinematic Makeup Module', image: 'https://images.unsplash.com/photo-1526045431048-f857369aba09?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-3', title: 'Bridal Masterclass', subtitle: 'Traditional South Indian', image: 'https://images.unsplash.com/photo-1503910361307-44301bd23c59?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-4', title: 'Nail Technician', subtitle: 'Advanced Acrylic Art', image: 'https://images.unsplash.com/photo-1610992015732-2449b0c26670?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-5', title: 'Runway Prep', subtitle: 'LFW Inspired Backstage', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-6', title: 'Soft Glam', subtitle: 'Student Final Portfolio', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-7', title: 'Arabic Eyes', subtitle: 'Eye Mapping Technique', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-8', title: 'Character Design', subtitle: 'Fantasy Editorial Project', image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b107082b00a.jfif' },
  { id: 'sw-9', title: 'Russian Filing', subtitle: 'Nail Salon Module', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-10', title: 'Thermal Styling', subtitle: 'Hollywood Waves Practice', image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-11', title: 'The Modern Bride', subtitle: 'Student Exam Transformation', image: 'https://images.unsplash.com/photo-1525129498994-5805ec7859d3?q=80&w=800&auto=format&fit=crop' },
  { id: 'sw-12', title: 'HD Skin Master', subtitle: 'Advanced Blending Module', image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop' },
];

// Curated 12 achievements for a luxury editorial look
const ACHIEVEMENT_WORKS = [
  { id: 'aw-1', title: 'Best Woman Entrepreneur', subtitle: 'RBI Bank Award 2022', image: 'https://images.unsplash.com/photo-1578351649704-955a82b090b4?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-2', title: 'CIDESCO International', subtitle: 'Certified Media Artist - Zurich', image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-3', title: 'National Beauty Award', subtitle: 'Most Creative MUA India', image: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-4', title: 'Bharat Icon 2019', subtitle: 'Official Makeup Core Team', image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b107082b00a.jfif' },
  { id: 'aw-5', title: 'Miss Earth 2021', subtitle: 'Official Editorial Partner', image: 'https://storage.googleapis.com/msgsndr/MtdLe3GrtN7nyamCg5sb/media/697209e5eb392b067c82b00b.jfif' },
  { id: 'aw-6', title: 'Mrs Asia Universe', subtitle: 'Celebrity Makeup Partner', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-7', title: 'Miss Eco International', subtitle: 'Global Artistry Core Team', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-8', title: 'International Expo', subtitle: 'Excellence in Makeup Education', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-9', title: 'HBS India 2019', subtitle: 'Ardell Lashes Stage Show', image: 'https://images.unsplash.com/photo-1522338228048-3506018615c1?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-10', title: 'Times Power Woman', subtitle: 'Industry Leadership Award', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-11', title: 'WeddingSutra 2024', subtitle: 'Influencer of the Year', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop' },
  { id: 'aw-12', title: 'Maharashtra Pride', subtitle: 'Beauty Entrepreneur of State', image: 'https://images.unsplash.com/photo-1516584227406-fc053b47c9af?q=80&w=800&auto=format&fit=crop' },
];

const Portfolio: React.FC = () => {
  const { state } = useStore();
  const [activeTab, setActiveTab] = useState<Category>('Professional');
  const cleanPhone = state.settings.whatsappNumber.replace(/\D/g, '');
  const instagramUrl = state.settings.instagramUrl;
  const bridalInstagramUrl = "https://www.instagram.com/makeupartist.meerramevawala";
  const misInstagramUrl = "https://www.instagram.com/mis.makeupschool";

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
        {activeTab === 'Professional' ? (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.6em] text-[#D4AF37] uppercase mb-4 block">Curated Artistry</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Professional Portfolios</h2>
              <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6 opacity-30"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {PROFESSIONAL_WORKS.map((work, idx) => (
                <div key={work.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-gray-50 transition-all duration-700 shadow-sm hover:shadow-2xl">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                       <Plus className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" size={32} />
                    </div>
                    <div className="absolute top-6 left-6 text-white/50 text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight">{work.title}</h3>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">{work.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-16">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-4 bg-white border border-gray-100 text-gray-900 px-16 py-6 rounded-full font-bold text-[10px] tracking-[0.4em] hover:bg-gray-900 hover:text-white transition-all shadow-xl shadow-gray-200">
                DISCOVER MORE ON INSTAGRAM <Instagram size={14} className="group-hover:text-[#D4AF37]" />
                <div className="absolute -inset-0.5 rounded-full border border-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
            </div>
          </div>
        ) : activeTab === 'Brides' ? (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.6em] text-[#D4AF37] uppercase mb-4 block">Bridal Elegance</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Brides by Meerra</h2>
              <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6 opacity-30"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {BRIDE_WORKS.map((work, idx) => (
                <div key={work.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-gray-50 transition-all duration-700 shadow-sm hover:shadow-2xl">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                       <Plus className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" size={32} />
                    </div>
                    <div className="absolute top-6 left-6 text-white/50 text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight">{work.title}</h3>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">{work.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-16">
              <a href={bridalInstagramUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-4 bg-white border border-gray-100 text-gray-900 px-16 py-6 rounded-full font-bold text-[10px] tracking-[0.4em] hover:bg-gray-900 hover:text-white transition-all shadow-xl shadow-gray-200">
                SEE MORE ON INSTAGRAM <Instagram size={14} className="group-hover:text-[#D4AF37]" />
                <div className="absolute -inset-0.5 rounded-full border border-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
            </div>
          </div>
        ) : activeTab === 'Students' ? (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.6em] text-[#D4AF37] uppercase mb-4 block">Rising Masters</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Students Work</h2>
              <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6 opacity-30"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {STUDENT_WORKS.map((work, idx) => (
                <div key={work.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-gray-50 transition-all duration-700 shadow-sm hover:shadow-2xl">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                       <Plus className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" size={32} />
                    </div>
                    <div className="absolute top-6 left-6 text-white/50 text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight">{work.title}</h3>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">{work.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-16">
              <a href={misInstagramUrl} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center gap-4 bg-white border border-gray-100 text-gray-900 px-16 py-6 rounded-full font-bold text-[10px] tracking-[0.4em] hover:bg-gray-900 hover:text-white transition-all shadow-xl shadow-gray-200">
                SEE MORE ON INSTAGRAM <Instagram size={14} className="group-hover:text-[#D4AF37]" />
                <div className="absolute -inset-0.5 rounded-full border border-[#D4AF37] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
            </div>
          </div>
        ) : activeTab === 'Awards' ? (
          <div className="space-y-20">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold tracking-[0.6em] text-[#D4AF37] uppercase mb-4 block">Excellence & Milestones</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Our Achievements</h2>
              <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-6 opacity-30"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {ACHIEVEMENT_WORKS.map((work, idx) => (
                <div key={work.id} className="group relative flex flex-col">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-gray-50 transition-all duration-700 shadow-sm hover:shadow-2xl">
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
                       <Plus className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500" size={32} />
                    </div>
                    <div className="absolute top-6 left-6 text-white/50 text-[10px] font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight">{work.title}</h3>
                    <p className="text-[10px] font-bold tracking-[0.3em] text-gray-400 uppercase">{work.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center pt-16">
              <a 
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Meerra, I saw your achievements and would love to connect with you regarding a project/collaboration.")}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex items-center gap-4 bg-gray-900 text-white px-16 py-6 rounded-full font-bold text-[10px] tracking-[0.4em] hover:bg-[#D4AF37] transition-all shadow-xl shadow-gray-200"
              >
                CONNECT WITH ME <MessageCircle size={14} className="group-hover:animate-pulse" />
                <div className="absolute -inset-0.5 rounded-full border border-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </a>
            </div>
          </div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* Fallback rendering for any newly added categories in store */}
            {state.testimonials.map((item) => (
              <div 
                key={item.id} 
                className="relative break-inside-avoid overflow-hidden rounded-[2rem] group bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer aspect-square"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#D4AF37] uppercase mb-2 block">{item.role}</span>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-gray-300 text-sm mb-6 leading-relaxed line-clamp-2">{item.content}</p>
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
        )}

        {/* Dynamic CTAs */}
        <div className="mt-24 text-center">
          {activeTab === 'Brides' && (
            <div className="bg-[#F5E6E8] p-16 rounded-[3rem] shadow-xl relative overflow-hidden max-w-4xl mx-auto">
              <Heart className="text-[#D4AF37] mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-serif font-bold mb-6">Become a Meerra Mevawala Bride</h2>
              <p className="text-gray-600 mb-10 max-w-xl mx-auto">Every bride has a story. Let us help you tell yours through the art of luxury makeup and traditional draping.</p>
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Meerra, I absolutely love your bridal portfolio! I'd like to book a consultation for my upcoming wedding.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-[10px] tracking-widest hover:bg-[#D4AF37] transition-all shadow-xl shadow-gray-200"
              >
                BOOK YOUR CONSULTATION
              </a>
            </div>
          )}

          {activeTab === 'Students' && (
            <div className="bg-gray-900 p-16 rounded-[3rem] shadow-xl relative overflow-hidden max-w-4xl mx-auto text-white">
              <GraduationCap className="text-[#D4AF37] mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-serif font-bold mb-6">Create Your Own Portfolio</h2>
              <p className="text-gray-400 mb-10 max-w-xl mx-auto">Join the next batch at MIS and learn to create professional looks that command attention in the international beauty industry.</p>
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi, I saw the student work portfolio and I'm very impressed. I want to learn these professional skills at MIS Academy!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-white px-12 py-5 rounded-full font-bold text-[10px] tracking-widest hover:bg-white hover:text-black transition-all shadow-xl shadow-[#D4AF37]/20"
              >
                EXPLORE COURSES
              </a>
            </div>
          )}

          {activeTab === 'Awards' && (
            <div className="bg-[#FDFCFB] p-16 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden max-w-4xl mx-auto">
              <Medal className="text-[#D4AF37] mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-serif font-bold mb-6">Industry Excellence</h2>
              <p className="text-gray-500 mb-10 max-w-xl mx-auto italic">"True beauty lies in the journey of excellence. These milestones represent our commitment to the highest standards of international artistry."</p>
              <div className="flex justify-center gap-6">
                 <Link to="/about" className="text-gray-900 font-bold text-[10px] tracking-widest border-b-2 border-gray-900 pb-2 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">OUR FULL STORY</Link>
                 <a 
                   href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Meerra, I'd like to discuss working with you.")}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-900 font-bold text-[10px] tracking-widest border-b-2 border-gray-900 pb-2 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                 >
                   WORK WITH US
                 </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;