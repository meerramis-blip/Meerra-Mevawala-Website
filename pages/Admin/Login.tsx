
import React, { useState } from 'react';
import { useStore } from '../../store';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const { setAdmin } = useStore();
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pass === 'admin123') {
      setAdmin(true);
    } else {
      setError('Invalid credentials. (Hint: admin123)');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-10 relative overflow-hidden">
        {/* Return Link at Top */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#D4AF37]/10 transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase">Website</span>
        </Link>

        <div className="text-center mt-8 mb-10">
          <div className="w-20 h-20 bg-[#F5E6E8] rounded-3xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
            <Lock className="text-[#D4AF37] -rotate-3" size={32} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Admin Portal</h1>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">Secure access for Meerra Mevawala Studio management.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">Access Key</label>
            <input
              type="password"
              className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-[#D4AF37] transition-all"
              placeholder="••••••••"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          {error && (
            <div className="bg-red-50 text-red-500 text-[10px] font-bold uppercase tracking-widest px-4 py-3 rounded-xl border border-red-100 animate-in fade-in slide-in-from-top-1">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-[#D4AF37] transition-all shadow-xl shadow-gray-200"
          >
            LOGIN TO DASHBOARD
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-[9px] text-gray-300 font-bold uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Meerra Mevawala
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
