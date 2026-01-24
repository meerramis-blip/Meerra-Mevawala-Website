
import React, { useState, useEffect } from 'react';
import { Settings, Info, X, Edit3, Code } from 'lucide-react';

interface GuideItemProps {
  label: string;
  file: string;
  variable: string;
  children: React.ReactNode;
}

export const EditableSection: React.FC<GuideItemProps> = ({ label, file, variable, children }) => {
  const [isActive, setIsActive] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleToggle = (e: any) => {
      if (e.detail?.active !== undefined) setIsActive(e.detail.active);
    };
    window.addEventListener('toggle-editor-guide', handleToggle);
    return () => window.removeEventListener('toggle-editor-guide', handleToggle);
  }, []);

  if (!isActive) return <>{children}</>;

  return (
    <div 
      className="relative group ring-2 ring-dashed ring-[#D4AF37]/50 rounded-lg p-1 transition-all"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="absolute -top-3 -left-3 z-30 bg-[#D4AF37] text-white p-1 rounded-full shadow-lg flex items-center gap-2 cursor-help whitespace-nowrap overflow-hidden max-w-[40px] hover:max-w-[400px] transition-all duration-500">
        <Info size={14} className="shrink-0" />
        <span className="text-[9px] font-bold uppercase tracking-widest px-1">
          Edit in {file} {"->"} {variable}
        </span>
      </div>
      {children}
      {showTooltip && (
        <div className="absolute top-0 left-full ml-4 z-[100] w-64 bg-gray-900 text-white p-4 rounded-xl shadow-2xl border border-white/10 animate-in fade-in slide-in-from-left-2">
          <div className="flex items-center gap-2 mb-2 text-[#D4AF37]">
            <Code size={16} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Developer Instructions</span>
          </div>
          <p className="text-xs text-gray-300 leading-relaxed mb-3">
            To update the content of the <strong className="text-white">{label}</strong> section:
          </p>
          <div className="bg-black/40 p-2 rounded text-[10px] font-mono text-[#D4AF37] break-all">
            File: {file}<br />
            Var: {variable}
          </div>
        </div>
      )}
    </div>
  );
};

const EditorGuide: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleGuide = () => {
    const newState = !isActive;
    setIsActive(newState);
    window.dispatchEvent(new CustomEvent('toggle-editor-guide', { detail: { active: newState } }));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <button
        onClick={toggleGuide}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 ${
          isActive ? 'bg-gray-900 text-white' : 'bg-[#D4AF37] text-white'
        }`}
        title="Toggle Editor Instructions"
      >
        {isActive ? <X size={24} /> : <Edit3 size={24} />}
      </button>

      {isActive && (
        <div className="absolute bottom-20 right-0 w-80 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 animate-in slide-in-from-bottom-4">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-[#D4AF37]" size={20} />
            <h3 className="text-sm font-bold tracking-widest uppercase">Content Editor Mode</h3>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed mb-6">
            We've highlighted editable sections on the page. Hover over the <Info size={12} className="inline text-[#D4AF37]" /> icons to see which code files you need to edit to change content.
          </p>
          <div className="space-y-3">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> Live Mode Active
            </div>
            <p className="text-[9px] text-gray-400 italic">Changes are made by updating constants.ts in the source code.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditorGuide;
