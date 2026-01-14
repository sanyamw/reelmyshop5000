
import React, { useState, useEffect } from 'react';

interface HeroProps {
  onOpenForm: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenForm }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX - window.innerWidth / 2) / 60,
        y: (e.clientY - window.innerHeight / 2) / 60,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center pt-20 sm:pt-28 pb-20 relative overflow-visible">
      {/* Dynamic colorful blobs in hero area */}
      <div 
        className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-400/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0 transition-transform duration-300 ease-out"
        style={{ transform: `translate(${offset.x * 3}px, ${offset.y * 3}px)`, left: '5%', top: '15%' }}
      ></div>
      <div 
        className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-400/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none z-0 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${offset.x * -2}px, ${offset.y * -2}px)`, right: '5%', top: '10%' }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-0">
        {/* Subtle Badge */}
        <div className="mb-6 sm:mb-8 inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/5 to-pink-500/5 border border-white/80 px-4 sm:px-5 py-2 rounded-full shadow-lg shadow-black/5 backdrop-blur-md">
          <span className="flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
          <span className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.2em] text-gray-600">Local Domination Redefined</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[9rem] lg:text-[10rem] font-black tracking-tighter leading-[0.9] sm:leading-[0.82] font-apple-display mb-8 sm:mb-10 text-balance uppercase">
          Real Local <br />
          <span className="text-happening relative">
            Growth
            <span className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-400 blur-sm opacity-50"></span>
          </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-3xl text-gray-500 max-w-3xl mx-auto font-medium leading-tight mb-10 sm:mb-12 text-balance px-2 sm:px-0">
          ReelMyShop scripts, shoots, and advertises cinematic vertical video to bring customers to your door. Stop guessing, start growing.
        </p>

        {/* Immediate CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 sm:mb-20">
          <button 
            onClick={onOpenForm}
            className="w-full sm:w-auto group relative bg-black text-white px-8 sm:px-10 py-5 sm:py-6 rounded-2xl sm:rounded-3xl text-lg sm:text-xl font-bold hover:scale-[1.03] transition-all duration-300 shadow-2xl hover:shadow-pink-500/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center justify-center">
              View Plans & Pricing
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </span>
          </button>
          <a href="#benefits" className="w-full sm:w-auto text-lg font-bold text-gray-900 px-8 py-5 rounded-2xl sm:rounded-3xl border border-gray-100 bg-white/50 hover:bg-white transition-all">
            See Our Work
          </a>
        </div>

        {/* Parallax Mockup Section */}
        <div className="relative w-full max-w-5xl mx-auto group">
          <div 
            className="flex justify-center gap-3 sm:gap-6 transition-transform duration-700 ease-out perspective-1000"
            style={{ transform: `rotateX(${offset.y * -0.3}deg) rotateY(${offset.x * 0.3}deg)` }}
          >
            {/* Phone 1 */}
            <div className="w-1/4 aspect-[9/19.5] glass-card rounded-[1.5rem] sm:rounded-[3rem] p-1.5 sm:p-3 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-translate-x-4"
                 style={{ transform: `translateY(${offset.y * -0.8}px)` }}>
              <div className="w-full h-full rounded-[1.2rem] sm:rounded-[2.5rem] overflow-hidden bg-gray-100 relative">
                <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Local Biz 1" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
              </div>
            </div>
            {/* Phone 2 - The 'Happening' Hero */}
            <div className="w-1/3 aspect-[9/19.5] glass-card rounded-[2rem] sm:rounded-[3.5rem] p-2 sm:p-4 shadow-[0_25px_50px_-12px_rgba(236,72,153,0.15)] sm:shadow-[0_50px_100px_-20px_rgba(236,72,153,0.15)] -translate-y-8 sm:-translate-y-12 transition-all duration-1000 group-hover:scale-110 z-20 ring-2 sm:ring-4 ring-white"
                 style={{ transform: `translateY(${-32 + offset.y * -1.5}px)` }}>
              <div className="w-full h-full rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden bg-gray-100 relative">
                 <img src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Viral Reel" />
                 <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 via-transparent to-transparent"></div>
                 <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 right-4 sm:right-8 text-left">
                    <div className="h-1 sm:h-2 w-10 sm:w-16 bg-white rounded-full mb-2 sm:mb-3 shadow-sm"></div>
                    <div className="h-1 sm:h-2 w-16 sm:w-28 bg-white/40 rounded-full"></div>
                 </div>
              </div>
            </div>
            {/* Phone 3 */}
            <div className="w-1/4 aspect-[9/19.5] glass-card rounded-[1.5rem] sm:rounded-[3rem] p-1.5 sm:p-3 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:translate-x-4"
                 style={{ transform: `translateY(${offset.y * -1.2}px)` }}>
              <div className="w-full h-full rounded-[1.2rem] sm:rounded-[2.5rem] overflow-hidden bg-gray-100 relative">
                 <img src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e01a?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" alt="Local Biz 2" />
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
