
import React, { useState } from 'react';
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
  Image as ImageIcon
} from 'lucide-react';
import Login from './Login';
import { Service, Course } from '../../types';

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
    addCourse
  } = useStore();
  
  const [activeTab, setActiveTab] = useState<'stats' | 'services' | 'courses' | 'bookings' | 'settings'>('stats');
  const [editModal, setEditModal] = useState<{ type: 'service' | 'course', data: any, isNew?: boolean } | null>(null);

  if (!state.isAdmin) return <Login />;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editModal) return;

    if (editModal.isNew) {
      const newId = Math.random().toString(36).substr(2, 9);
      const dataWithId = { ...editModal.data, id: newId };
      if (editModal.type === 'service') addService(dataWithId);
      else addCourse(dataWithId);
    } else {
      if (editModal.type === 'service') updateService(editModal.data.id, editModal.data);
      else updateCourse(editModal.data.id, editModal.data);
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
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col sticky top-0 h-screen shadow-sm z-10">
        <div className="p-10 border-b border-gray-50">
          <img src="logo.png" alt="Logo" className="h-12 w-auto mb-4 brightness-0" onError={(e) => (e.target as any).style.display='none'} />
          <h2 className="text-xl font-serif font-bold text-gray-900">Studio Manager</h2>
          <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-[0.2em] mt-1">Meerra Mevawala</p>
        </div>
        <nav className="flex-grow py-8">
          <TabButton id="stats" icon={LayoutDashboard} label="Overview" />
          <TabButton id="services" icon={Scissors} label="Services" />
          <TabButton id="courses" icon={BookOpen} label="Academy" />
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

      {/* Main Content */}
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
                { label: 'Unread Inquiries', value: state.inquiries.length, icon: LayoutDashboard, color: 'text-indigo-500' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-50 group hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon size={24} className={stat.color} />
                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Growth +0%</span>
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
                            <button onClick={() => updateBookingStatus(booking.id, 'Confirmed')} className="p-2 text-green-500 hover:bg-green-100 rounded-lg transition-colors"><CheckCircle size={18} /></button>
                            <button onClick={() => updateBookingStatus(booking.id, 'Cancelled')} className="p-2 text-red-500 hover:bg-red-100 rounded-lg transition-colors"><XCircle size={18} /></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {state.bookings.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-10 text-center text-gray-400 italic">No bookings found.</td>
                      </tr>
                    )}
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
                <div key={service.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col group hover:shadow-xl transition-all">
                  <div className="h-48 w-full rounded-3xl overflow-hidden mb-6">
                    <img src={service.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={service.title} />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif font-bold text-xl text-gray-900 leading-tight">{service.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[#D4AF37] font-bold text-sm">{service.price}</span>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setEditModal({ type: 'service', data: service })}
                          className="p-2 text-gray-400 hover:text-[#D4AF37] hover:bg-gray-50 rounded-xl transition-all"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => deleteService(service.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                      </div>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                        <Clock size={12} /> {service.duration}
                      </span>
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
                <h1 className="text-4xl font-serif font-bold text-gray-900">MIS Academy</h1>
                <p className="text-gray-500 mt-2">Manage international diplomas and workshops.</p>
              </div>
              <button 
                onClick={() => setEditModal({ type: 'course', data: { title: '', price: '', description: '', duration: '', category: 'Professional', image: '', certification: '', curriculum: [] }, isNew: true })}
                className="bg-gray-900 text-white px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-[#D4AF37] transition-all font-bold text-[10px] tracking-widest uppercase"
              >
                <Plus size={18} /> Add Course
              </button>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {state.courses.map((course) => (
                <div key={course.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 flex flex-col group hover:shadow-xl transition-all">
                  <div className="h-48 w-full rounded-3xl overflow-hidden mb-6">
                    <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-serif font-bold text-xl text-gray-900 leading-tight mb-2">{course.title}</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-[#D4AF37] font-bold text-sm">{course.price}</span>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{course.category}</span>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-6 leading-relaxed">{course.description}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => setEditModal({ type: 'course', data: course })}
                          className="p-2 text-gray-400 hover:text-[#D4AF37] hover:bg-gray-50 rounded-xl transition-all"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button onClick={() => deleteCourse(course.id)} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                      </div>
                      <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest flex items-center gap-2">
                        <Tag size={12} /> {course.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="space-y-10">
            <header>
              <h1 className="text-4xl font-serif font-bold text-gray-900">Manage Bookings</h1>
              <p className="text-gray-500 mt-2">Review and update client appointment statuses.</p>
            </header>

            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-50 p-10">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
                      <th className="pb-6">Customer</th>
                      <th className="pb-6">Contact Info</th>
                      <th className="pb-6">Service & Slot</th>
                      <th className="pb-6">Status</th>
                      <th className="pb-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {state.bookings.map((booking) => (
                      <tr key={booking.id} className="text-sm hover:bg-gray-50/50 transition-colors">
                        <td className="py-6 font-bold text-gray-900">{booking.customerName}</td>
                        <td className="py-6">
                          <div className="text-xs space-y-1">
                            <p className="text-gray-600">{booking.email}</p>
                            <p className="text-gray-400">{booking.phone}</p>
                          </div>
                        </td>
                        <td className="py-6">
                          <div className="text-xs space-y-1">
                            <p className="font-bold text-gray-800">{state.services.find(s => s.id === booking.serviceId)?.title || 'Service'}</p>
                            <p className="text-[#D4AF37] font-medium">{booking.date} at {booking.time}</p>
                          </div>
                        </td>
                        <td className="py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                            booking.status === 'Confirmed' ? 'bg-green-50 text-green-600' :
                            booking.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-6 text-right">
                          <div className="flex justify-end space-x-3">
                            <button onClick={() => updateBookingStatus(booking.id, 'Confirmed')} className="px-4 py-2 rounded-xl border border-green-100 text-green-500 hover:bg-green-50 text-[10px] font-bold tracking-widest uppercase">Confirm</button>
                            <button onClick={() => updateBookingStatus(booking.id, 'Cancelled')} className="px-4 py-2 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 text-[10px] font-bold tracking-widest uppercase">Cancel</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {state.bookings.length === 0 && (
                      <tr>
                        <td colSpan={5} className="py-20 text-center text-gray-400 italic">No booking requests found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-10 max-w-4xl">
            <header>
              <h1 className="text-4xl font-serif font-bold text-gray-900">Studio Settings</h1>
              <p className="text-gray-500 mt-2">Configure your brand information and contact details.</p>
            </header>
            
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-50 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Studio Brand Name</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] font-medium"
                    value={state.settings.brandName}
                    onChange={(e) => updateSettings({ brandName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">WhatsApp Primary</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] font-medium"
                    value={state.settings.whatsappNumber}
                    onChange={(e) => updateSettings({ whatsappNumber: e.target.value })}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Studio Mailing Address</label>
                <textarea
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] font-medium h-32 resize-none"
                  value={state.settings.address}
                  onChange={(e) => updateSettings({ address: e.target.value })}
                />
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => alert('Settings updated successfully')}
                  className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-all shadow-xl shadow-gray-200"
                >
                  Save Studio Configuration
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Management Modal */}
      {editModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500">
            <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-[#FDFCFB]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#D4AF37] rounded-2xl flex items-center justify-center text-white">
                  {editModal.type === 'service' ? <Scissors size={20} /> : <BookOpen size={20} />}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900">
                    {editModal.isNew ? 'Add' : 'Edit'} {editModal.type === 'service' ? 'Service' : 'Course'}
                  </h3>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Meerra Mevawala Studio</p>
                </div>
              </div>
              <button 
                onClick={() => setEditModal(null)}
                className="p-2 text-gray-300 hover:text-gray-900 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Title</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37]"
                    value={editModal.data.title}
                    onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, title: e.target.value }})}
                    placeholder="Enter title..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Price / Fee</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37]"
                    value={editModal.data.price}
                    onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, price: e.target.value }})}
                    placeholder="₹ 0.00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Duration</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                    <input
                      required
                      type="text"
                      className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37]"
                      value={editModal.data.duration}
                      onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, duration: e.target.value }})}
                      placeholder="e.g., 2 Hours"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Category</label>
                  <select
                    className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] appearance-none cursor-pointer"
                    value={editModal.data.category}
                    onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, category: e.target.value }})}
                  >
                    {editModal.type === 'service' ? (
                      <>
                        <option value="Bridal">Bridal</option>
                        <option value="Party">Party</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Special">Special</option>
                      </>
                    ) : (
                      <>
                        <option value="Professional">Professional</option>
                        <option value="Makeup">Makeup</option>
                        <option value="Hair">Hair</option>
                        <option value="Nail">Nail</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Image URL</label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
                  <input
                    required
                    type="url"
                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37]"
                    value={editModal.data.image}
                    onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, image: e.target.value }})}
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Description</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] resize-none"
                  value={editModal.data.description}
                  onChange={(e) => setEditModal({ ...editModal, data: { ...editModal.data, description: e.target.value }})}
                  placeholder="Describe this offering..."
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setEditModal(null)}
                  className="flex-grow px-8 py-5 rounded-2xl font-bold text-[10px] tracking-widest uppercase bg-gray-50 text-gray-400 hover:bg-gray-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-grow px-8 py-5 rounded-2xl font-bold text-[10px] tracking-widest uppercase bg-gray-900 text-white hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-2"
                >
                  <Save size={16} />
                  {editModal.isNew ? 'Create New' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
