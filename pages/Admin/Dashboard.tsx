
import React, { useState } from 'react';
import { useStore } from '../../store';
import { LayoutDashboard, Scissors, BookOpen, CalendarCheck, MessageSquare, Settings, LogOut, Plus, Trash2, Edit2, ExternalLink } from 'lucide-react';
import Login from './Login';

const Dashboard: React.FC = () => {
  const { state, setAdmin, updateBookingStatus, deleteService, deleteCourse, updateSettings } = useStore();
  const [activeTab, setActiveTab] = useState<'stats' | 'services' | 'courses' | 'bookings' | 'settings'>('stats');

  if (!state.isAdmin) return <Login />;

  const TabButton = ({ id, icon: Icon, label }: any) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-6 py-4 transition-colors ${
        activeTab === id ? 'bg-[#D4AF37] text-white' : 'hover:bg-gray-100 text-gray-600'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-8 border-b border-gray-100">
          <h2 className="text-xl font-serif font-bold text-[#D4AF37]">CMS Admin</h2>
        </div>
        <nav className="flex-grow py-4">
          <TabButton id="stats" icon={LayoutDashboard} label="Dashboard" />
          <TabButton id="services" icon={Scissors} label="Services" />
          <TabButton id="courses" icon={BookOpen} label="Academy" />
          <TabButton id="bookings" icon={CalendarCheck} label="Bookings" />
          <TabButton id="settings" icon={Settings} label="Settings" />
        </nav>
        <button
          onClick={() => setAdmin(false)}
          className="flex items-center space-x-3 px-6 py-4 text-red-500 hover:bg-red-50 transition-colors mt-auto border-t border-gray-100"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 overflow-y-auto">
        {activeTab === 'stats' && (
          <div className="space-y-8">
            <h1 className="text-3xl font-serif font-bold">Studio Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Bookings', value: state.bookings.length, color: 'blue' },
                { label: 'Services', value: state.services.length, color: 'pink' },
                { label: 'Active Courses', value: state.courses.length, color: 'amber' },
                { label: 'Inquiries', value: state.inquiries.length, color: 'indigo' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-sm font-medium text-gray-500 mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-serif font-bold mb-6">Recent Bookings</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50">
                      <th className="pb-4">Customer</th>
                      <th className="pb-4">Service</th>
                      <th className="pb-4">Date & Time</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {state.bookings.slice(0, 5).map((booking) => (
                      <tr key={booking.id} className="text-sm">
                        <td className="py-4 font-medium">{booking.customerName}</td>
                        <td className="py-4 text-gray-600">{state.services.find(s => s.id === booking.serviceId)?.title}</td>
                        <td className="py-4 text-gray-500">{booking.date} at {booking.time}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' :
                            booking.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                          }`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="flex space-x-2">
                            <button onClick={() => updateBookingStatus(booking.id, 'Confirmed')} className="text-green-600 hover:bg-green-50 p-1 rounded">✓</button>
                            <button onClick={() => updateBookingStatus(booking.id, 'Cancelled')} className="text-red-600 hover:bg-red-50 p-1 rounded">✕</button>
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
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-serif font-bold">Manage Services</h1>
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#D4AF37] transition-colors">
                <Plus size={20} /> Add New Service
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {state.services.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
                  <img src={service.image} className="w-24 h-24 rounded-lg object-cover" />
                  <div className="flex-grow">
                    <h3 className="font-serif font-bold text-lg">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.price} • {service.category}</p>
                    <div className="flex space-x-3">
                      <button className="text-gray-400 hover:text-blue-500 transition-colors"><Edit2 size={18} /></button>
                      <button onClick={() => deleteService(service.id)} className="text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-8 max-w-2xl">
            <h1 className="text-3xl font-serif font-bold">Site Settings</h1>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Studio Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl"
                  value={state.settings.brandName}
                  onChange={(e) => updateSettings({ brandName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">WhatsApp Number</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl"
                  value={state.settings.whatsappNumber}
                  onChange={(e) => updateSettings({ whatsappNumber: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Studio Address</label>
                <textarea
                  className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl h-24"
                  value={state.settings.address}
                  onChange={(e) => updateSettings({ address: e.target.value })}
                />
              </div>
              <button className="bg-gray-900 text-white w-full py-4 rounded-xl font-bold hover:bg-[#D4AF37] transition-all">
                SAVE CHANGES
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
