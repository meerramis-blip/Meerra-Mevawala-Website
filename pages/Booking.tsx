
import React, { useState } from 'react';
import { useStore } from '../store';
import { Calendar, Clock, User, Phone, Mail, Sparkles, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import PaymentDetails from '../components/PaymentDetails';

const Booking: React.FC = () => {
  const { state, addBooking } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceId: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = state.services.find(s => s.id === formData.serviceId)?.title || 'Selected Service';
    const message = `Hi Meerra,\n\nI would like to request a booking from your website.\n\n*Details:*\n- *Name:* ${formData.name}\n- *Service:* ${serviceName}\n- *Date:* ${formData.date}\n- *Time:* ${formData.time}\n- *Phone:* ${formData.phone}\n- *Email:* ${formData.email}\n\nPlease let me know if this slot is available!`;
    
    const cleanPhone = state.settings.whatsappNumber.replace(/\D/g, '');
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    
    // Also save to store for history
    addBooking({
      id: Math.random().toString(36).substr(2, 9),
      customerName: formData.name,
      email: formData.email,
      phone: formData.phone,
      serviceId: formData.serviceId,
      date: formData.date,
      time: formData.time,
      status: 'Pending',
      createdAt: new Date().toISOString()
    });

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20 pb-24 bg-[#FDFCFB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8">Reserve Your Session</h1>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              Experience the luxury of professional artistry. Please fill out the form, and we'll handle the rest via WhatsApp.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                  <Sparkles size={24} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Premium Products</h4>
                  <p className="text-sm text-gray-500">We use only high-end international brands like MAC, Dior, and Estee Lauder.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0">
                  <CreditCard size={24} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Easy Payments</h4>
                  <p className="text-sm text-gray-500">Pay securely via Bank Transfer or GPay after confirming details with us on WhatsApp.</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-900 rounded-[2rem] text-white">
              <h4 className="text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase mb-4">Advance Policy</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">A 30% non-refundable advance is required to secure your date. Slot will be released if payment isn't received within 24 hours of confirmation.</p>
              <div className="flex items-center gap-4 text-xs font-bold">
                <CheckCircle2 className="text-[#D4AF37]" size={16} /> Secure Booking
                <CheckCircle2 className="text-[#D4AF37]" size={16} /> GST Invoicing
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      required
                      type="text"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37]"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      required
                      type="tel"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37]"
                      placeholder="+91 00000 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    required
                    type="email"
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37]"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Select Service</label>
                <select
                  required
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37] appearance-none"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({...formData, serviceId: e.target.value})}
                >
                  <option value="">Choose a Service...</option>
                  {state.services.map(s => (
                    <option key={s.id} value={s.id}>{s.title} ({s.price})</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      required
                      type="date"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37]"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      required
                      type="time"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37]"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-white py-4 rounded-xl font-bold text-xs tracking-widest hover:bg-gray-900 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-xl shadow-[#D4AF37]/20"
              >
                REQUEST VIA WHATSAPP <ChevronRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
