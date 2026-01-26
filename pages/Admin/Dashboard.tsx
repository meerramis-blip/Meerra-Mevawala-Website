
import React, { useState, useEffect } from 'react';
import { useStore } from '../../store';
import { 
  LayoutDashboard, 
  Scissors, 
  BookOpen, 
  CalendarCheck, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit2, 
  CheckCircle, 
  XCircle,
  Clock,
  Tag,
  X,
  Save,
  Image as ImageIcon,
  CheckCircle2,
  Sparkles,
  User
} from 'lucide-react';
import Login from './Login';
import { Service, Course, Testimonial } from '../../types';

const Dashboard: React.FC = () => {
  const { 
    state, 
    setAdmin, 
    updateBookingStatus, 
    deleteService, 
    deleteCourse, 
    updateSettings,
    updateService,
    updateCourse,
    addService,
    addCourse,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial
  } = useStore();
  
  const [activeTab, setActiveTab] = useState<'stats' | 'services' | 'courses' | 'transformations' | 'bookings' | 'settings'>('stats');
  const [editModal, setEditModal] = useState<{ type: 'service' | 'course' | 'transformation', data: any, isNew?: boolean } | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!state.isAdmin) return <Login />;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editModal) return;

    if (editModal.isNew) {
      const newId = Math.random().toString(36).substr(2, 9);
      const dataWithId = { ...editModal.data, id: newId };
      if (editModal.type === 'service') addService(dataWithId);
      else if (editModal.type === 'course') addCourse(dataWithId);
      else if (editModal.type === 'transformation') addTestimonial(dataWithId);
      setToast('Created successfully!');
    } else {
      if (editModal.type === 'service') updateService(editModal.data.id, editModal.data);
      else if (editModal.type === 'course') updateCourse(editModal.data.id, editModal.data);
      else if (editModal.type === 'transformation') updateTestimonial(editModal.data.id, editModal.data);
      setToast('Changes saved successfully!');
    }
    setEditModal(null);
  };

  const TabButton = ({ id, icon: Icon, label }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-4 px-6 py-4 transition-all duration-300 ${
        activeTab === id 
          ? 'bg-[#D4AF37] text-white shadow-lg translate-x-2' 
          : 'hover:bg-gray-50 text-gray-500 hover:text-gray-900'
      }`}
    >
      <Icon size={20} />
      <span className="font-bold text-[10px] tracking-widest uppercase">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex font-sans relative">
      {toast && (
        <div className="fixed bottom-10 right-10 z-[200] animate-in slide-in-from-bottom-10 fade-in duration-500">
          <div className="bg-gray-900 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10">
            <CheckCircle2 className="text-[#D4AF37]" size={20} />
            <span className="text-xs font-bold tracking-widest uppercase">{toast}</span>
          </div>
        </div>
      )}

      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-screen shadow-sm z-10">
        <div className="p-10 border-b border-gray-50">
          <img src="logo.png" alt="Logo" className="h-12 w-auto mb-4 brightness-0" onError={(e) => (e.target as any).style.display='none'} />
          <h2 className="text-xl font-serif font-bold text-gray-900">Studio Manager</h2>
          <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mt-1">Meerra Mevawala</p>
        </div>
        <nav className="flex-grow py-8 overflow-y-auto no-scrollbar">
          <TabButton id="stats" icon={LayoutDashboard} label="Overview" />
          <TabButton id="services" icon={Scissors} label="Services" />
          <TabButton id="courses" icon={BookOpen} label="Academy" />
          <TabButton id="transformations" icon={Sparkles} label="Transformations" />
          <TabButton id="bookings" icon={CalendarCheck} label="Bookings" />
          <TabButton id="settings" icon={Settings} label="Settings" />
        </nav>
        <div className="p-6 border-t border-gray-50">
          <button
            onClick={() => setAdmin(false)}
            className="w-full flex items-center justify-center space-x-3 px-6 py-4 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all font-bold text-[10px] tracking-widest uppercase"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-grow p-12 overflow-y-auto">
        {activeTab === 'stats' && (
          <div className="space-y-10">
            <header>
              <h1 className="text-4xl font-serif font-bold text-gray-900">Welcome Back</h1>
              <p className="text-gray-500 mt-2">Here's what's happening in your studio today.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: 'Total Bookings', value: state.bookings.length, icon: CalendarCheck, color: 'text-blue-500' },
                { label: 'Makeup Services', value: state.services.length, icon: Scissors, color: 'text-pink-500' },
                { label: 'Active Courses', value: state.courses.length, icon: BookOpen, color: 'text-amber-500' },
                { label: 'Transformations', value: state.testimonials.length, icon: Sparkles, color: 'text-indigo-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 group hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon size={24} className={stat.color} />
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Live</span>
                  </div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-4xl font-serif font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 p-10">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-2xl font-serif font-bold">Recent Bookings</h3>
                <button onClick={() => setActiveTab('bookings')} className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase hover:underline">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
                      <th className="pb-6">Customer</th>
                      <th className="pb-6">Service</th>
                      <th className="pb-6">Date</th>
                      <th className="pb-6">Status</th>
                      <th className="pb-6 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {state.bookings.slice(0, 5).map((booking) => (
                      <tr key={booking.id} className="text-sm group hover:bg-gray-50/50 transition-colors">
                        <td className="py-6 font-bold text-gray-900">{booking.customerName}</td>
                        <td className="py-6 text-gray-500">{state.services.find(s => s.id === booking.serviceId)?.title || 'Custom Service'}</td>
                        <td className="py-6 text-gray-400">{booking.date}</td>
                        <td className="py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            booking.status === 'Confirmed' ? 'bg-green-50 text-green-600' :
                            booking.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-6 text-right">
                          <div className="flex justify-end space-x-2">
                            <button onClick={() => { updateBookingStatus(booking.id, 'Confirmed'); setToast('Booking confirmed!'); }} className="p-2 text-green-500 hover:bg-green-100 rounded-lg transition-colors"><CheckCircle size={18} /></button>
                            <button onClick={() => { updateBookingStatus(booking.id, 'Cancelled'); setToast('Booking cancelled.'); }} className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"><XCircle size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-10">
            <header className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-serif font-bold text-gray-900">Makeup Services</h1>
                <p className="text-gray-500 mt-2">Manage your luxury service offerings.</p>
              </div>
              <button 
                onClick={() => setEditModal({ type: 'service', data: { title: '', price: '', description: '', duration: '', category: 'Bridal', image: '' }, isNew: true })}
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-[#D4AF37] transition-all font-bold text-[10px] tracking-widest uppercase"
              >
                <Plus size={18} /> Add Service
              </button>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {state.services.map((service) => (
                <div key={service.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button onClick={() => setEditModal({ type: 'service', data: service })} className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-gray-600 hover:text-[#D4AF37] transition-colors"><Edit2 size={16} /></button>
                      <button onClick={() => { deleteService(service.id); setToast('Service deleted.'); }} className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-red-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-bold text-lg">{service.title}</h3>
                      <span className="text-[#D4AF37] font-bold">{service.price}</span>
                    </div>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-4">{service.description}</p>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                      <span className="flex items-center gap-1"><Clock size={12} /> {service.duration}</span>
                      <span className="flex items-center gap-1"><Tag size={12} /> {service.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="space-y-10">
            <header className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-serif font-bold text-gray-900">Academy Courses</h1>
                <p className="text-gray-500 mt-2">Professional training programs and masterclasses.</p>
              </div>
              <button 
                onClick={() => setEditModal({ type: 'course', data: { title: '', price: '', description: '', duration: '', category: 'Professional', certification: '', curriculum: [], image: '' }, isNew: true })}
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-[#D4AF37] transition-all font-bold text-[10px] tracking-widest uppercase"
              >
                <Plus size={18} /> Add Course
              </button>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {state.courses.map((course) => (
                <div key={course.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button onClick={() => setEditModal({ type: 'course', data: course })} className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-gray-600 hover:text-[#D4AF37] transition-colors"><Edit2 size={16} /></button>
                      <button onClick={() => { deleteCourse(course.id); setToast('Course deleted.'); }} className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-red-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-2">{course.title}</h3>
                    <p className="text-gray-400 text-xs line-clamp-2 mb-4">{course.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#D4AF37] font-bold">{course.price}</span>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{course.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'transformations' && (
          <div className="space-y-10">
            <header className="flex justify-between items-center">
              <div>
                <h1 className="text-4xl font-serif font-bold text-gray-900">Bridal Transformations</h1>
                <p className="text-gray-500 mt-2">Update look descriptions and gallery images.</p>
              </div>
              <button 
                onClick={() => setEditModal({ type: 'transformation', data: { lookTitle: '', role: 'Bride', content: '', rating: 5, image: '', name: '' }, isNew: true })}
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-[#D4AF37] transition-all font-bold text-[10px] tracking-widest uppercase"
              >
                <Plus size={18} /> Add Transformation
              </button>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {state.testimonials.map((t) => (
                <div key={t.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img src={t.videoThumbnail || t.image} alt={t.lookTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button onClick={() => setEditModal({ type: 'transformation', data: t })} className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-gray-600 hover:text-[#D4AF37] transition-colors"><Edit2 size={16} /></button>
                      <button onClick={() => { deleteTestimonial(t.id); setToast('Transformation deleted.'); }} className="p-2 bg-white/90 backdrop-blur rounded-lg shadow-sm text-red-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif font-bold text-lg mb-1">{t.lookTitle || 'No Title'}</h3>
                    <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 p-10">
            <h1 className="text-3xl font-serif font-bold mb-8">All Appointments</h1>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
                    <th className="pb-6">ID</th>
                    <th className="pb-6">Customer</th>
                    <th className="pb-6">Contact</th>
                    <th className="pb-6">Service</th>
                    <th className="pb-6">Date/Time</th>
                    <th className="pb-6">Status</th>
                    <th className="pb-6 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {state.bookings.map((booking) => (
                    <tr key={booking.id} className="text-sm">
                      <td className="py-6 font-mono text-[10px] text-gray-400">#{booking.id}</td>
                      <td className="py-6 font-bold text-gray-900">{booking.customerName}</td>
                      <td className="py-6">
                        <p className="text-xs text-gray-500">{booking.phone}</p>
                        <p className="text-[10px] text-gray-400">{booking.email}</p>
                      </td>
                      <td className="py-6 text-gray-500">{state.services.find(s => s.id === booking.serviceId)?.title || 'Custom'}</td>
                      <td className="py-6 text-gray-400">{booking.date} at {booking.time}</td>
                      <td className="py-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          booking.status === 'Confirmed' ? 'bg-green-50 text-green-600' :
                          booking.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-6 text-right">
                        <div className="flex justify-end space-x-2">
                          <button onClick={() => { updateBookingStatus(booking.id, 'Confirmed'); setToast('Confirmed!'); }} className="p-2 text-green-500 hover:bg-green-100 rounded-lg"><CheckCircle size={18} /></button>
                          <button onClick={() => { updateBookingStatus(booking.id, 'Cancelled'); setToast('Cancelled.'); }} className="p-2 text-red-500 hover:bg-red-100 rounded-lg"><XCircle size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-4xl space-y-10">
            <header>
              <h1 className="text-4xl font-serif font-bold text-gray-900">Site Configuration</h1>
              <p className="text-gray-500 mt-2">Update brand identity and contact information.</p>
            </header>

            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-50 shadow-sm space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Brand Name</label>
                  <input type="text" value={state.settings.brandName} onChange={(e) => updateSettings({ brandName: e.target.value })} className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">WhatsApp Number</label>
                  <input type="text" value={state.settings.whatsappNumber} onChange={(e) => updateSettings({ whatsappNumber: e.target.value })} className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Email</label>
                  <input type="text" value={state.settings.email} onChange={(e) => updateSettings({ email: e.target.value })} className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Phone</label>
                  <input type="text" value={state.settings.phone} onChange={(e) => updateSettings({ phone: e.target.value })} className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Studio Address</label>
                <textarea value={state.settings.address} onChange={(e) => updateSettings({ address: e.target.value })} rows={3} className="w-full px-6 py-4 bg-gray-50 rounded-2xl focus:ring-2 focus:ring-[#D4AF37] outline-none resize-none" />
              </div>
              <button onClick={() => setToast('Settings updated!')} className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold text-[10px] tracking-widest uppercase hover:bg-[#D4AF37] transition-all flex items-center gap-2"><Save size={18} /> Save Settings</button>
            </div>
          </div>
        )}
      </main>

      {editModal && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="px-10 py-8 bg-[#FDFCFB] border-b border-gray-50 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-serif font-bold text-gray-900">{editModal.isNew ? 'Add New' : 'Edit'} {editModal.type.charAt(0).toUpperCase() + editModal.type.slice(1)}</h3>
                <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest mt-1">Management Console</p>
              </div>
              <button onClick={() => setEditModal(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={24} /></button>
            </div>
            <form onSubmit={handleSave} className="p-10 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
              <div className="space-y-4">
                {editModal.type === 'transformation' ? (
                  <>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Look Created (Title)</label>
                      <input required type="text" placeholder="e.g. Royal Traditional Bridal Glow" value={editModal.data.lookTitle} onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, lookTitle: e.target.value } })} className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-[#D4AF37]" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Category / Role</label>
                        <select value={editModal.data.role} onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, role: e.target.value } })} className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-[#D4AF37] appearance-none">
                          <option value="Bride">BRIDE</option>
                          <option value="Sangeet">SANGEET</option>
                          <option value="Reception">RECEPTION</option>
                          <option value="Graduate">GRADUATE</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Image URL</label>
                        <input required type="text" value={editModal.data.image} onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, image: e.target.value } })} className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-[#D4AF37]" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Title</label>
                        <input required type="text" value={editModal.data.title} onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, title: e.target.value } })} className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-[#D4AF37]" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Price</label>
                        <input required type="text" value={editModal.data.price} onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, price: e.target.value } })} className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-[#D4AF37]" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Image URL</label>
                      <input required type="text" value={editModal.data.image} onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, image: e.target.value } })} className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none focus:ring-1 focus:ring-[#D4AF37]" />
                    </div>
                  </>
                )}
              </div>

              <div className="pt-6 border-t border-gray-50 flex gap-4">
                <button type="button" onClick={() => setEditModal(null)} className="flex-grow py-4 rounded-xl font-bold text-[10px] tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors">Cancel</button>
                <button type="submit" className="flex-[2] bg-gray-900 text-white py-4 rounded-xl font-bold text-[10px] tracking-widest uppercase hover:bg-[#D4AF37] transition-all">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;