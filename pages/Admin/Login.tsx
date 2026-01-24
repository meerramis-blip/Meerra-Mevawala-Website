
import React, { useState } from 'react';
import { useStore } from '../../store';
import { Lock } from 'lucide-react';

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
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-[#F5E6E8] rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-[#D4AF37]" size={32} />
          </div>
          <h1 className="text-2xl font-serif font-bold">Admin Portal</h1>
          <p className="text-gray-500">Enter your password to manage the studio</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#D4AF37]"
              placeholder="••••••••"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-[#D4AF37] transition-all"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
