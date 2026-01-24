
import React from 'react';
import { Landmark, QrCode, CreditCard, ExternalLink, Copy, CheckCircle2 } from 'lucide-react';

const PaymentDetails: React.FC<{ light?: boolean }> = ({ light = false }) => {
  const [copied, setCopied] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const bankInfo = [
    { label: 'Account Name', value: 'Mrs. Meerra Mehul Mevawala' },
    { label: 'Bank Name', value: 'IDFC First Bank' },
    { label: 'Account Number', value: '10092166725' },
    { label: 'IFSC Code', value: 'IDFB0040159' },
    { label: 'SWIFT Code', value: 'IDFBINBBMUM' },
    { label: 'Branch', value: 'Ghatkopar East, Mumbai' },
  ];

  return (
    <div className={`rounded-[2.5rem] overflow-hidden border ${light ? 'bg-white border-gray-100' : 'bg-gray-900 border-white/10 text-white'} p-8 md:p-12 shadow-2xl`}>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Bank Details */}
        <div className="flex-grow">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#D4AF37] rounded-2xl flex items-center justify-center text-white">
              <Landmark size={24} />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold">Bank Transfer Details</h3>
              <p className={`text-[10px] font-bold uppercase tracking-widest ${light ? 'text-gray-400' : 'text-gray-500'}`}>Official IDFC Business Account</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bankInfo.map((info) => (
              <div key={info.label} className="group relative">
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${light ? 'text-gray-400' : 'text-gray-500'}`}>{info.label}</p>
                <div className="flex items-center justify-between">
                  <p className="font-bold text-sm">{info.value}</p>
                  <button 
                    onClick={() => copyToClipboard(info.value, info.label)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-[#D4AF37]/10 rounded-lg text-[#D4AF37]"
                  >
                    {copied === info.label ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a 
              href="https://razorpay.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#D4AF37] text-white px-8 py-4 rounded-xl font-bold text-[10px] tracking-widest hover:bg-white hover:text-gray-900 transition-all shadow-xl shadow-[#D4AF37]/20"
            >
              PAY VIA RAZORPAY <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* QR Codes */}
        <div className={`lg:w-80 shrink-0 p-8 rounded-3xl ${light ? 'bg-gray-50' : 'bg-white/5 border border-white/10'}`}>
          <div className="flex items-center gap-3 mb-6">
            <QrCode className="text-[#D4AF37]" size={20} />
            <h4 className="text-xs font-bold uppercase tracking-widest">Scan to Pay</h4>
          </div>
          
          <div className="space-y-6">
            {/* IDFC Scanner Placeholder */}
            <div className="bg-white p-4 rounded-2xl aspect-square flex flex-col items-center justify-center border border-gray-100 group relative">
              <div className="absolute inset-0 bg-gray-900/5 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity rounded-2xl">
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-2">IDFC Scanner</span>
                <QrCode size={40} className="text-gray-300" />
              </div>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=IDFC-10092166725" alt="IDFC QR" className="w-full h-full object-contain" />
            </div>

            {/* GPay Scanner Placeholder */}
            <div className="bg-white p-4 rounded-2xl aspect-square flex flex-col items-center justify-center border border-gray-100 group relative">
              <div className="absolute inset-0 bg-gray-900/5 flex flex-col items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity rounded-2xl">
                <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mb-2">Google Pay</span>
                <QrCode size={40} className="text-gray-300" />
              </div>
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=meerramevawala@okaxis" alt="GPay QR" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
