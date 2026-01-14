
import React from 'react';

interface PricingProps {
  onOpenForm: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenForm }) => {
  return (
    <div className="mt-20 sm:mt-40">
      <div className="text-center mb-16 sm:mb-24 px-4">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter font-apple-display leading-tight uppercase text-balance">
          Simple scaling. <br className="hidden sm:block"/>
          <span className="text-happening italic font-editorial font-light">Real results.</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-0">
        <div className="relative group">
          {/* Intense Glow Border Beam */}
          <div className="absolute -inset-[2px] sm:-inset-[3px] bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 rounded-[2rem] sm:rounded-[3.2rem] opacity-30 group-hover:opacity-70 blur-sm sm:blur-md transition-opacity duration-700 animate-[pulse_5s_infinite]"></div>
          
          <div className="relative bg-white border border-gray-100 p-8 sm:p-12 md:p-20 rounded-[1.8rem] sm:rounded-[3rem] shadow-2xl flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="flex-1 w-full">
              <div className="mb-8 sm:mb-10">
                <span className="bg-pink-50 text-pink-500 text-[9px] sm:text-[10px] font-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full tracking-widest uppercase mb-4 inline-block shadow-sm">The Shop Accelerator</span>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-2 font-apple-display uppercase">Accelerator</h3>
                <p className="text-gray-400 font-semibold text-lg sm:text-xl leading-snug">Everything your shop needs to become the local talk of the town.</p>
              </div>

              <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 mb-8 sm:mb-12">
                {[
                  "4 Viral Vertical Reels / month",
                  "Trend-jacking Scripts & Hook Lab",
                  "Professional On-camera Coaching",
                  "Full Ad Campaign Optimization",
                  "Conversion Tracking & Local SEO",
                  "Real-time Collaboration Portal",
                  "Cancel Anytime, No Contracts"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 sm:space-x-5">
                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-pink-100 flex items-center justify-center">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-bold text-base sm:text-lg leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-[380px] bg-gradient-to-b from-gray-50 to-white p-8 sm:p-10 md:p-12 rounded-[1.8rem] sm:rounded-[2.5rem] border border-gray-100 flex flex-col justify-between min-h-0 sm:min-h-[450px] shadow-inner">
              <div className="mb-8 sm:mb-10">
                <div className="flex items-baseline mb-3 sm:mb-4">
                  <span className="text-5xl sm:text-7xl font-black tracking-tight">$2,495</span>
                  <span className="text-gray-400 font-bold ml-2 text-lg sm:text-xl">/mo</span>
                </div>
                <p className="text-gray-500 font-bold text-base sm:text-lg leading-relaxed italic">"It's like hiring a full marketing department for the cost of a barista."</p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <button 
                  onClick={onOpenForm}
                  className="w-full bg-black text-white py-5 sm:py-7 rounded-2xl sm:rounded-3xl text-xl sm:text-2xl font-black hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] group/btn overflow-hidden relative"
                >
                  <span className="relative z-10 uppercase">Secure Your Slot</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                </button>
                <button 
                  onClick={onOpenForm}
                  className="w-full bg-white border-2 border-gray-100 text-gray-900 py-4 sm:py-5 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg hover:bg-gray-50 transition-colors"
                >
                  Talk to a Human
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
