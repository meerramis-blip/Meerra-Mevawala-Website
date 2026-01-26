
import React, { useState } from 'react';
import { useStore } from '../store';
import { Mail, Phone, MapPin, Instagram, Clock, Send, Sparkles, MessageCircle, Twitter, Linkedin, Youtube, Facebook } from 'lucide-react';

const PinterestIcon = ({ size = 20 }: { size?: number }) => (
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

const Contact: React.FC = () => {
  const { state, addInquiry } = useStore();
  const { settings } = state;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Service',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = settings.whatsappNumber.replace(/\D/g, '');
    const waMessage = `Hi Meerra,\n\nI have a ${formData.subject} inquiry.\n\n*From:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n\n*Message:*\n${formData.message}`;
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waMessage)}`;
    
    // Save locally
    addInquiry({
      id: Math.random().toString(36).substr(2, 9),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      type: formData.subject as any,
      createdAt: new Date().toISOString()
    });

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-24 bg-[#FDFCFB]">
      {/* Header Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#D4AF37] uppercase mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8">Connect with Artistry</h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Whether you're looking for the perfect bridal look or aiming to master the craft at our Academy, we are here to guide your journey.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-50 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-[#F5E6E8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-colors">
              <MapPin className="text-[#D4AF37] group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">Our Studio</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              {settings.address}
            </p>
            <a 
              href={settings.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#D4AF37] text-xs font-bold tracking-widest flex items-center hover:translate-x-2 transition-transform"
            >
              GET DIRECTIONS <Sparkles size={14} className="ml-2" />
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-50 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-[#F5E6E8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-colors">
              <Phone className="text-[#D4AF37] group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">Voice & WhatsApp</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Direct consultation line for bookings and course inquiries.
            </p>
            <a 
              href={`tel:${settings.phone}`} 
              className="text-gray-900 text-lg font-bold block mb-2"
            >
              {settings.phone}
            </a>
            <a 
              href={`https://wa.me/${settings.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent("Hi Meerra, I'm reaching out with a question about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] text-xs font-bold tracking-widest flex items-center hover:translate-x-2 transition-transform"
            >
              WHATSAPP US <MessageCircle size={14} className="ml-2" />
            </a>
          </div>

          {/* Email */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-50 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 bg-[#F5E6E8] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] transition-colors">
              <Mail className="text-[#D4AF37] group-hover:text-white" size={28} />
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">Email Inquiries</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              For collaborations, bridal portfolios, and corporate training programs.
            </p>
            <a 
              href={`mailto:${settings.email}`} 
              className="text-[#D4AF37] text-xs font-bold tracking-widest flex items-center hover:translate-x-2 transition-transform"
            >
              {settings.email.toUpperCase()} <Send size={14} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Left: Content */}
            <div className="lg:w-2/5">
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">Send us an Inquiry</h2>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Whether you're planning a wedding, interested in professional training, or have a question about our services, please fill out the form and we will connect on WhatsApp.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                    <Clock className="text-[#D4AF37]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900">Studio Hours</h4>
                    <p className="text-gray-500 text-sm">Mon - Sun: 10:00 AM - 08:00 PM</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900 ml-1">Follow the Journey</h4>
                  <div className="flex flex-wrap gap-4">
                    <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Instagram size={20} /></a>
                    <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Facebook size={20} /></a>
                    <a href={settings.twitterUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Twitter size={20} /></a>
                    <a href={settings.linkedinUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Linkedin size={20} /></a>
                    <a href={settings.pinterestUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><PinterestIcon size={20} /></a>
                    <a href={settings.youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-white transition-all"><Youtube size={20} /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:w-3/5 w-full">
              <div className="bg-[#FDFCFB] p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g., Sarah Johnson"
                        className="w-full bg-white border-transparent border-b-gray-200 border-b-2 px-4 py-4 focus:border-b-[#D4AF37] outline-none transition-all text-sm font-medium"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full bg-white border-transparent border-b-gray-200 border-b-2 px-4 py-4 focus:border-b-[#D4AF37] outline-none transition-all text-sm font-medium"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full bg-white border-transparent border-b-gray-200 border-b-2 px-4 py-4 focus:border-b-[#D4AF37] outline-none transition-all text-sm font-medium"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Interested In</label>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {['Service', 'Course', 'General'].map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, subject: type})}
                          className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest border transition-all ${
                            formData.subject === type 
                              ? 'bg-[#D4AF37] border-[#D4AF37] text-white' 
                              : 'bg-white border-gray-200 text-gray-400 hover:border-[#D4AF37]'
                          }`}
                        >
                          {type.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your event or course interest..."
                      className="w-full bg-white border-transparent border-b-gray-200 border-b-2 px-4 py-4 focus:border-b-[#D4AF37] outline-none transition-all text-sm font-medium resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-6 rounded-2xl font-bold text-xs tracking-[0.2em] hover:bg-[#D4AF37] transition-all transform hover:-translate-y-1 shadow-xl shadow-gray-200 flex items-center justify-center gap-3"
                  >
                    SEND VIA WHATSAPP <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
