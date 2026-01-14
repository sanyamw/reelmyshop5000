
import React, { useState } from 'react';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-xl bg-white rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 shadow-2xl overflow-y-auto max-h-[90vh] glass-card border border-white">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 text-gray-400 hover:text-black transition-colors"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl font-black tracking-tighter font-apple-display mb-3 uppercase leading-tight">
                Let's scale <br />
                <span className="text-happening italic font-editorial font-light lowercase">your shop.</span>
              </h2>
              <p className="text-gray-500 font-medium text-sm sm:text-base">Tell us a bit about your business and we'll be in touch within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Company Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="e.g. Acme Coffee Co." 
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-pink-500 focus:bg-white rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 outline-none transition-all font-bold text-base sm:text-lg"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-1 sm:space-y-2 relative">
                    <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Employee Strength</label>
                    <div className="relative">
                      <select required className="w-full bg-gray-50 border-2 border-transparent focus:border-pink-500 focus:bg-white rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 outline-none transition-all font-bold text-base sm:text-lg appearance-none cursor-pointer">
                        <option value="" disabled selected>Select size</option>
                        <option value="1-5">1-5 employees</option>
                        <option value="6-20">6-20 employees</option>
                        <option value="21-50">21-50 employees</option>
                        <option value="50+">50+ employees</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="+91 00000-00000" 
                      className="w-full bg-gray-50 border-2 border-transparent focus:border-pink-500 focus:bg-white rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 outline-none transition-all font-bold text-base sm:text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-gray-400 ml-4">Shop Location</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="City, State (e.g. Mumbai, MH)" 
                    className="w-full bg-gray-50 border-2 border-transparent focus:border-pink-500 focus:bg-white rounded-xl sm:rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 outline-none transition-all font-bold text-base sm:text-lg"
                  />
                </div>
              </div>

              <button className="w-full bg-black text-white py-5 sm:py-6 rounded-xl sm:rounded-2xl text-lg sm:text-xl font-bold hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-xl mt-4 relative overflow-hidden group/submit">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-orange-500 opacity-0 group-hover/submit:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 uppercase tracking-tighter">Submit Application</span>
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-12 sm:py-20 animate-in zoom-in duration-500">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter font-apple-display mb-3 sm:mb-4 uppercase">Success!</h2>
            <p className="text-gray-500 font-medium text-base sm:text-lg leading-relaxed">We've received your application. One of our creative directors will reach out via WhatsApp shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadForm;
